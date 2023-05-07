import { useState } from "react"
import { useMapEvents, Marker } from "react-leaflet"
import { LatLngExpression, LeafletMouseEvent } from 'leaflet'

export default function LocationMarker({setCurrentPosition, setOpenChart}) {
  const [position, setPosition] = useState<LatLngExpression | null>(null)
  useMapEvents({
    click(e: LeafletMouseEvent) {
      setCurrentPosition(e.latlng)
      setPosition(e.latlng)
      setOpenChart(true)
    }
  })

  return position === null ? null : (
    <Marker position={position}/>
  )
}