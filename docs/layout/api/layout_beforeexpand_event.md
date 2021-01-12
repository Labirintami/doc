beforeExpand
---
sidebar_label: 
title: 
---          

@short: fires before expanding a Layout cell

@params:
- id		string		the id of a cell

@returns:
param       boolean     false - to block expanding a cell, otherwise true

@example:
layout.events.on("BeforeExpand", function(id){
	// your logic here
    return false;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.4

