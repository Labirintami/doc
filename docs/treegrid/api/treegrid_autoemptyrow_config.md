---
sidebar_label: autoEmptyRow
title: autoEmptyRow
---          

@short: adds an empty row after the last filled row in the Grid

@signature: autoEmptyRow?: boolean;

@default: true

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	autoEmptyRow:true,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@related:
grid/configuration.md#automaticaddingofemptyrowintogrid

@relatedsample:
grid/02_configuration/17_auto_empty_row.html