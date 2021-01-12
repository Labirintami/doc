actions
---
sidebar_label: 
title: 
---          

@short: 
defines whether a timepicker is equipped with the Close and Save buttons


@default:
false


@type: boolean

@example: 
var timepicker = new dhx.Timepicker("timepicker", {
	actions: true
});


@template:	api_config
@descr: 

@deprecated: instead of it, you can use the timepicker/api/timepicker_controls_config.md property:
~~~js
var timepicker = new dhx.Timepicker("timepicker", {
	controls: true
});
~~~


