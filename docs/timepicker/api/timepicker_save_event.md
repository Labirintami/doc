---
sidebar_label: save
title: save
---          

@short: fires on saving the timepicker value

```tododeprecated ```


@example:
timepicker.events.on("Save", function(){
	console.log("The value of a timepicker "+timepicker.getValue()+ " has been saved");
});


@template: api_event
@descr:


[Timepicker. Timepicker Events](https://snippet.dhtmlx.com/5ccptwy7)

@deprecated: instead of it, use the [](timepicker/api/timepicker_apply_event.md) event:

~~~js
timepicker.events.on("Apply", function(){
	console.log("The value of a timepicker "+timepicker.getValue()+ " has been saved");
});
~~~