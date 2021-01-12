beforeShow
---
sidebar_label: 
title: 
---          

@short: fires before a cell is shown

@params:
- id		string		the id of a cell


@example:
layout.events.on("BeforeShow", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent a cell from being shown, otherwise true



@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2
