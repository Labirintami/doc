---
sidebar_label: beforeColumnHide
title: beforeColumnHide
---          

@short: fires before a column is hidden

@signature: beforeColumnHide: (col: object) => boolean | void;

@params: 
- col   object  an object with a column configuration

@returns:
- result	boolean		false - to prevent a column from being hidden, otherwise true

@example:
grid.events.on("BeforeColumnHide", function(column){
    // your logic here
    return false;
});
s

@template: api_event
@descr:

@changelog: added in v7.0

@relatedsample: grid/05_events/01_events.html

