import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

type ChartModel = {
     arr:any
    currency: string
    days: string
}

const Chart = (props: ChartModel) => {
 const prices:any = []
 const date: any = []

 for(let i=0; i < props.arr.length; i++){
    if(props.days === '24h'){
        date.push(new Date(props.arr[i][0]).toLocaleTimeString());
    }else{
        date.push(new Date(props.arr[i][0]).toLocaleDateString());
    }
    prices.push(props.arr[i]);
 }

 const data = {
        labels: date,
        datasets: [
            {
                label: `Price in ${props.currency}`,
                data: prices,
                borderColor: "rgb(99, 255, 133)",
                backgroundColor: "rgba(99, 255, 133,0.5)",
            }
        ]
 }

 return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
}

export default Chart
