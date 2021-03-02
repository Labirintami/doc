---
sidebar_label: inputCreated
title: inputCreated
---          

@short: fires when a new input is added

```todoapi ```

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