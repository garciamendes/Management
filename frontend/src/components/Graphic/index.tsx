// React
import React from 'react'

// Third party
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Consts
import { COLORS } from '../../styles/variables'

function Graphic() {

  const options = {
    chart: {
      backgroundColor: 'transparent',
      marginTop: 40,
      height: 280,
      width: 1024,
    },
    title: '',
    xAxis: {
      lineColor: `${COLORS.Gray}`,
      gridLineWidth: 1,
      lineWidth: 1,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      labels: {
        style: {
          fontSize: 12,
          color: '#5B5B5B',
        },
      },
    },
    yAxis: {
      gridLineWidth: 1,
      lineColor: `${COLORS.Gray}`,
      lineWidth: 1,
      min: 0,
      max: 100,
      title: {
        enabled: false,
      },
      labels: {
        style: {
          fontSize: 12,
          color: '#5B5B5B',
        },
      },
    },
    series: [
      {
        color: `${COLORS.GreenLight}`,
        type: 'spline',
        data: [10, 30, 12, 80, 100, 40, 0, 6, 11, 91, 29, 82],
      },
    ],
    legend: '',
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointWidth: 10,
        borderWidth: 0,
      },
    },
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Graphic