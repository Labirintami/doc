beforeExpand
---
sidebar_label: 
title: 
---          

@short: fires before expanding a tree item

@params: 
- id    string      the id of an expanded item

@returns:
- param     boolean     false - to block expanding  a tree item, otherwise true


@example:
tree.events.on("BeforeExpand", function(id) {
    // your logic here
    return false;
});


@template: api_event
@descr:

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md