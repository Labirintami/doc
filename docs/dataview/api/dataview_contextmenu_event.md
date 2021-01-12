
---
sidebar_label: contextMenu
title: contextMenu
---          

@short:
fires on calling a context menu for an item

@params:
- id 	string,number 		the id of a right-clicked item
- e 	Event 				a native event object


@example:
dataview.events.on("ContextMenu", function(id, e){
    // your code here
});


@template: api_event
@descr:





@deprecated: instead of it, use the dataview/api/dataview_itemrightclick_event.md event:

~~~js
dataview.events.on("itemRightClick", function(id, e){
    // your code here
});
~~~