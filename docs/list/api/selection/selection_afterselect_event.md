---
sidebar_label: 
title: 
---          

@short: fires after selecting an item


@params:
- id    string  the id of an item




@example:
list.selection.events.on("AfterSelect", function(id) {
    console.log(id);
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
list.events.on("AfterSelect", function(id) {
    console.log(id);
});
~~~

@relatedapi: 
list/api/selection/selection_enable_method.md
list/api/list_selection_config.md 




