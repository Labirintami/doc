doubleClick
---
sidebar_label: 
title: 
---          

@short:
fires on double clicking an item

@params:
- id 	string,number 		the id of a clicked item
- e 	Event 				a native event object


@example:
list.events.on("DoubleClick", function(id, e){
   console.log("The item "+ list.selection.getId(id) +" was double clicked.");
});


@template: api_event
@descr:

@relatedsample:https://snippet.dhtmlx.com/iwt1yd61	List. List Events

@changelog: added in v6.1


