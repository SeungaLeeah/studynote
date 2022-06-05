import React,{memo} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChartView = memo (({chartData})=> {

   const params = useParams();
   const {category} = params;


    /** 그래프 옵션 */
    const options={
        //indexAxis: 그래프 축 식별자
            responsive: true,
            plugins: {
              legend: {
                position: 'top'
              },
              
            },
          };
          
    /** chart에 표시될 데이처 (막대그래프용) */
    const data ={
        labels: chartData.date,
  datasets: [
    {
      label: '명',
      // 선택 옵션에 따라  data 값 명수가 달라짐
      data: category,
      borderColor: 'rgb(13, 122, 211)',
      backgroundColor: 'rgba(13, 122, 211, 0.5)',
    }
  ],
    };
  return (
    
    <Line 
    data={data}
    options={options} 
    />
  )
});

LineChartView.defaultProps ={
    chartData: {
        dataItem:[], date:[]
    }
}

export default LineChartView;