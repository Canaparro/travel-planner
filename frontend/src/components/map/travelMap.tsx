import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './locationMarker'
import styles from '@/styles/Home.module.css'
import { ScriptProps } from 'next/script'

export default function travelMap({setCurrentPosition}) {
    return (
        <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            // TODO: replace with open street map
            <TileLayer url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']} />
            <LocationMarker setCurrentPosition={setCurrentPosition}/>
        </MapContainer>
    )
}
