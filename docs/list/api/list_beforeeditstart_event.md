beforeEditStart
---
sidebar_label: 
title: 
---          

@short: fires before editing of an item has started
	
@params:
- id		string|number		the id of an item

@returns:
- result		boolean		false- to block item editing, true otherwise

@example:
list.events.on("BeforeEditStart", function(value,id){
	// your logic here
    return false;
});


@template:	api_event
@descr:



@relatedsample:
https://snippet.dhtmlx.com/iwt1yd61	List. List Events

@changelog: added in v6.1
