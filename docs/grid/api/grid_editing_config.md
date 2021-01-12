editing
=============

@short: 
enables editing in Grid columns


@default:
false


@type: boolean

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	editing:true, /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@related:
grid/configuration.md#editinggridandseparatecolumns

@changelog: added in v6.1

@deprecated: instead of it, you can use the grid/api/grid_editable_config.md property:

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	editable:true, /*!*/
	data: dataset
});
~~~