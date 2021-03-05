---
sidebar_label: Chart API
title: Chart API
---          


Constructor
---------------

~~~js
var chart = new dhx.Chart("chart_container",{
    type:"line" 
});
~~~

Parameters:

- the HTML container of dhtmlxChart
- an object with configuration settings (check below)

Objects
-------------

- config
- data
- events

Methods
------------

### eachSeries

iterates over Chart series

- parameter:

(*function*) a handler function that takes an array with series objects as a parameter 

~~~js
var chart = new dhx.Chart("chart", {
	type: "radar",
	scales: {
		radial:{
			value: "month",
			maxTicks: 7
		}
	},
	series: [
		{
			id: "A",
			value: "company A",
			fill: "#000000",
			alpha: 0.3,
			color: "#000000"
	 	},
		{
			id: "B",
			value: "company B",
			fill: "#FFFF33",
			alpha: 0.3,
			color: "#FFFF33"
		}
	]
});

chart.eachSeries(function(series){
	// some code here
});
~~~


### configure

sets configuration for a chart

- parameter:

(*object*) an object with [chart configuration](link to config properties)

~~~js
chart.configure({
	type: "radar",
	scales: {
		radial:{
			value: "month",
			maxTicks: 7
		}
	},
	series: [
		{
			id: "A",
			value: "company A",
			fill: "#000000",
			alpha: 0.3,
			color: "#000000"
	 	},
		{
			id: "B",
			value: "company B",
			fill: "#FFFF33",
			alpha: 0.3,
			color: "#FFFF33"
		}
	]
});
~~~


### paint

repaints a chart on a page

~~~js
chart.paint();
~~~ 

### getSeries

returns an object with configuration of a specified series

- parameter:

(*string*) the id of a series

- returns:

(*object*) an object with configuration of a series

~~~js
chart.getSeries("A");
/* => 
{
	active: true, alpha: 0.3, color: "#000000", fill: "#000000",
	id: "A", paddings: 20, pointType: "circle", strokeWidth: 2, 
    tooltip: true, type: "radar", value: "company A"
}
*/
~~~

### destructor

- short: releases occupied resources
- example:
~~~js
chart.destructor();
~~~


Properties
---------------

### type

(*string*) **mandatory**, specifies the type of a chart

~~~js
var chart = new dhx.Chart("chart_container",{
    type:"line" 
});
~~~

### Available types of charts 

- "bar",
- "line",
- "spline",
- "scatter",
- "area",
- "donut",
- "pie",
- "pie3D",
- "radar",
- "x-bar",
- "bars",
- "splineArea"



### animate

(*boolean*) enables/disables animation of series switching, while changing the displayed data, *false* by default

~~~js
var chart = new dhx.Chart("chart_container",{
    type:"bar",
    animate: false 
});
~~~


### scales

(*object*) defines configuration of chart scales

~~~js
var chart = new dhx.Chart("chart_container",{
    type:"area",
    scales: {
    	"bottom" : {
    		text: 'month'
    	},
    	"left" : {
    		padding: 10,
    		max: 90
    	}
    },
    series: [
        {
           value: 'company A',
           strokeWidth: 2
           // more options   
        }
    ]
});
~~~

####The list of config options for scales

- **type** - (*string*) the type of a scale: "left","right","top","bottom","radial"
- **title** - (*string*) sets a title for a scale
- **text** - (*string*) sets a template for labels of data items rendered on a scale
- **locator** - (*string*) points to the data property, the values of which should be rendered in the chart (used for Scatter chart) 
- **textTemplate** - (*function*) sets a template for scale labels
- **textPadding** - (*number*) distance between labels of data items and the scale
- **showText** - (*boolean*) shows/hides labels of data items on the scale
- **scalePadding** - (*number*) distance between the scale and its title
- **hidden** - (*boolean*) hides/shows the whole scale 
- **grid** - (*boolean*) shows/hides the grid lines (for x,y, or both scales). *true* by default for both scales (scales lines are shown). To hide both scales lines, you need to set *grid:false* in the configs of each scale 
- **dashed** - (*boolean*) sets the dashed type for a scale. Use the *dashed:true* option in the configuration of the scale
- **specificLevel** - (*number*) shows a threshold line (a target value); looks for the specified value in the data 
- **specificNumber**  - (*number*) allows setting a threshold line at any defined level (any number, not necessarily from the data)
- **max** - (*number*) the maximal value of the Y scale
- **min** - (*number*) the minimal value of the Y scale
- **log** - (*boolean*) sets the Y scale as logarithmic
- **padding** - (*number*) the padding between the values of the Y scale (area)
- **maxTicks** - (*number*) sets the maximal number of ticks on the Y scale

The **radial** scale has its own properties, due to peculiarities of configuration:

- **radial** scale
	- **value** - (*string*) the name of the dataset property to take data values from (map to)
	- **zebra** - (*boolean*) sets a striped scale coloring for the Radar chart (alternation of two colors in a step)
	- **showAxis** - (*boolean*) renders values of the scale
 
 
### series

(*array*) defines configuration of chart series

~~~js
var chart = new dhx.Chart("chart_container",{
	type:"bar",
    scales: {
    	"bottom" : {
    		text: "month"
    	},
    	"left" : {}
    },
    series: [
    	{
    		id: "A",
    		value: "company A",
    		fill: "#394E79",
    		stacked: stacked,
    		color: "none"
    	},
    	{
    		id: "B",
    		value:"company B",
    		fill: "#5E83BA",
    		stacked: stacked,
    		color: "none"
    	}
    ]
});
~~~

