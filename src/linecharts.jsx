// import React, { useEffect } from 'react';


// const LineChartComponent = () => {
//   useEffect(() => {
//     google.charts.load('current', { packages: ['corechart', 'line'] });
//     google.charts.setOnLoadCallback(drawCurveTypes);

//     function drawCurveTypes() {
//       var data = new window.google.visualization.DataTable();
//       data.addColumn('number', 'X');
//       data.addColumn('number', 'Dogs');
//       data.addColumn('number', 'Cats');

//       data.addRows([
//         [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
//         // ... (remaining data points)
//         [68, 75, 67], [69, 80, 72]
//       ]);

//       var options = {
//         hAxis: {
//           title: 'Time'
//         },
//         vAxis: {
//           title: 'Popularity'
//         },
//         series: {
//           1: { curveType: 'function' }
//         }
//       };

//       var chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));
//       chart.draw(data, options);
//     }
//   }, []);

//   return (
//     <div id="chart_div" style={{ width: '100%', height: '400px' }}></div>
//   );
// };

// export default LineChartComponent;
