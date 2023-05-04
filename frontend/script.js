function init() {
    let map = L.map('map').setView([41.145, -8.60], 13);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    let currentMarker;

    function onMapClick(event) {
        if(currentMarker) {
            currentMarker.removeFrom(map);
        }
        let marker = L.marker().setLatLng(event.latlng);
        marker.addTo(map);
        marker.on('click', onMarkerClick);
        currentMarker = marker;
    }

    function onMarkerClick(event) {
        const latlng = event.latlng;
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latlng.lat}&longitude=${latlng.lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, false);
        xhttp.onload = function() {
            let jsonResponse = JSON.parse(this.response);
            let content = `Temperature: ${jsonResponse.current_weather.temperature}`
            let DateTime = luxon.DateTime;
            let hours = jsonResponse.hourly.time.map(date => DateTime.fromISO(date).toFormat("HH'h' dd-MMM"));
            const myChart = new Chart("weather", {
                type: "line",
                data: {
                    labels: hours,
                    datasets: [{
                        data: jsonResponse.hourly.temperature_2m,
                        borderColor: "blue",
                        fill: false,
                        pointStyle: false,
                        pointRadius: 2
                    }]
                },
                options: {
                    legend: {display: false}
                }
            });
            L.popup().setLatLng(latlng).setContent(content).openOn(map);
        }
        xhttp.send();
    }

	map.on('click', onMapClick);
}
