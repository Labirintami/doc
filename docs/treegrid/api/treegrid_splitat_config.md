splitAt
=============

@short: 
sets the number of frozen columns




@type: number

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	splitAt:2,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@related: treegrid/configuration.md#frozencolumns
treegrid/initialization.md#initializetreegrid

@relatedsample: https://snippet.dhtmlx.com/46me58ze	TreeGrid. Frozen Columns

@deprecated: instead of it, you can use the [leftSplit](treegrid/api/treegrid_leftsplit_config.md) configuration property:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	leftSplit:2,  /*!*/
	data: dataset
});

~~~

@changelog: deprecated in v7.0