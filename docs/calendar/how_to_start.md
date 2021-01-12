---
sidebar_label: Initialization
title: Initialization
---

```todo

To use dhtmlxCalendar in your application, you need to take the following simple steps:

- [Download the dhtmlxCalendar package](https://dhtmlx.com/docs/products/dhtmlxCalendar/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Initialize Calendar](#initializecalendar) with the object constructor
- [Select initial date (optional)](#selectinitialdateoptional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxCalendar</title>         
        <script type="text/javascript" src="../../codebase/calendar.js"></script>
        <link rel="stylesheet" href="../../codebase/calendar.css">
    </head>
    <body>
        <div id="calendar_container"></div>
        <script>
            // creating dhtmlxCalendar 
            var calendar = new dhx.Calendar("calendar_container");
        </script>
    </body>
</html>
~~~

{{editor    https://snippet.dhtmlx.com/xcw19e52	Calendar. Basic Initialization}}

Include source files
----------------------------

Create an HTML file and place full paths to JS and CSS files of dhtmlxCalendar into the header of the created file. The Calendar component can be used standalone or as a part of the Suite library.

**If you use dhtmlxCalendar standalone**, you need to include 2 files:

- *calendar.js*
- *calendar.css*

~~~html
<link type="text/css" href="../codebase/calendar.css">
<script src="../codebase/calendar.js" type="text/javascript"></script>
~~~

**If you use dhtmlxCalendar as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

Initialize Calendar
----------------------

You can initialize Calendar in a container or in a popup.

### Initialization in a container

In this case you initialize Calendar with the `dhx.Calendar` object constructor. The constructor takes two parameters: 

- the HTML container for Calendar,

{{snippet	index.html}}
~~~html
<div id="calendar_container"></div>
~~~

- an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

{{snippet	index.html}}
~~~html
// creating dhtmlxCalendar
var calendar = new dhx.Calendar("calendar_container",{
   // config options
});
~~~

{{editor    https://snippet.dhtmlx.com/xcw19e52	Calendar. Basic Initialization}}

<h3 id="initinpopup">Initialization in a popup</h3>

This variant pressupposes that you create a popup first and then attach a calendar into it, thus creating a [date picker](calendar/datepicker.md).

<img style="margin: 0px 0px 0px 20px; display: block;" src="calendar/date_picker.png" alt="date_picker">

- create an input to enter a date into and give it the id "date-input":

~~~html
<input type="text" id="date-input" style="width: 200px;" readonly/>
~~~

- use corresponding object constructors to create a calendar and a popup objects. Note that in this case *null* is used instead of container for Calendar:

~~~js
var calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});
var popup = new dhx.Popup();
~~~

- attach the calendar to the popup using the popup/api/popup_attach_method.md method of Popup:

~~~js
popup.attach(calendar);
~~~

- use the popup/api/popup_show_method.md method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input:

~~~js
var dateInput = document.getElementById("date-input");
dateInput.addEventListener("click", function() {
	popup.show(dateInput);
});
~~~

- define the logic of closing the popup with calendar using the popup/api/popup_hide_method.md method of Popup. For example, on selecting a new date in the calendar:

~~~js
calendar.events.on("change", function() {
	dateInput.value = calendar.getValue();
	popup.hide();
});
~~~

{{editor    https://snippet.dhtmlx.com/mj7jr6ro	Calendar. Date Picker}}

###Configuration properties

There is a list of properties that you can specify in the Calendar configuration object (the second parameter of the constructor function):

{{api

- calendar/api/calendar_css_config.md - adds style classes to Calendar
- calendar/api/calendar_date_config.md - defines the date that will be opened when the calendar is created, differs from the selected date (set by <b>value</b>)
- calendar/api/calendar_dateformat_config.md - defines the format of dates in Сalendar, "%d/%m/%y" by default
- calendar/api/calendar_disableddates_config.md - allows disabling some date intervals, day labels are dimmed
- calendar/api/calendar_mark_config.md - adds a CSS class to specific days
- calendar/api/calendar_mode_config.md - the mode of Calendar initialization: "calendar" (default), "month", "year"
- calendar/api/calendar_range_config.md - enables/disables the possibility to select a range of dates on the calendar
- calendar/api/calendar_thismonthonly_config.md - hides dates of the previous/next months relative to the currently displayed one
- calendar/api/calendar_timeformat_config.md - defines the time format for a timepicker in the calendar: 12-hour or 24-hour (12 or 24 (default), correspondingly)
- calendar/api/calendar_timepicker_config.md - adds a timepicker into the calendar, <i>false</i> by default
- calendar/api/calendar_value_config.md - selects the day (adds a round blue marker)
- calendar/api/calendar_weeknumbers_config.md - defines whether to show the numbers of weeks, <i>false</i> by default
- calendar/api/calendar_weekstart_config.md - sets the starting day of the week: "monday" or "sunday" (default)
- calendar/api/calendar_width_config.md - adds a timepicker into a calendar, <i>false</i> by default


}}

The detailed information on configuration options can be found in the calendar/configuring.md article.

Select initial date (optional)
--------------------------

You can specify what date should be selected in the calendar both before and after initialization of the component:

- via the calendar/api/calendar_value_config.md configuration option:

{{snippet	index.html}}
~~~js
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,1,10)
});
~~~


- with the help of the calendar/api/calendar_setvalue_method.md method:

{{snippet	index.html}}
~~~js
var calendar = new dhx.Calendar("calendar_container", {
    // configuration options
});
calendar.setValue(new Date(2019,1,10));
~~~


{{editor    https://snippet.dhtmlx.com/vmg11002	Calendar. Preset Selected Date}}


```todo