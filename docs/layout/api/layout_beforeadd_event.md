beforeAdd
---
sidebar_label: 
title: 
---          

@short: fires before adding a cell

@params:
- id		string		the id of a cell


@example:
layout.events.on("BeforeAdd", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent adding of a cell, otherwise true


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

