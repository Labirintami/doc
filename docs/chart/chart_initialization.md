---
sidebar_label: How to Start
title: How to Start
---   

```tododelete``` 

To initialize a chart object in an application, you need to take the following steps:

1.  Include related JS and CSS files
2.  Place a chart container on a page
3.  Define data for a chart
4.  Create an object constructor to initialize

##Step 1. Include source files

To start working with dhtmlxChart, you need to include JS and CSS files on a page. There are two of them:

~~~html
<head>
	<script src="codebase/chart.js"></script>
	<link rel="stylesheet" type="text/css" href="codebase/chart.css">   
</head>
~~~


### Include source files from CDN


##Step 2. Set Chart container

Your next step is to specify an HTML container for your future chart.

~~~html
<div id="chart_container" style="width:1000px; height:500px;"></div>
~~~


##Step 3. Specify data

Then you need to define data that will be presented in a chart. dhtmlxChart allows loading data in [JSON](chart/loading.md#json), [XML](chart/loading.md#xml), [CSV](chart/loading.md#csv) or 
[JS Array](chart/loading.md#jsarray) format.
To load inline data, call the **parse()** method of the Data Collection object.

~~~js
var data = [
	 { month: '\'02', 'company A': 20, 'company B': 52, 'company C': 72},
     { month: '\'03', 'company A': 55, 'company B': 33, 'company C': 90},
     { month: '\'04', 'company A': 40, 'company B': 30, 'company C': 81},
     { month: '\'05', 'company A': 80, 'company B': 11, 'company C': 62},
     { month: '\'06', 'company A': 60, 'company B': 14, 'company C': 68},
     // more data items
];
~~~


##Step 4. Create object constructor

After that, you should create an object constructor. The constructor function takes two parameters:

- **container** – (*id*) the id of an HTML container where chart will be initialized. You've defined it in the step 2
- the chart configuration object with necessary properties. There are four main config options:
	- **type** - (*string*) the type of a chart to initialize. Сhoose any of the 6 available types: "area","bar","line","pie","radar","scatter".
	- **scales** - (*hash*) an object with charts scales
    - **series** - (*array*) an array of series objects. Series are respresentations of data properties.
    - **legend** - (*array*) an array with the legend configuration options


~~~js
var config = {
	type: "area",
    scales: {
    	"bottom":{
        	text: 'month'
       	},
       	"left":{
           	padding: 10,
          	max: 90
         }
  	},
    series:[
     	{
        	value: 'company A',
            strokeWidth: 2,
            // more options
       	}
    ]
}

var chart = new dhx.Chart("div1", config);
~~~

##Step 5. Load chart with data

Finally, you are to load the chart with data. To load inline data into the chart, use the **parse()** method of the Data Collection object:

~~~js
chart.data.parse(data);
~~~

@todo: complete the article