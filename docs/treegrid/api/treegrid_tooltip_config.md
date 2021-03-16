---
sidebar_label: tooltip
title: tooltip
---          

@short: enables a tooltip on hovering over the content of a column

@signature: tooltip?: boolean;

@default: true

@example: 
var treegrid = new dhx.TreeGrid("treegrid", {
	columns: [//columns config],
	data: dataset,
	tooltip: false /*!*/
});

@template:	api_config
@descr: 

@relatedsample: treegrid/02_configuration/11_hiding_tooltips.html

@related: treegrid/initialization.md#initializetreegrid
treegrid/configuration.md#tooltip

@changelog: added in v6.5