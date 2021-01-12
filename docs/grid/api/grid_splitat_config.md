
---
sidebar_label: splitAt
title: splitAt
---          

@short: 
sets the number of frozen columns




@type: number

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	splitAt:2,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@relatedsample: https://snippet.dhtmlx.com/hcgl9nth	Grid. Frozen Columns

@related: grid/initialization.md#initializegrid
grid/configuration.md#frozencolumns

@deprecated: instead of it, you can use the [leftSplit](grid/api/grid_leftsplit_config.md) configuration property:

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	leftSplit:2,  /*!*/
	data: dataset
});

~~~

@changelog: deprecated in v7.0