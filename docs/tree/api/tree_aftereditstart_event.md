---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of a tree item has started

@params: 

- value     string  the value of an item
- id        string  the id of an item



@example:
tree.events.on("AfterEditStart", function(value, id) {
    // your logic here
});


@template: api_event
@descr:

@relatedsample: tree/05_events/01_events.html

@changelog: added in v7.0


