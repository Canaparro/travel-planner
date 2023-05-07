import styles from '@/styles/Home.module.css'
import CurrentPosition from '../currentPosition';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { DateTime } from 'luxon';
import { LinearScale, CategoryScale, PointElement, LineElement, Chart as Chartjs } from "chart.js";

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Chart({currentPosition}: {currentPosition: CurrentPosition}) {
    const [data, setData] = useState(null);

    // if(currentPosition !== null) {
    //     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentPosition.lat}&longitude=${currentPosition.lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             let hours = data.hourly.time.map((date: string) => DateTime.fromISO(date).toFormat("HH'h' dd-MMM"));
    //             let myData = {
    //                 labels: hours,
    //                 datasets: [{
    //                     label: 'Temperature in C',
    //                     data: data.hourly.temperature_2m,
    //                     borderColor: "blue",
    //                     fill: true,
    //                     pointRadius: 2
    //                 }]
    //             }
    //             setData(myData);
    //     });
    // }

    return data === null ? null :
    (
        <Line data={data}/>
    )
    // return (
        // <Line data={{
        //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //     datasets: [{
        //       label: '# of Votes',
        //       data: [12, 19, 3, 5, 2, 3],
        //       borderWidth: 1
        //     }]
        //   }}/>
    // )
}