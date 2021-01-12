Migration to Newer Versions
===========

``` todo

6.5 -> 7.0
-------------

The **splitAt** configuration property of TreeGrid has been deprecated. The property is still available but not recommended for use.

Starting from v7.0, use **leftSplit** instead.

6.3 -> 6.4 
---------------

1) In v6.4 some properties and methods of the TreeGrid API have been renamed. The new names bring more clarity and precisely describe the actual functionality.

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>treegrid.edit()</td><td>treegrid.editCell()</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
<tr><td>fitToContainer</td><td>autoWidth</td></tr>
<tr><td>headerSort</td><td>sortable</td></tr>
</table>

2) The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

3) Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.


6.2 -> 6.3
-------------

In version 6.3 some functionality of TreeGrid has been renamed in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality. 

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

<tr><td>grid.events.on("HeaderInput", function(){})</td><td>grid.events.on("FilterChange", function(){})</td></tr>

</table>

``` todo