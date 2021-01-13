
---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
---          
6.3 -> 6.4 
---------------

``` todo

1) In v6.4 some methods, properties and events of the Tabbar API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

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
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>tabbar.removeCell()</td><td>tabbar.removeTab()</td></tr>
<tr><td>tabbar.addCell()</td><td>tabbar.addTab()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>tabbar.events.on("Close", function(){})</td><td>tabbar.events.on("AfterClose", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>closeButtons</td><td>closable</td></tr>
<tr><td>activeView</td><td>activeTab</td></tr>
</table>

``` todo