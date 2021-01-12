headerSort
=============

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

@related: treegrid/configuration.md#headersorting
treegrid/initialization.md#initializetreegrid

@deprecated: instead of it, you can use the treegrid/api/treegrid_sortable_config.md property:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	sortable:false,  /*!*/
	data: dataset
});
~~~