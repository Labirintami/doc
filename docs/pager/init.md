Initialization
---
sidebar_label: 
title: 
---          

To add dhtmlxPager into an application, you need to take the following simple steps:

- [Download the dhtmlxPager](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) package and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create two containers](#createcontainers)
- [Add a related component](#addarelatedwidget)
- [Initialize Pager](#initializepager) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxPager</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="widget_container"></div>
        <div id="pager_container"></div>
        <script>
            // creating a related component
            const widget = new dhx.List("widget_container", {
				css: "dhx_widget--bordered",
				keyNavigation: true
			});

			widget.data.parse(widget_data);

            // creating dhtmlxPager
			const pager = new dhx.Pager("pager_container", {
				css: "dhx_widget--bordered",
				data: widget.data
			});
        </script>
    </body>
</html>
~~~

{{sample    pager/01_init/01_with_list.html}}

{{sample    pager/01_init/02_with_dataview.html}}

{{sample    pager/01_init/03_with_tree.html}}

{{sample    pager/01_init/04_with_grid.html}}

{{sample    pager/01_init/05_with_treegrid.html}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create containers
-------------------

Add two containers:

- for a related component and give it an id, e.g. "widget_container"
- for Pager and give it an id, e.g. "pager_container":

{{snippet	index.html}}
~~~html
<div id="widget_container"></div>
<div id="pager_container"></div>
~~~

Add a related widget
---------------------------------

{{note dhtmlxPager can be used in conjunction with data components like [List](list/index.md), [DataView](dataview/index.md), [Tree](tree/index.md), [Grid](grid/index.md), or [TreeGrid](treegrid/index.md).}}

Choose the widget you want to link to the Pager component, for example, dhtmlxList. 

1\. Initialize the widget with the object constructor, like this: 

{{snippet	index.html}}
~~~js
// creating a related dhtmlxList widget
const widget = new dhx.List("widget_container", {
    css: "dhx_widget--bordered",
    keyNavigation: true
});
~~~

The constructor has two parameters:

- the HTML container for List,
- an object with the List configuration properties (see the full list [here](list/api/refs/list_properties.md)). 

2\. Load data into the widget:

{{snippet	index.html}}
~~~js
// loading data into the created dhtmlxList 
widget.data.parse(widget_data);
~~~

 

Initialize Pager
---------------------

Initialize Pager with the *dhx.Pager* object constructor. The constructor takes two parameters:

- the HTML container for Pager, 
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

{{snippet	index.html}}
~~~js
// creating dhtmlxPager
const pager = new dhx.Pager("pager_container", {
	css: "dhx_widget--bordered",
	data: widget.data
});
~~~

There is a set of properties you can specify for Pager to optimize its configuration for your needs. Read the details below.

### Configuration properties

There is a list of properties that you can specify in the Pager configuration object (the second parameter of the constructor function):

{{api

- pager/api/pager_css_config.md - adds style classes to the pager
- pager/api/pager_data_config.md - the data collection of a widget to set into the pager
- pager/api/pager_inputwidth_config.md - optional, sets the width for the input of the pager
- pager/api/pager_page_config.md - optional, the index of the initial page set in the pager
- pager/api/pager_pagesize_config.md - optional, the number of items displayed per page

}}