####The list of config options for series (for charts with scales)

- **id** - (*string*) the id of a series
- **type** - (*string*) the type of a chart
- **active** - (*boolean*) defines, whether a series is active/inactive
- **bulletColor** - (*string*) the color of data item points (bullets) in a series  
- **dashed** - (*boolean*) sets the dashed type for a series line
- **strokeWidth** - (*number*) the width of the chart outline
- **value** - (*string*) the name of the data set property to map data values to
- **pointType** - (*string*) sets the type of the point of the data item. There are the following point types:"circle","rect","triangle","rhombus","simpleRect","simpleCircle","empty"
- **barWidth** - (*number*) sets the width of bars in the Bar chart
- **css** - (*string*) adds a style class for a series
- **fill** - (*string*) the color of the series filling (Area, Bar, Radar) in Hex format
- **color** - (*string*) the color of the series outline
- **alpha** - (*number*) transparency of the series filling  (Area, Bar, Radar)
- **gradient** - (*function*) a function that defines the logic of applying gradient to the series filling  (Area, Bar, Radar)
- **tooltip** - (*boolean*) shows values of data items in tooltips, *true* by default
- **tooltipTemplate** - (*function*) a function that defines a template for showing values of data items in tooltip
- **baseLine** - (*number*) sets a base line for rendering data items (bars in Bar chart) 
- **stacked** - (*boolean*) defines whether a stacked chart will be rendered (Bar)


#### The list of config options for series (for charts without scales: Pie, Pie3D, Donut)

- **text** - (*string*) the name of the data set property to map labels of data values to  
- **value** - (*string*) the name of the data set property to map data values to
- **useLines** - (*boolean*) shows/hides lines used to "connect" chart sectors with labels
- **showText** - (*boolean*) shows/hides values of data items on the chart (Pie, Pie3D) 
- **subType** - (*string*) specifies the subtype for Donut chart: "basic"|"percentOnly"|"valueOnly"
- **color** - (*string*) the color of chart outline (Pie, Pie3D) 
- **monochrome** - (*string*) colors chart sections in shades of a color specified as a value of this property (e.g. "blue") 
- **paddings** - (*number*) paddings between a chart and its initial position 


### legend

(*object*) defines the configuration of a chart legend

~~~js
var chart = new dhx.Chart("chart_container",{
    scales: {
    	// scales config
    },
    series: [
    	// list of series 
    ],
    legend: {
    	series: ["A", "B", "C"],
    	valign: "top",
    	halign: "right"
    }    
});
~~~

####The list of config options for legend

- **values** - (*object*) maps attributes of legend items to data set properties. Contains the following properties:  
	- **id** - (*string,number*) the id of the series that will be bound to the legend
    - **text** - (*string*) the pointer to the data value to take a text for the legend from 
    - **color** - (*string*) the pointer to the data value to take a color for the legend from 
	- **alpha** - (*number*) transparency of a legend item
- **form** - (*string*) the form of the legend markers ("rect" or "circle")
- **itemPadding** - (*number*) padding between legend items
- **halign** -  (*string*) the horizontal alignment of the legend block: "left"|"right"|"center"
- **valign** - (*string*) the vertical alignment of the block: "top"|"bottom"|"middle"
- **series** - (*array*) the list of series that should be shown in the legend
- **margin** - (*number*) margin between the scale and the legend
	

### maxPoints

(*number*) displays an average number of values in case a data set is too large to show all the values in the chart

~~~js
var data = [];
var k = 0;
for (var i=0; i<100000; i++) {
	data.push({
        value: "value" + i,
      	value: Math.floor(Math.random() * 10000+k)
    })
    k = (k + 0.02) % 5000;
}
var config = {
	type:"line",
	maxPoints:100,
	scales: {
		bottom: {
			text: "value",
			maxTicks: 10,
			showText: false
		},
		left: {}
	},
	series: [
		{
			value: "value",
			color: "#49A6D9",
			strokeWidth: 2,
			tooltip: true,
			pointType: "empty"
		}
	]
}

var chart = new dhx.Chart("chart", config);
chart.data.parse(data);
~~~

### data

(*array*) specifies an array of data objects to set into the chart

~~~js
var dataset = [
    { month:"`02", "company A":20, "company B":52, "company C":72, "company D":34},
    { month:"`03", "company A":5, "company B":33, "company C":90, "company D":55},
    { month:"`04", "company A":55, "company B":30, "company C":81, "company D":66},
    // more objects
];

var chart = new dhx.Chart("chart_container",{
    type:"bar",
    scales: {
        "bottom" : {
            text: "month"
        },
        "left" : {}
    },
    series: [
        {
            id: "A",
            value: "company A",
            fill: "#394E79",
            stacked: stacked,
            color: "none"
        },
        {
            id: "B",
            value:"company B",
            fill: "#5E83BA",
            stacked: stacked,
            color: "none"
        }
    ],
    data:dataset
});
~~~


Events 
-----------

### toggleSeries 


fires on toggle on/off a series in a legend

- handler parameters:

(*string*) the id of a toggled series 

~~~js
chart.events.on("ToggleSeries", function(id){
    console.log("The "+id+" series is toggled");
});
~~~


### resize 

fires on changing the size of the chart container

- handler parameters:

(*object*) an object with new chart size

~~~js
chart.events.on("Resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});
~~~



@todo:
check lists, namings, descriptions and examples<br/>

