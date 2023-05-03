function init() {
    let map = L.map('map').setView([41.145, -8.60], 13);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    function onMapClick(event) {
        const latlng = event.latlng;
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latlng.lat}&longitude=${latlng.lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, false);
        xhttp.onload = function() {
            let jsonResponse = JSON.parse(this.response);
            let content = `Temperature: ${jsonResponse.current_weather.temperature}`
            L.popup().setLatLng(latlng).setContent(content).openOn(map);
            L.marker().setLatLng(latlng).addTo(map);
        }
        xhttp.send();
    }

	map.on('click', onMapClick);
}
