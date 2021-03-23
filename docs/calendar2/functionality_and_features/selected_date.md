---
sidebar_label: Initially selected date
title: Initially selected date
---
If you want to create a calendar with an initially selected date, set the value property in the configuration object. The property can accept a value in several formats:

as a Date object
as a string
as an array of Date values for the range mode
as an array of string values for the range mode
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
RELATED SAMPLE:  Calendar. Value Initialization

The specified date will be highlighted with a round blue marker in the calendar. By default, no date is selected initially.

Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you've set the format of date you want to use in the calendar both in the value and in the dateFormat property. Otherwise, the default format ("%d/%m/%y") will be used.
