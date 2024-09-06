import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js'

import { PieChartData } from './PieChartData';

ChartJS.register( 
    ArcElement,
    Tooltip,
    Legend,
    Title,
);


export const PieChart =() =>
    {

        const options={
            responsive:true,
            plugins:{
                legend:{
                    position:"top",
                    labels: {
                        font : {
                            size:20
                        }
                    }
                },
                title:{
                    display : true,
                    text : "",
                    font: {
                        size:28
                    }
                },
            },
        };

        const pageStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
            padding: '20px', // Adjust padding as needed
        };
    
        const chartContainerStyle = {
            width: '500px',  // Adjust the width as needed
            height: '600px', // Adjust the height as needed
        };
    
        return (
            <div style={pageStyle}>
                <div style={chartContainerStyle}>
                    <Pie options={options} data={PieChartData} />
                </div>
            </div>
        );
    };



    //     return < Pie options={options} data={PieChartData} />
    // };