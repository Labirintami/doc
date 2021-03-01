---
sidebar_label: itemRightClick
title: itemRightClick
---          

@short: fires on right clicking an item

```todoapi ```

@params:
- id   		string,number			the id of a right-clicked item
- e			Event					a native event object


@example:
list.events.on("itemRightClick", function(id, e){
    // your code here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/iwt1yd61	List. List Events

@changelog: added in v6.4
