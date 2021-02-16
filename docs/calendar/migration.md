---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
---          
6.3 -> 6.4 
---------------
In v6.4 some properties and events of the Calendar API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

~~~html
<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.type_info {
		text-align: center;
        background-color: #E3F6FF;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>
~~~
<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>calendar.events.on("DateHover", function(){})</td><td>calendar.events.on("DateMouseOver", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>block</td><td>disabledDates</td></tr>
<tr><td>view</td><td>mode</td></tr>
</table> 