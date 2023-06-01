/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables, LineController, LineElement, PointElement } from 'chart.js';import { useSelector } from 'react-redux';

const BidsAndRequestsBar = () => {
  // register Line chart
  Chart.register(LineController, LineElement, PointElement);
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);

  const LegendLabels = React.useMemo(() => {
    return {
      font: {
        size: 14,
        family: themeValues.font,
      },
      padding: 20,
      usePointStyle: true,
      boxWidth: 10,
    };
  }, [themeValues]);
  const ChartTooltip = React.useMemo(() => {
    return {
      enabled: true,
      position: 'nearest',
      backgroundColor: themeValues.foreground,
      titleColor: themeValues.primary,
      titleFont: themeValues.font,
      bodyColor: themeValues.body,
      bodyFont: themeValues.font,
      bodySpacing: 10,
      padding: 15,
      borderColor: themeValues.separator,
      borderWidth: 1,
      cornerRadius: parseInt(themeValues.borderRadiusMd, 10),
      displayColors: false,
      intersect: true,
      mode: 'point',
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: ['April 1', 'April 2', 'April 3', 'April 4', "April 5", "April 6", "April 7"],
      datasets: [
        {
          label: 'ADX Ad Requests',
          borderColor: themeValues.primary,
          backgroundColor: `rgba(${themeValues.primaryrgb},0.1)`,
          data: [13269053, 13771586, 14621105, 14725483, 16678062, 14434533, 14823751],
          type: 'bar'
        },
        {
          label: 'Bids',
          borderColor: themeValues.secondary,
          backgroundColor: `rgba(${themeValues.secondaryrgb},0.1)`,
          data: [27434690, 28558686, 30948591, 30909111, 33287256, 29046877, 30007830],
          type: 'bar'
        },
        {
          type: 'line', // define type of the new dataset
          label: 'Unmatched Ad Requests', // change label as required
          borderColor: themeValues.tertiary, // assume themeValues has tertiary color
          backgroundColor: `rgba(${themeValues.tertiaryrgb},0.1)`, // assume themeValues has tertiaryrgb
          data: [95.24, 94.51, 93.71, 93.69, 93.82, 80.91, 93.46], // change data as required
          yAxisID: 'y1',
          tension: 0.3 // specify y-axis ID
        }
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'bar',
      options: {
        elements: {
          bar: {
            borderWidth: 1.5,
            borderRadius: parseInt(themeValues.borderRadiusMd, 10),
            borderSkipped: false,
          },
        },
        plugins: {
          crosshair: false, 
          datalabels: false,
          legend: {
            position: 'bottom',
            labels: LegendLabels,
          },
          tooltip: ChartTooltip,
          streaming: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
            },
            ticks: {
              padding: 8,
              fontColor: themeValues.alternate,
            },
          },
          x: {
            grid: { display: false, drawBorder: false },
          },
          y1: { // new y-axis
            position: 'right',
            grid: {
              display: false,
            },
            ticks: {
              callback: function(value, index, values) {
                return value + '%'; // Append '%' to each tick
              }
            }
          },
        },
      },
      data,
    };
  }, [data, LegendLabels, ChartTooltip, themeValues]);

  useEffect(() => {
    let myChart = null;
    if (chartContainer && chartContainer.current) {
      Chart.register(...registerables);
      myChart = new Chart(chartContainer.current, config);
    }
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [config]);

  return <canvas ref={chartContainer} />;
};

export default React.memo(BidsAndRequestsBar);
