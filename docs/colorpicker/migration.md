Migration to Newer Versions
===========
6.3 -> 6.4 
---------------

``` todo

In v6.4 some methods and events of the ColorPicker  API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>colorpicker.focusValue()</td><td>colorpicker.setFocus()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>colorpicker.events.on("ViewChange",function(){})</td><td>colorpicker.events.on("ModeChange", function(){})</td></tr>
<tr><td>colorpicker.events.on("SelectClick",function(){})</td><td>colorpicker.events.on("Apply", function(){})</td></tr>
</table>


6.2 -> 6.3
-------------------

In version 6.3 some methods and events of ColorPicker has been renamed in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality. 

The list of renamed methods and events:

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

<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>

<tr><td>getView()</td><td>getCurrentMode()</td></tr>
<tr><td>colorpicker.events.on("ColorChange",function(){})</td><td>colorpicker.events.on("Change", function(){})</td></tr>

</table>

``` todo