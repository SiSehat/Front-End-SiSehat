import { useRef, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import GeocoderControl from "./controler/geocoder";
import GeolocationUser from "./controler/geolocationUser";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/FooterBar";

export default function Map() {
    const [expand, setExpand] = useState(false);
    const mapRef = useRef(null)
    const findMe = useRef(null)
    const searchHosptial = useRef(null)
    const [selectedHospital, setSelectedHospital] = useState(null); 
    const [viewport, setViewport] = useState({
        latitude: -6.200000,
        longitude: 106.816666,
        zoom: 8,
        pitch: 50
    });
    const [userNowLocation, setUserNowLocation] = useState(null);

    const findFaskes = async (latlng) => {
        const rawFaskes = await fetch(`https://api-si-sehat.vercel.app/hospitals?latlng=${latlng[0]},${latlng[1]}`)
        const dataFaskes = await rawFaskes.json();
        setUserNowLocation(dataFaskes);
    }

    return (
        <>
            <header>
                <Navbar active="map"  />
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
                                            return (
                                                <Marker
                                                    key={index} 
                                                    anchor='center'
                                                    latitude={latlng[0]}
                                                    longitude={latlng[1]}
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
                                    <a href={selectedHospital.LatLongFaskes}>Go {selectedHospital.TipeFaskes}</a>
                                </Popup>
                            )
                        }
                    </ReactMapGl>
                    {/* <div ref={mapContainer} id="map" /> */}
                </div>


                <div className={ expand ? 'wrapper-sidebar' : 'wrapper-sidebar close' }>
                    <button 
                        type="button" 
                        onClick={() => setExpand(!expand)} 
                        style={{ right: expand ? '-5vh' : '-25vh' }} 
                        title="expand-sidebar" 
                        id="expand-list-hospital">

                        {(expand) ?  
                            <TbLayoutSidebarLeftCollapse className="expand-hospitals" /> : 
                            <TbLayoutSidebarRightCollapse className="expand-hospitals" /> 
                        }
                    </button>
                    <div className="search" ref={searchHosptial}>
                        {/* <input type="text" placeholder="Cari rumah sakit ...." /> */}
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
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}