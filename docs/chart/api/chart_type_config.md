
---
sidebar_label: type
title: type
---          

@short: 
specifies the type of a chart




@type: string

@example: 
var chart = new dhx.Chart("chart_container",{
    type:"line" 
});


@template:	api_config
@descr: 
### Available types of charts 

- "bar", "x-bar"
- "line", "spline"
- "scatter"
- "area", "splineArea"
- "donut", "pie", "pie3D"
- "radar"

@related:
chart/configuration_properties.md#mainproperties
chart/charts_overview.md