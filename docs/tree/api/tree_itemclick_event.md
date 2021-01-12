itemClick
=============

@short:
fires on clicking a tree item

@params:
- id	string		the id of an item
- e		Event		a native event object

@example:
tree.events.on("itemClick", function(id, e){
    console.log("The item with the id "+ id +" was clicked.");
});


@template: api_event
@descr:


@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md