---
sidebar_label: Changing calendar mode 
title: Changing calendar mode 
---

You can show a particular date in the calendar and/or open Calendar in a certain mode via the calendar/api/calendar_showdate_method.md method. It takes two parameters:

- **date** - (*Date*) the date that should be shown in the calendar
- **mode** - (*string*)	optional, the mode in which the calendar will be opened

There are the following calendar modes available:

- **"calendar"** - allows selecting among days of a month (default)

~~~js
calendar.showDate(new Date(2020,11,12),"calendar");
~~~

- **"month"** - allows selecting a month

~~~js
calendar.showDate(new Date(2020,11,12),"month");

// shows the current month
calendar.showDate(null,"month");
~~~

{{editor    https://snippet.dhtmlx.com/nyfzc8cl	Calendar. Showing Particular Calendar Date And Mode}}

- **"year"** - allows selecting a year

~~~js
calendar.showDate(new Date(2020,11,12),"year");

// shows the current year
calendar.showDate(null,"year");
~~~

For example, Calendar can be attached to an input, a click on which will show Calendar in one of the modes:

~~~html
<input type="text" onclick="showCalendar()" />
~~~

~~~js
var calendar = new dhx.Calendar("calendar_container");
function showCalendar(){
	calendar.showDate(new Date(11,11,11),"month");
};
~~~
