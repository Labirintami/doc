---
sidebar_label: block
title: block
---          

@short: allows disabling some date intervals, day labels are dimmed

```tododeprecated
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    block?: (a: Date) => boolean;
```
@type: function

@example: 
var block = [ new Date(2019,0,8), new Date(2019,0,10) ];

var calendar = new dhx.Calendar("calendar_container",{
	block : function(date) {
		return date > block[0] && date < block[1];
	}
});


@template:	api_config
@descr: 
The function passed to the method receives one parameter:

- **date** (*Date*) - a date object 

and must return a boolean value to define whether a passed date should be blocked (if *true*, the date is inactive).

@relatedsample:
calendar/04_customization/04_blocked.html

@related:
calendar/configuring.md#disableddates

@deprecated: instead of it, you can use the [](calendar/api/calendar_disableddates_config.md) property:
~~~js
var disabledDates = [ new Date(2019,0,8), new Date(2019,0,10) ];

var calendar = new dhx.Calendar("calendar_container",{
	disabledDates : function(date) {
		return date > disabledDates[0] && date < disabledDates[1];
	}
});
~~~