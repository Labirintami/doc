
---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can attach event listeners with the **pager.events.on()** method:

~~~js
pager.events.on("Change", function(index, previousIndex){
    console.log("The currently active page", index);
});
~~~

{{note The names of events are case-insensitive.}}

{{sample    pager/05_events/01_pager_events.html}}

## Detaching event listeners

To detach events, use **pager.events.detach()**:

~~~js
pager.events.on("Change", function(index, previousIndex){
    console.log("The currently active page", index);
});

pager.events.detach("Change");
~~~

## Calling events

To call events, use **pager.events.fire()**:

~~~js
pager.events.fire("name",args);
// where args is an array of arguments
~~~

## The list of events

The full list of events is available in the related [API section](pager/api/refs/pager_events.md).
