---
sidebar_label: TimePicker API 
title: TimePicker API 
--- 

```tododelete не используется?``` 

Constructor
---------------

~~~js
var timepicker = new dhx.Timepicker("timepicker_container",{
    timeFormat:12, 
    actions:true
});
~~~

Parameters:

- the HTML container of dhtmlxTimePicker
- configuration settings (check below)

Methods
-------------

### getValue

- short: returns the current value of a TimePicker
- params: 
	- **asObject** - (*boolean*) optional, specifies that the value will be returned as an object, false by default
- returns:
	- **value** - (*string|object*) the value of a timepicker 
- example:

~~~js
// return value as a string in the 24-hour format
var val1 = timepicker.getValue(); // -> "00:39"

// return value as an object in the 24-hour format
var val2 = timepicker.getValue(true);// -> {hour: 0, minute: 39}

// return value as a string in the 12-hour format
var val3 = timepicker2.getValue(); // -> "06:00AM"

// return value as an object in the 12-hour format
var val4 = timepicker2.getValue(true); // -> {hour: 6, minute: 0, AM: true}
~~~

- descr:
The returned value can be of several types, depending on the passed parameter and the applied time format:
	- for the 24-hour format a return string value will include just the hour and minutes: "00:39"
    - for the 12-hour format a return string value will include hour, minutes, and am/pm identifiers: "06:00AM"
    - for the 24-hour format a return object value will contain key:value pairs for hours, minutes and their values
    - for the 12-hour format a return object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values

### setValue

- short: sets value for a TimePicker
- params:
	- **value** - (*Date|string|array*) the value to be set for a timepicker 
- example:
~~~js
// set the value as a string
timepicker.setValue("00:39");

// set the value as a Date object
timepicker.setValue(new Date('January 10, 2019 17:54:00'));

// set the value as an array
timepicker.setValue([6,20,"AM"]);
~~~

- descr:
The value of timepicker set as an array should have the following elements:
	- the hour value
    - the minutes value
    - the "AM/PM" identifier for 12-hour format as a string


Events
----------

###Change

- short: fires on change of the timepicker value
- example:
~~~js
timepicker.events.on("Change", function(){
	console.log("The value of a timepicker has changed to "+timepicker.getValue());
});
~~~

### Save

- short: fires on saving the timepicker value
- example:
~~~js
timepicker.events.on("Save", function(){
	console.log("The value of a timepicker "+timepicker.getValue()+ " has been saved");
});
~~~

### Close

- short: fires on closing the timepicker 
- example:
~~~js
timepicker.events.on("Close", function(){
	console.log("The Close button has been clicked");
});
~~~

Properties
----------------

### css

- short: adds style classes to TimePicker
- type: string
- example:
~~~js
<style>
	.bg-grey {
		background: #efefef;
	}
</style>


var timepicker = new dhx.Timepicker("timepicker", {
	css: "dhx_timepicker--bordered bg-grey"
});
~~~

### timeFormat

- short: defines what clock format is activated: the 12-hour or 24-hour one
- default: 24
- type: number
- example:

~~~js
var timepicker = new dhx.Timepicker("test2", {
	timeFormat: 12
});
~~~


### actions

- short: defines whether a timepicker is equipped with the Close and Save buttons
- default: false
- type: boolean
- example:

~~~js
var timepicker = new dhx.Timepicker("test2", {
	actions: true
});
~~~


@todo: 
- draft, do not remove!