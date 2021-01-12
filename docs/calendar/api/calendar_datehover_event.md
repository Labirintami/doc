
---
sidebar_label: dateHover
title: dateHover
---          

@short:
fires when the mouse pointer is over a date

@params:
- date  	Date    	the date under the pointer
- e 		Event		a native event object

@example:
calendar.events.on("DateHover", function(date, e) {
    dhx.tooltip(date, {node: e.target, position: "bottom"});
});


@template: api_event
@descr:


@related:
calendar/operating_calendar.md#showingtooltips
calendar/handling_events.md

@relatedsample:
calendar/05_events/01_events.html

@deprecated: use the calendar/api/calendar_datemouseover_event.md event instead:

~~~js
calendar.events.on("DateMouseOver", function(date, e) {
    dhx.tooltip(date, {node: e.target, position: "bottom"});
});
~~~
