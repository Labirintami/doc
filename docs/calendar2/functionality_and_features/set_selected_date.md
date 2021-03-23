---
sidebar_label: How to set the selected date in the calendar
title: How to set the selected date in the calendar
---

To select a date in a calendar, call the setValue method. The method has one mandatory parameter - a date that should be selected, which can be passed in several formats:

as a Date object
as a string
as an array of Date values for the range mode
as an array of string values for the range mode
// selects the current date
calendar.setValue(new Date());
 
// sets the current date as an array of Date value
calendar.setValue([new Date()]);
 
// sets a date as a string
calendar.setValue("30/05/19");
 
// sets a date as an array of string value
calendar.setValue(["30/05/19"]);
 
//sets dates as an array of Date values(for the range mode)
calendar.setValue([new Date(2019,05,03), new Date(2019,05,19)]);
 
//sets dates as an array of string values(for the range mode)
calendar.setValue(["03/06/19", "15/06/19"]);
In case a date has been successfully added into the calendar, the method will return true.

RELATED SAMPLE:  Calendar. Preset Selected Date

Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you've set the format of date you want to use in the calendar both in the setValue() method and in the dateFormat property. Otherwise, the default format ("%d/%m/%y") will be used.