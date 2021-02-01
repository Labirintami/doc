---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
---          

``` todo

6.5 -> 7.0
-------------------

The following API methods of DataView have been deprecated: enableSelection(), disableSelection(). These methods are still available but not recommended for use.

Instead of the methods, use new enable(), disable() methods of the selection object:

~~~js
// enables selection of items
dataview.selection.enable();

// disables selection of items
dataview.selection.disable();
~~~

6.3 -> 6.4 
---------------

1) In v6.4 some methods, properties and events of the Combobox API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

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
<tr><td>dataview.edit()</td><td>dataview.editItem()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>dataview.events.on("ContextMenu", function(){})</td><td>dataview.events.on("itemRightClick", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
</table>

2) The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of DataView. 

6.2 -> 6.3
---------------

The following API methods have been deprecated: getFocusIndex(), setFocusIndex(). These methods are still available but not recommended for use. 

Instead of using the getFocusIndex() method, you can get the index of an item in focus as follows:
~~~js
var id = dataview.getFocus();
var index = dataview.data.getIndex(id);
~~~ 

But we recommended you to use the corresponding [getFocus()](dataview/api/dataview_getfocus_method.md)/[setFocus()](dataview/api/dataview_setfocus_method.md) methods for getting the id of an item in focus and setting focus to an item by its id:

~~~js
dataview.getFocus(); // -> "item_id"

dataview.setFocus("item_id");
~~~

``` todo