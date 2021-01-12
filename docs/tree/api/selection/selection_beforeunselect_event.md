beforeUnSelect
---
sidebar_label: 
title: 
---          

@short: fires on unselecting an item, but before the item is really unselected


@params:
- id    string  the id of an item

@returns:
param   boolean     false - to prevent unselecting of an item, otherwise - true


@example:
tree.selection.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});
~~~

@relatedapi: 
tree/api/selection/selection_enable_method.md
tree/api/tree_selection_config.md 




