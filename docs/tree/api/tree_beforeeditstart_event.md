beforeEditStart
---
sidebar_label: 
title: 
---          

@short: fires before editing of an item has started

@params: 

- value     string  the value of an item
- id        string  the id of an item

@returns:
- result	boolean		false - to block editing of an item, otherwise true


@example:
tree.events.on("BeforeEditStart", function(value, id) {
    // your logic here
    return false;
});


@template: api_event
@descr:

@relatedsample: tree/05_events/01_events.html

@changelog: added in v7.0
