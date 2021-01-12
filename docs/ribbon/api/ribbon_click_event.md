click
---
sidebar_label: 
title: 
---          

@short:
fires after a click on a control

@params:
- id 		string		the ID of a clicked control
- e 		Event		a native event object


@example:
ribbon.events.on("Click", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/i7cfddkl	Ribbon. Events

@related: ribbon/handling_events.md