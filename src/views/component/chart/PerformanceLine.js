import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { useSelector } from 'react-redux';

const PerformanceLine = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const ChartTooltipForCrosshair = React.useMemo(() => {
    return {
      enabled: true,
      position: 'nearest',
      backgroundColor: themeValues.foreground,
      titleColor: themeValues.primary,
      titleFont: themeValues.font,
      bodySpacing: 10,
      bodyColor: themeValues.body,
      bodyFont: themeValues.font,
      padding: 15,
      cornerRadius: parseInt(themeValues.borderRadiusMd, 10),
      displayColors: false,
      borderColor: themeValues.separator,
      borderWidth: 1,
      intersect: false,
      mode: 'index',
    };
  }, [themeValues]);
  const Crosshair = React.useMemo(() => {
    return {
      sync: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      line: {
        color: themeValues.separator,
        width: 1,
      },
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
      datasets: [
        {
          label: 'eCPM',
          data: [2.36, 2.24, 2.26, 2.41, 2.18, 2.17, 2.25],
          fill: false,
          cubicInterpolationMode: 'monotone',
          borderColor: themeValues.primary,
          borderWidth: 2,
          pointBackgroundColor: themeValues.primary,
          pointBorderColor: themeValues.primary,
          pointHoverBackgroundColor: themeValues.primary,
          pointHoverBorderColor: themeValues.primary,
          pointRadius: 3,
          pointBorderWidth: 3,
          yAxisID: 'y'
        },
        {
          label: 'Fill-rate',
          data: [0.5, 0.54, 0.57, 0.63, 0.56, 0.64, 0.54],
          fill: false,
          cubicInterpolationMode: 'monotone',
          borderColor: themeValues.alternate,
          borderWidth: 2,
          pointBackgroundColor: themeValues.alternate,
          pointBorderColor: themeValues.alternate,
          pointHoverBackgroundColor: themeValues.alternate,
          pointHoverBorderColor: themeValues.alternate,
          pointRadius: 3,
          pointBorderWidth: 3,
          yAxisID: 'y1'
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'line',
      plugins: [CrosshairPlugin, ChartDataLabels],
      options: {
        layout: {
          padding: 0,
        },
        showLine: true,
        plugins: {
          crosshair: Crosshair,
          datalabels: false,
          tooltip: ChartTooltipForCrosshair,
          legend: false,
          streaming: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
              drawTicks: true,
            },
            ticks: {
              padding: 8,
              stepSize: 0.05,
              fontColor: themeValues.alternate,
            },
            position: 'left'
          },
          y1: {
            type: 'linear',
            display: true,
            grid: {
              display: false,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
              drawTicks: true,
            },
            ticks: {
              padding: 8,
              stepSize: 0.02,
              fontColor: themeValues.alternate,
            },
            position: 'right'
          },

          x: {
            type: 'category',
            grid: {
              display: false,
              drawTicks: true,
              drawBorder: false,
            },
            ticks: { fontColor: themeValues.alternate },
          },
        },
      },
      data,
    };
  }, [themeValues, data, ChartTooltipForCrosshair, Crosshair]);

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

export default React.memo(PerformanceLine);