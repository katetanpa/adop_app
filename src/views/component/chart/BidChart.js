import React, {useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useSelector } from 'react-redux';

function BidChart(props) {
    const { themeValues } = useSelector((state) => state.settings);
    const color = React.useMemo(() => {
      return [
        `${themeValues.body}`,
        `rgba(${themeValues.primaryrgb},0.5)`,
        `rgba(${themeValues.secondaryrgb},0.5)`,
        `rgba(${themeValues.primaryrgb},0.3)`,
        `rgba(${themeValues.secondaryrgb},0.3)`,
        `rgba(${themeValues.quaternaryrgb},0.5)`,
        `rgba(${themeValues.quaternaryrgb},0.3)`
      ];
    }, [themeValues]);
    useLayoutEffect(() => {
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const root = am5.Root.new('chartdiv');
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
      })
    );
    chart.set(
      'scrollbarX',
       am5.Scrollbar.new(root, {
        orientation: 'horizontal',
        height: 20,
      })
    );
    chart.get("colors").set("colors", color.slice(1, 6));
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "Range",
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {}),
    }));
    xAxis.data.setAll(props.data);
    
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      strictMinMaxSelection: true,
      renderer: am5xy.AxisRendererY.new(root, {}),
    }));
    chart.bottomAxesContainer.children.push(chart.get("scrollbarX"));
    var legend = chart.bottomAxesContainer.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50,
      layout: root.gridLayout,
    }));
    legend.labels.template.setAll({
      fill: color[0]
    });
    xAxis.get("renderer").labels.template.setAll({
      fill: color[0]
    });
    yAxis.get("renderer").labels.template.setAll({
      fill: color[0]
    });
    xAxis.get("renderer").grid.template.setAll({
      stroke: color[0],
      strokeWidth: 0.3

    });
    yAxis.get("renderer").grid.template.setAll({
      stroke: color[0],
      strokeWidth: 0.3
    });
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName ? fieldName : 'Other',
        categoryXField: "Range",
      }));
      series.columns.template.setAll({
        tooltipText: "{categoryX} | {name}: {valueY}",
        tooltipY: 0,
        width: am5.percent(90),
      });
      if (fieldName === 'Winner') series.columns.template.set('fill', themeValues.primary);
      series.data.setAll(props.data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
      legend.data.push(series);
    };
    [...new Set(props.data.reduce((acc, el) => acc.concat(Object.keys(el)), []))].filter(el => el != 'Range').forEach((el) => {
      makeSeries(el, el);
    });
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);   
    root.current = root;
    return () => {
      root.dispose();
    };
  }, [themeValues]);
  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default React.memo(BidChart);
