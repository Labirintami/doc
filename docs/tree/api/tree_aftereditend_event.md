---
sidebar_label: afterEditEnd
title: afterEditEnd
---          

@short: fires after editing of a tree item is finished

@signature: afterEditEnd: (value: string, id: string) => void;

@params: 
- value     string  the value of an item
- id        string  the id of an item

@example:
tree.events.on("AfterEditEnd", function(value, id) {
    // your logic here
});


@template: api_event
@descr:

@relatedsample: tree/05_events/01_events.html

@changelog: added in v7.0

