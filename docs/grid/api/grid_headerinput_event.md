---
sidebar_label: headerInput
title: headerInput
---          

@short: fires on typing text in an input of a column's header

```todoapi ```

@params:
- value		string,number		an entered value
- colId		string,number		the id of a column
- filter	string				the type of a filter: "inputFilter" or "selectFilter"


@example:
grid.events.on("HeaderInput", function(value,colId,filter){
    console.log("You've entered "+value+" into the "+colId+" column");
});


@template: api_event
@descr:

@deprecated: instead of it, you can use the grid/api/grid_filterchange_event.md event:
~~~js
grid.events.on("FilterChange", function(value,colId,filter){
    console.log("You've entered "+value+" into the "+colId+" column");
});
~~~

