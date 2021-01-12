itemContextMenu
---
sidebar_label: 
title: 
---          

@short:
fires on calling a context menu for a tree item on right click



@example:
tree.events.on("itemContextMenu", function(id, e){
    console.log("The item with the id "+ id +" was right-clicked.");
});


@template: api_event
@descr:


@deprecated: instead of it, you can use the tree/api/tree_itemrightclick_event.md method:
~~~js
tree.events.on("itemRightClick", function(id, e){
    console.log("The item with the id "+ id +" was right-clicked.");
});
~~~

