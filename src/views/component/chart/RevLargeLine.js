/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useSelector } from 'react-redux';
import { max } from 'date-fns';

const RevLargeLine = ({dataIn}) => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  /*-------------*/
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
      mode: 'index',
    };
  }, [themeValues]);
  const data = React.useMemo(() => {
    return {
      labels: dataIn.map(el => el.Range),
      datasets: [
        {
          label: 'Estimated Revenue',
          borderColor: themeValues.secondary,
          backgroundColor: `rgba(${themeValues.quaternaryrgb},0.5)`,
          data: dataIn.map((el) => {
            let result = 0;
            if (el.Winner) {
              result = el.Winner[1].replace('$', "")/1000*el.Winner[0];
            }
            else result = 0;
            return result;
          }),
          type: 'line',
          yAxisID: 'y1',
          icons: ['chevron-top', 'chevron-bottom', 'chevron-top', 'chevron-top', 'chevron-top'],
          pointBackgroundColor: themeValues.primary,
          pointBorderColor: themeValues.primary,
          pointHoverBackgroundColor: themeValues.foreground,
          pointHoverBorderColor: themeValues.primary,
          borderWidth: 2,
          pointRadius: 2,
          pointBorderWidth: 1,
          pointHoverBorderWidth: 1,
          pointHoverRadius: 5,
          fill: false,
          cubicInterpolationMode: 'monotone',
        },
        {
          label: 'Bid Win',
          borderColor: themeValues.primary,
          backgroundColor: `rgba(${themeValues.primaryrgb},0.5)`,
          data: dataIn.map((el) => {
            return Object.keys(el).includes('Winner') ? el['Winner'][0] : 0;
          }
          ),
        },
        {
          label: 'Bid Lost',
          borderColor: themeValues.secondary,
          backgroundColor: `rgba(${themeValues.secondaryrgb},0.1)`,
          data: dataIn.map((el) => {
          return Object.keys(el).filter(key => key !== 'Winner' && key !== 'Range').reduce((acc, cur) => acc += el[cur][0], 0);
          }
          ),
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
          },
        },
        onClick(e) {
          const chart = e.chart;
          chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
          chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
          chart.update();
        },
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: Math.max(...data.datasets[1].data.map((el, i) => el + data.datasets[2].data[i])), minRange: 50}
            },
            pan: {
              enabled: true,
              mode: 'xy',
            },
            zoom: {
              wheel: {
                enabled: false,
              },
              pinch: {
                enabled: false
              },
              mode: 'xy',
            }
          },
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
            stacked: true,
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10000,
              padding: 8,
              fontColor: themeValues.alternate,
            },
          },
          y1: {
            position: 'right',
            grid: {
              display: false,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              padding: 8,
              fontColor: themeValues.alternate,
            },
          },
          x: {
            grid: { display: false, drawBorder: false },
            stacked: true,
          },
        },
      },
      data,
    };
  }, [data, LegendLabels, ChartTooltip, themeValues]);

  useEffect(() => {
    let myChart = null;
    if (chartContainer && chartContainer.current) {
      Chart.register(zoomPlugin);
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

export default React.memo(RevLargeLine);
