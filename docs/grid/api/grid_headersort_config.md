---
sidebar_label: headerSort
title: headerSort
---          

@short: 
defines whether sorting on clicking headers of columns is enabled


@default:
true


@type: boolean

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	headerSort:false,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 


@deprecated: instead of it, you can use the grid/api/grid_sortable_config.md property:

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	sortable:false,  /*!*/
	data: dataset
});
~~~
