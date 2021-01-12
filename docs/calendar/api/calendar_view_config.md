
---
sidebar_label: view
title: view
---          

@short: 
the mode of Calendar initialization

@values:
"calendar","month","year","timepicker"

@default:
"calendar"


@type: string

@example: 
var calendar = new dhx.Calendar("calendar_container", {
    view: "month"
});


@template:	api_config
@descr: 

@related:
calendar/configuring.md#calendarmodes


@deprecated: instead of it, you can use the calendar/api/calendar_mode_config.md property:
~~~js
var calendar = new dhx.Calendar("calendar_container", {
    mode: "month"
});
~~~