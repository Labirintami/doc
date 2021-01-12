Migration to Newer Versions
===========

``` todo

6.5 -> 7.0
----------------

In v7.0, the **apply** event of TimePicker has been deprecated. Instead of it, use the new **beforeApply** and **afterApply** events:

~~~js
timepicker.events.on("AfterApply", function(value){
	console.log(value);
});

timepicker.events.on("BeforeApply", function(value){
	console.log(value);
    return false;
});
~~~

6.3 -> 6.4 
---------------

In v6.4 some properties and events of the TimePicker API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

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

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>timepicker.events.on("Close", function(){})</td><td>timepicker.events.on("AfterClose", function(){})</td></tr>
<tr><td>timepicker.events.on("Save", function(){})</td><td>timepicker.events.on("Apply", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>action</td><td>controls</td></tr>
</table>

``` todo