---
sidebar_label: buttonClick
title: buttonClick
---          

@short: fires after a click on a button in a form

@params:
- id 	string	 	the ID of a clicked button
- e 	Event 		a native event object


@example:
form.events.on("ButtonClick", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/vyipsaoa	Form. Events

@deprecated: Instead of it, you can use the [click](form/api/form_click_event.md) event:

~~~js
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});
~~~