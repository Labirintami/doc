inputCreated
=============

@short:
fires when a new input is added

@params:
- id 		string			the ID of a new input
- el		HTMLElement		a newly created input


@example:
sidebar.events.on("InputCreated", function(id, el){
    console.log(id);
});


@template: api_event
@descr:

@related: sidebar/events.md

