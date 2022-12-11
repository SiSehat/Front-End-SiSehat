import { GeolocateControl } from "mapbox-gl";

export default function GeolocationUser(props) {
    // if (props.mapRef.current === null) return

    const geolocate = () => {
        const geolocationData = new GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        }).on('geolocate', (locateNow) => {
            props.myLocation([locateNow.coords.latitude, locateNow.coords.longitude])
            console.log(locateNow);
        })
        return geolocationData
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
        getContainerNode().appendChild(geolocate().onAdd(getMapboxMap()))
    }
}