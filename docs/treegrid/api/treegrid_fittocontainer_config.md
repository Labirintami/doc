---
sidebar_label: fitToContainer
title: fitToContainer
---          

@short: makes grid to fit the size of a container

```tododeprecated ``` 

@default: false

@example: 
<div id="grid_container" style="width:600px;height:400px;"></div>


var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
    // grid will be adjusted to the size of container
	fitToContainer:true, /*!*/
	data: dataset
});


@template:	api_config
@descr: 
{{note Please note that if a grid has its own sizes specified, their values will redefine the size of the container.}}

@related: treegrid/configuration.md#fittingcontainersize
treegrid/initialization.md#initializetreegrid



@deprecated: instead of it, use the treegrid/api/treegrid_autowidth_config.md property:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    autoWidth:true, /*!*/
    data: dataset
});
~~~