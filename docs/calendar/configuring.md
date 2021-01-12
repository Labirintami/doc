
---
sidebar_label: Configuration
title: Configuration
---          

```todo

## Calendar modes

There are several modes of displaying Calendar, which are set via the calendar/api/calendar_mode_config.md property:

- **"calendar"** - the default mode. The current date (year and month) is shown in the calendar

~~~js
var calendar = new dhx.Calendar("calendar_container");
~~~

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/calendar_mode.png" alt="calendar_mode"/>

- **"month"** - only months of the current year are shown in the calendar 

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    mode: "month"
});
~~~

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/month_mode.png" alt="month_mode"/>

- **"year"** - only years are shown, including the current one

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    mode: "year"
});
~~~

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/year_mode.png" alt="year_mode"/>

{{editor    https://snippet.dhtmlx.com/n9q0tc0q	Calendar. Calendar Modes}}

You can also show the calendar in one of the modes using the calendar/api/calendar_showdate_method.md method.

## Date format

There is a possibility to specify the format of dates in the calendar via the calendar/api/calendar_dateformat_config.md property. The default format is "%d/%m/%y". 
The full list of available characters used to make formats is provided in the [API reference](calendar/api/calendar_dateformat_config.md).

~~~js
var calendar = new dhx.Calendar("calendar_container", {
   dateFormat:"%d.%m.%Y"
});
~~~

{{editor    https://snippet.dhtmlx.com/2co9z3bi	Calendar. Date Format}}


## Disabled dates

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/blocked_dates.png" alt="blocked_dates"/>

{{editor    https://snippet.dhtmlx.com/27n67r91	Calendar. Disabled Dates}}

To disable certain dates, use the calendar/api/calendar_disableddates_config.md setting. The value of the property must be a function that takes a *date* as a parameter and returns a *boolean* value.
The dates, for which the function returns *true*, are dimmed in the calendar.

~~~js
var calendar = new dhx.Calendar("calendar", {
	disabledDates: function(date) {
		var disabled = {
			0: true,
			1: true,
			2: false,
			3: false,
			4: false,
			5: false,
			6: true
		}
		return disabled[date.getDay()];
	},
	css: "dhx_widget--bordered"
});
~~~

## Displaying only current month

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/this_month_only.png" alt="this_month_only"/>

{{editor    https://snippet.dhtmlx.com/4wi5hbtr	Calendar. The Days Of This Month Only}}

A default calendar shows both the days of the current month and several days of the previous and next months. You can choose the mode of displaying just the current month by setting the value of 
the calendar/api/calendar_thismonthonly_config.md configuration property to *true*:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    thisMonthOnly:true
});
~~~

## Highlighted dates

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/marked_dates.png" alt="marked_dates"/>

{{editor    https://snippet.dhtmlx.com/ic5oeiga	Calendar. Marked Dates}}

You can highlight certain dates in the calendar. Set the calendar/api/calendar_mark_config.md property for that. The value of the property must be a function that takes a *date* as a parameter and 
returns a *string* with the name of a CSS class for marked dates or an empty string for other dates.

~~~js
var calendar = new dhx.Calendar("calendar", {
	mark: function(date) {
		if (date.getDay() === 6) {
			return "highlight-date";
		}
	},
	css: "dhx_widget--bordered"
});
~~~

Where "highlight-date" is a CSS class like this:

~~~css
<style>
	.highlight-date {
		color: #fff;
	}
</style>
~~~

## Initial calendar date

By default, a calendar shows a month with the current date. If for some reason you want to open some other date, set the calendar/api/calendar_date_config.md property. It accepts a Date object as a value. 
It is either the same as calendar/api/calendar_value_config.md (by default), or shows the current date if **value** is not specified.

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    date: new Date(2019, 0, 1)
});
~~~

{{editor    https://snippet.dhtmlx.com/fyg6l65t	Calendar. Date Initialization}}

## Initially selected date

If you want to create a calendar with an initially selected date, set the calendar/api/calendar_value_config.md property in the configuration object. The property can accept a value in several formats:

- as a Date object
- as a string
- as an array of Date values for the range mode
- as an array of string values for the range mode

~~~js
// selects a date
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,01,10)
});

// selects a date as an array of Date value
var calendar = new dhx.Calendar("calendar_container", {
    value: [new Date(2019,01,10)]
});

// selects a date as a string
var calendar = new dhx.Calendar("calendar_container", {
    value: ("10/02/19")
});

// selects a date as an array of string value
var calendar = new dhx.Calendar("calendar_container", {
    value: (["10/02/19"])
});

// selects dates as an array of Date values(for the range mode)
var calendar = new dhx.Calendar("calendar_container", {
    value: ([new Date(2019,05,03), new Date(2019,05,19)]),
    range: true  
});

// selects dates as an array of string values(for the range mode)
var calendar = new dhx.Calendar("calendar_container", {
    value: (["03/06/19", "15/06/19"]),
    range: true  
});
~~~

{{editor    https://snippet.dhtmlx.com/epjjww3l	Calendar. Value Initialization}}

The specified date will be highlighted with a round blue marker in the calendar. By default, no date is selected initially.

{{note Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you've set the format of date you want to use in the calendar both in the calendar/api/calendar_value_config.md and in the calendar/api/calendar_dateformat_config.md property. Otherwise, the default format ("%d/%m/%y") will be used.}}

## Numbers of weeks

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/week_numbers.png" alt="week_numbers"/>

{{editor    https://snippet.dhtmlx.com/9692gk6n	Calendar. Numbers Of Weeks}}

If you want to display the numbers of weeks in the calendar, enable the calendar/api/calendar_weeknumbers_config.md property. By default, the numbers are not shown as the property is set to *false*.

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    weekNumbers: true
});
~~~

## Range mode

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/range_mode.png" alt="range_mode"/>

{{editor    https://snippet.dhtmlx.com/2mrj53h0	Calendar. Range}}

You have a possibility to create a calendar in the range mode that allows you to select a range of dates in the calendar. To do this, you need to use the [range:true](calendar/api/calendar_range_config.md) option in the calendar configuration object and define an array with the start and end dates of the range.

~~~js
var calendar = new dhx.Calendar("calendar", {
	css: "dhx_widget--bordered",
	range: true,
    value: ["25/06/20", "07/07/20"]
});
~~~


{{note The **value** option should have the array type and contain a pair of values (either Date values or string values) for both dates.
}}

## Start of the week

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/weekstart_monday.png" alt="weekstart_monday"/>

{{editor    https://snippet.dhtmlx.com/kaxmurh9	Calendar. Week Start}}

By default, the first day of the week is Sunday, as the **weekStart:"sunday"** configuration option is used. It is also possible to set Monday as the start of the week, by applying "monday" as a value of the 
calendar/api/calendar_weekstart_config.md setting:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    weekStart: "monday"
});
~~~

## Timepicker

You can add a timepicker into a calendar by enabling the calendar/api/calendar_timepicker_config.md property. By default, a timepicker uses the 24-hour format.
You can change it to the 12-hour format via the calendar/api/calendar_timeformat_config.md property. It accepts either 12 or 24 value to select the desired time format.


~~~js
var calendar = new dhx.Calendar("calendar", {
	timePicker: true,
    timeFormat: 12 // the 12-hour format for the timepicker
});
~~~

<br>

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/timepicker_format.png" alt="timepicker_format"/>

{{editor    https://snippet.dhtmlx.com/jkbfb202	Calendar. Timepicker In Calendar}}

{{editor    https://snippet.dhtmlx.com/9xi24if2	Calendar. Time Format}}

## Width of calendar

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/calendar_width.png" alt="calendar_width"/>

{{editor    https://snippet.dhtmlx.com/azm0u5ns	Calendar. Calendar Width}}


You can set the desired width of a calendar using the calendar/api/calendar_width_config.md configuration property. The default width of Calendar is 250px.

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    width: "400", 
    css: "dhx_widget--bordered"
});
~~~

```todo


