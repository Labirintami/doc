---
sidebar_label: Highlighted dates
title: Highlighted dates
---


https://snippet.dhtmlx.com/ic5oeiga	Calendar. Marked Dates

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
