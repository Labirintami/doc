itemRightClick
---
sidebar_label: 
title: 
---          

@short:
fires on right-clicking a tree item

@params:
- id	string		the id of an item
- e		Event		a native event object

@example:
tree.events.on("itemRightClick", function(id, e){
    console.log("The item with the id "+ id +" was right-clicked.");
});


@template: api_event
@descr:

@changelog: added in v6.3

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md