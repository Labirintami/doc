apply
---
sidebar_label: 
title: 
---          

@short: fires on saving the timepicker value




@example:
timepicker.events.on("Apply", function(){
    console.log("The value of a timepicker "+timepicker.getValue()+ " has been saved");
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/5ccptwy7	Timepicker. Timepicker Events

@changelog: 

- added in v6.4
- deprecated in v7.0

@deprecated:instead of it, you can use the timepicker/api/timepicker_afterapply_event.md and timepicker/api/timepicker_beforeapply_event.md events:

~~~js
timepicker.events.on("AfterApply", function(value){
	console.log(value);
});

timepicker.events.on("BeforeApply", function(value){
	console.log(value);
    return false;
});
~~~
