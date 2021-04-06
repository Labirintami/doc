---
sidebar_label: columnsAutoWidth
title: columnsAutoWidth
---          

@short: defines whether the width of columns is automatically adjusted to the width of their content

```tododeprecated ``` 

@type: boolean,number

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	columnsAutoWidth: true, /*!*/
	data: dataset
});

@template:	api_config
@descr: 
At the moment "number" type defines the number of the last column that should be auto adjusted.

@related: treegrid/configuration.md#autowidthforcolumns
treegrid/initialization.md#initializetreegrid

@deprecated: instead of it, use the [](treegrid/api/treegrid_adjust_config.md) property:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    adjust: true,  /*!*/
    data: dataset
});
~~~