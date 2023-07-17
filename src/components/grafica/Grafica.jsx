import React from "react";
import Chart from "react-apexcharts";

const Grafica = () => {
  const options = {
    title: {
            text: 'Venta de la semana',
            align: 'center',
            style: {
                fontSize:  '28px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#263238'
            },
    },
    colors:['#F44336', '#E91E63', '#9C27B0'],
    fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    markers: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    grid: {
        row: {
          colors: ['#aaa', 'tranparent']
        }
    },
    xaxis: {
      categories: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    }
  };

  const series = [
    {
      name: "Canasta básica",
      data: [30, 40, 25, 50, 49, 21, 70]
    },
    {
      name: "Impulso",
      data: [23, 12, 54, 61, 32, 56, 81]
    },
    {
      name: "Eléctrodomestico",
      data: [24, 20, 5, 75, 42, 79, 72]
    }
  ];

  return <Chart options={options} series={series} type="area" width={'100%'} height={'500px'}/>;
};
export default Grafica;