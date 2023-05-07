import CurrentPosition from '../currentPosition';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { LinearScale, CategoryScale, PointElement, LineElement, Chart as Chartjs, ChartData } from "chart.js";

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Chart({currentPosition}: {currentPosition: CurrentPosition | null}) {
    const [temperature, setTemperature] = useState<ChartData<"line"> | null>(null);

    useEffect(() => {
        if(currentPosition !== null) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentPosition.lat}&longitude=${currentPosition.lng}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
            .then((res) => res.json())
            .then((data) => {
                let hours = data.hourly.time.map((date: string) => DateTime.fromISO(date).toFormat("HH'h' dd-MMM"));
                let chartData = {
                    labels: hours,
                    datasets: [{
                        label: 'Temperature in C',
                        data: data.hourly.temperature_2m,
                        borderColor: "blue",
                        fill: true,
                        pointRadius: 2
                    }]
                }
                setTemperature(chartData);
            });
        }
    }, [currentPosition])

    return temperature === null ? null :
    (
        <Line data={temperature}/>
    )
}