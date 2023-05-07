// import { DateTime } from 'luxon'
// import Chart from 'chart.js/auto'

// export default function createChart(this: XMLHttpRequest) {
//     let jsonResponse = JSON.parse(this.response);
//     let hours = jsonResponse.hourly.time.map((date: string) => DateTime.fromISO(date).toFormat("HH'h' dd-MMM"));
//     new Chart("weather", {
//         type: "line",
//         data: {
//             labels: hours,
//             datasets: [{
//                 label: 'Temperature in C',
//                 data: jsonResponse.hourly.temperature_2m,
//                 borderColor: "blue",
//                 fill: true,
//                 pointRadius: 2
//             }]
//         },
//         options: {
//             legend: { display: false }
//         }
//     });
// }