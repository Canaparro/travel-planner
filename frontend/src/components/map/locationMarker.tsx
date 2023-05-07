import { useState } from "react"
import { useMapEvents, Marker } from "react-leaflet"
import { LatLngExpression, LeafletMouseEvent } from 'leaflet'

export default function LocationMarker({setCurrentPosition}) {
  const [position, setPosition] = useState<LatLngExpression | null>(null)
  useMapEvents({
    click(e: LeafletMouseEvent) {
      setCurrentPosition(e.latlng)
      setPosition(e.latlng)
    }
  })

  return position === null ? null : (
    <Marker position={position}/>
  )
}