beforeExpand
---
sidebar_label: 
title: 
---          

@short: fires before expanding a sidebar

@returns: 
param       boolean     false - to prevent expanding a sidebar, otherwise - false


@example:
sidebar.events.on("BeforeExpand", function() {
    // your logic here
    return true;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/qfddiu3i	Sidebar. Events

@changelog: added in v6.4

@related: sidebar/events.md