beforeHide
---
sidebar_label: 
title: 
---          

@short:
fires before hiding an item of Sidebar

@params:
- id 		string		the ID of a sidebar item
- e         Event       a native event object

@returns:
- result        boolean     false - to prevent hiding of a sidebar item, otherwise - true

@example:
sidebar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/qfddiu3i	Sidebar. Events

@related: sidebar/events.md