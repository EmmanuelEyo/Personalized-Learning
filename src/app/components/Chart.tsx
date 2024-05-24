import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
);

const Chart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
            label: "Expense",
            data: [6, 7, 3, 8.5, 2, 8, 7, 7.5, 5, 6], 
            backgroundColor: 'transparent',
            borderColor: 'blue',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false // Corrected: Legend is an object
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 10,
                ticks: {
                    stepSize: 2,
                    callback: (value: number) => value + 'K'
                },
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div>
            <Line data={data} options={options}></Line>
        </div>
    );
};

export default Chart;





