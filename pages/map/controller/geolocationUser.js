import mapboxgl from "mapbox-gl";

export default function GeolocationUser(props) {
    if (props.mapRef.current === null) return

    const geolocation = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        trackUserLocation: true,
    })

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
        getContainerNode().appendChild(geolocation.onAdd(getMapboxMap()))
    }
}