---
sidebar_label: Calendar modes 
title: Calendar modes 
---

There are several modes of displaying Calendar, which are set via the calendar/api/calendar_mode_config.md property:

- <strong>"calendar"</strong> - the default mode. The current date (year and month) is shown in the calendar

~~~js
var calendar = new dhx.Calendar("calendar_container");
~~~

![](../../assets/calendar/calendar_mode.png)

- <strong>"month"</strong> - only months of the current year are shown in the calendar 

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    mode: "month"
});
~~~

![](../../assets/calendar/month_mode.png)

- <strong>"year"</strong> - only years are shown, including the current one

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    mode: "year"
});
~~~

![](../../assets/calendar/year_mode.png)

https://snippet.dhtmlx.com/n9q0tc0q	Calendar. Calendar Modes

You can also show the calendar in one of the modes using the calendar/api/calendar_showdate_method.md method.