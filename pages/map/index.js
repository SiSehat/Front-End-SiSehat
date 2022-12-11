import { useEffect, useRef, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import GeocoderControl from "./controler/geocoder";
import GeolocationUser from "./controler/geolocationUser";
import WrapperListHospitals from "../../components/map/wrapperHospitals";
import Navbar from "../../components/navbar/Navbar";

export default function Map() {
    const [expand, setExpand] = useState(false);
    const mapRef = useRef(null)
    const findMe = useRef(null)
    const searchHosptial = useRef(null)
    const [selectedHospital, setSelectedHospital] = useState(null); 
    const [viewport, setViewport] = useState({
        latitude: -6.200000,
        longitude: 121.916666,
        zoom: 4,
        pitch: 50,
    });
    const [userNowLocation, setUserNowLocation] = useState(null);

    const findFaskes = async (latlng) => {
        const rawFaskes = await fetch(`https://api-si-sehat.vercel.app/hospitals?latlng=${latlng[0]},${latlng[1]}`)
        const dataFaskes = await rawFaskes.json();
        setUserNowLocation(dataFaskes);
        console.log(dataFaskes);
    }

    useEffect(() => {
        setViewport((prevState) => {
            return {
                ...prevState, 
                width: window.innerWidth, 
                height: window.innerHeight
            }
        })

        async function getRandomHospital() {
            const rawData = await fetch('https://api-si-sehat.vercel.app/hospitals/random')
            const dataRandomHospital = await rawData.json();

            console.log(dataRandomHospital);
            return dataRandomHospital
        }

        async function getDataRandomHospital() {
            const dataRandomHospital = await getRandomHospital();
            setUserNowLocation(dataRandomHospital);
        }

        getDataRandomHospital();
    },[])

    return (
        <>  
            <header>
                <Navbar active="map" />
            </header>
            <main className="container">
                <div className="wrapper-map">
                    <ReactMapGl 
                        ref={mapRef}
                        mapboxAccessToken="pk.eyJ1Ijoic2F5YWthMTIiLCJhIjoiY2trd2prZXg2MWZ4YTJ3cGgwNjE5dGszMiJ9.eIRf6IqzvUcxGyrJ1-Mj8w"
                        initialViewState={{...viewport}}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        attributionControl={false}
                        onViewportChange={(newView) => setViewport(newView)}
                    >

                        {
                            userNowLocation && (
                                <>
                                    {
                                        userNowLocation.hospital.map((hospital, index) => {
                                            const latlng = hospital.LatLongFaskes.replace('http://maps.google.co.id/?q=', '').split(',')
                                            if (latlng.length === 1) return null
                                            return (
                                                <Marker
                                                    key={index} 
                                                    anchor='center'
                                                    latitude={parseFloat(latlng[0])}
                                                    longitude={parseFloat(latlng[1])}
                                                >
                                                    <img
                                                        src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
                                                        width={50}
                                                        height={50}
                                                        onClick={(e) => { 
                                                            e.stopPropagation()
                                                            setSelectedHospital({
                                                                ...hospital, latlng
                                                            })
                                                            console.log(selectedHospital);
                                                        }}
                                                    />
                                                    <h3>{hospital.NamaFaskes}</h3>
                                                </Marker>
                                            )
                                        })
                                    }
                                </>
                            )
                        }

                        {
                            selectedHospital && (
                                <Popup
                                    latitude={selectedHospital.latlng[0]}
                                    longitude={selectedHospital.latlng[1]} 
                                    onClose={() => setSelectedHospital(null)}
                                    anchor="bottom" style={{position: 'absolute'}}>
                                    <p id="tipeFaskes">{selectedHospital.TipeFaskes}</p>
                                    <h2>{selectedHospital.NamaFaskes}</h2>
                                    <span><b>{selectedHospital.Provinsi}</b></span> | <span>{selectedHospital.AlamatFaskes}</span>
                                    <p>{selectedHospital.TelpFaskes}</p>
                                    <a href={selectedHospital.LatLongFaskes} target="_blank">Go {selectedHospital.TipeFaskes}</a>
                                </Popup>
                            )
                        }
                    </ReactMapGl>
                </div>

                <div className={ expand ? 'wrapper-sidebar' : 'wrapper-sidebar close' }>
                    <button 
                        type="button" 
                        onClick={() => setExpand(!expand)} 
                        className={expand ? 'btn-right' : 'btn-right-close'}
                        title="expand-sidebar" 
                        id="expand-list-hospital">

                        {(expand) ?  
                            <TbLayoutSidebarLeftCollapse className="expand-hospitals" /> : 
                            <TbLayoutSidebarRightCollapse className="expand-hospitals" /> 
                        }
                    </button>
                    <div className="search" ref={searchHosptial}>
                        <GeocoderControl
                            mapboxAccessToken="pk.eyJ1Ijoic2F5YWthMTIiLCJhIjoiY2trd2prZXg2MWZ4YTJ3cGgwNjE5dGszMiJ9.eIRf6IqzvUcxGyrJ1-Mj8w"
                            containerRef={searchHosptial}
                            mapRef={mapRef} />
                    </div>

                    <div className="wrapper-feature" ref={findMe}>
                        <GeolocationUser 
                            containerRef={findMe}
                            mapRef={mapRef}
                            myLocation={findFaskes}/>
                    </div>

                    
                    <div className="wrapper-list">
                        <WrapperListHospitals hospitals={userNowLocation} />
                    </div>
                </div>
            </main>
        </>
    )
}