inputCreated
---
sidebar_label: 
title: 
---          

@short:
fires when a new input is added

@params:
- id 		string			the ID of a new input
- el		HTMLElement		a newly created input


@example:
ribbon.events.on("InputCreated", function(id, el){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/i7cfddkl	Ribbon. Events

@related: ribbon/handling_events.md