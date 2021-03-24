---
sidebar_label: How to get the selected date in the calendar
title: How to get the selected date in the calendar
---

To get the selected date, call the calendar/api/calendar_getvalue_method.md method. The method returns selected date either as a string (default) or as a Date object. 
To get a date as an object, pass the *true* parameter to the method.

~~~js
var date1 = calendar.getValue(); // -> "20/08/19"

var date2 = calendar.getValue(true); // -> Tue Aug 20 2019 00:00:00 GMT+0300 
~~~

{{editor    https://snippet.dhtmlx.com/k2vrfqj0	Calendar. Getting Selected Date}}

If you work with a calendar in the [range mode](calendar/configuring.md#rangemode) the **getValue()** method returns either an array of Date values or an array of string values with the start and end dates of the range.

~~~js
// for a range calendar as an array of Date values 
var date = calendar.getValue(true); 
// -> [Mon Jun 03 2019 00:00:00 GMT+0300, Wed Jun 19 2019 00:00:00 GMT+0300]

// for a range calendar as an array of string values 
var date = calendar.getValue(); // ->  ["03/06/19", "19/06/19"]
~~~
