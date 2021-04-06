---
sidebar_label: contextmenu
title: contextmenu
---          

@short: fires on calling a context menu for an item

```tododeprecated ``` 

@params:
- id   		string,number			the id of a right-clicked item
- e			Event					a native event object


@example:
list.events.on("ContextMenu", function(id, e){
    // your code here
});


@template: api_event
@descr:


@deprecated: instead of it, use the [](list/api/list_itemrightclick_event.md) event:

~~~js
list.events.on("itemRightClick", function(id, e){
    // your code here
});
~~~
