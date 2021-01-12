click
---
sidebar_label: 
title: 
---          

@short:
fires on clicking an item

@params:
- id		string,number			the id of a clicked item
- e			Event					a native event object


@example:
list.events.on("Click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/iwt1yd61	List. List Events
