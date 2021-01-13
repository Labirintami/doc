
---
sidebar_label: beforeRowShow
title: beforeRowShow
---          

@short: fires before a row is shown on a page

@params: 
- row   object  an object with a row configuration


@returns:
- result	boolean		false - to prevent a row from being shown, otherwise true

@example:
treegrid.events.on("BeforeRowShow", function(row){
    // your logic here
    return false;
});


@template: api_event
@descr:

@changelog: added in v7.0

@relatedsample: treegrid/05_events/01_events.html
