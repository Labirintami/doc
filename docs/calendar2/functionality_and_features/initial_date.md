---
sidebar_label: Initial calendar date
title: Initial calendar date
---
By default, a calendar shows a month with the current date. If for some reason you want to open some other date, set the date property. It accepts a Date object as a value. It is either the same as value (by default), or shows the current date if value is not specified.

var calendar = new dhx.Calendar("calendar_container", {
    date: new Date(2019, 0, 1)
});

RELATED SAMPLE:  Calendar. Date Initialization (https://snippet.dhtmlx.com/fyg6l65t)