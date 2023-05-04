import './style.css'
// import 'leaflet/dist/leaflet.css'
import 'leaflet';
import onMarkerClick from './markerClick';


let map = L.map('map').setView([41.145, -8.60], 13);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

let currentMarker;

function onMapClick(event) {
    if (currentMarker) {
        currentMarker.removeFrom(map);
    }
    let marker = L.marker().setLatLng(event.latlng);
    marker.addTo(map);
    marker.on('click', onMarkerClick);
    currentMarker = marker;
}

map.on('click', onMapClick);
