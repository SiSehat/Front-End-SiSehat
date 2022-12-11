
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
/* eslint-disable complexity,max-statements */
export default function GeocoderControl(props) {
    // if (props.mapRef.current === null) return

    const mapboxController = () => {
        const ctrl = new MapboxGeocoder({
            accessToken: props.mapboxAccessToken,
            placeholder: 'Cari pelayanan kesehatan',
            language: 'id',
            render: function (item) {
                // extract the item's maki icon or use a default
                const maki = item.properties.maki || 'marker';
                return `<div class='geocoder-dropdown-item'>
                    <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
                    <span class='geocoder-dropdown-text'>
                    ${item.text}
                    </span>
                </div>`;
            },
            mapboxgl
        });

        return ctrl
    }

    const getContainerNode = () => {
        const { containerRef } = props

        return (containerRef && containerRef.current) || null
    }
    
    const getMapboxMap = () => {
        const { mapRef } = props

        return (mapRef && mapRef.current && mapRef.current.getMap()) || null
    }

    if (getMapboxMap()) {
        getContainerNode().innerHTML= '';
        
        const geolocation = mapboxController().onAdd(getMapboxMap())
        geolocation.querySelector('svg').remove()

        getContainerNode().appendChild(geolocation)
    }
}