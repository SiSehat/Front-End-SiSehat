import { useEffect, useRef, useState } from "react";
import Footer from "../../components/FooterBar";
import NavBar from "../../components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from 'react-icons/tb'
import mapboxgl from 'mapbox-gl'
import MapboxGeoCoder from '@mapbox/mapbox-gl-geocoder'
import ReactMapGl, { Marker } from 'react-map-gl'
import GeocoderControl from "./controller/geocoder";
import GeolocationUser from "./controller/geolocationUser";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F5YWthMTIiLCJhIjoiY2trd2prZXg2MWZ4YTJ3cGgwNjE5dGszMiJ9.eIRf6IqzvUcxGyrJ1-Mj8w';

export default function Map() {
    const [expand, setExpand] = useState(false);
    const mapRef = useRef(null)
    const findMe = useRef(null)
    const searchHosptial = useRef(null)
    const [showPopup, setShowPopup] = useState(false);
    const [viewport, setViewport] = useState({
        latitude: -6.200000,
        longitude: 106.816666,
        zoom: 8,
        pitch: 50
    });

    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     const mapbox = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v12',
    //         center: [106.816666, -6.200000],
    //         zoom: 11,
    //         attributionControl: false
    //     });

    //     const marker = new mapboxgl
    //         .Marker()
    //         .setLngLat([106.816666, -6.200000])
    //         .setPopup(new mapboxgl.Popup().setHTML(`<h1> test </h1>`))
    //         .addTo(mapbox)

    //     const geolocation = new mapboxgl.GeolocateControl({
    //         positionOptions: {
    //             enableHighAccuracy: true,
    //         },
    //         trackUserLocation: true,
    //     }).onAdd(mapbox)

    //     const geoCoder = new MapboxGeoCoder({
    //         accessToken: mapboxgl.accessToken,
    //         language: 'id',
    //         placeholder: 'Cari pelayanan kesehatan',
    //         proximity: 'restaurants',
    //         render: function (item) {
    //             // extract the item's maki icon or use a default
    //             const maki = item.properties.maki || 'marker';
    //             return `<div class='geocoder-dropdown-item'>
    //                 <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
    //                 <span class='geocoder-dropdown-text'>
    //                 ${item.text}
    //                 </span>
    //             </div>`;
    //         },
    //         mapboxgl,
    //     }).onAdd(mapbox)

    //     geoCoder.removeChild(geoCoder.querySelector('svg'))
    //     // console.log(geolocation);

    //     findMe.current.appendChild(geolocation)
    //     searchHosptial.current.appendChild(geoCoder)
    //     // mapbox.addControl(geolocation)
    // });

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="container">
                <div className="wrapper-map">
                    <ReactMapGl
                        ref={mapRef}
                        mapboxAccessToken="pk.eyJ1Ijoic2F5YWthMTIiLCJhIjoiY2trd2prZXg2MWZ4YTJ3cGgwNjE5dGszMiJ9.eIRf6IqzvUcxGyrJ1-Mj8w"
                        initialViewState={{ ...viewport }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        attributionControl={false}
                        onViewportChange={(newView) => setViewport(newView)}
                    >
                        <Marker
                            latitude={-6.200000}
                            longitude={106.816666}
                        >
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
                                width={50}
                                height={50}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setShowPopup(true)
                                    console.log(showPopup);
                                }}
                            />
                        </Marker>

                        {
                            showPopup && (
                                <Popup
                                    longitude={106.816666}
                                    latitude={-6.200000}
                                    anchor="bottom" style={{ position: 'absolute' }}>
                                    <h1>You here</h1>
                                </Popup>
                            )
                        }
                    </ReactMapGl>
                    {/* <div ref={mapContainer} id="map" /> */}
                </div>


                <div className={expand ? 'wrapper-sidebar' : 'wrapper-sidebar close'}>
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
                            containerRef={searchHosptial}
                            mapRef={mapRef} />
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