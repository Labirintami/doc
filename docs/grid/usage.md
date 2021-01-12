
---
sidebar_label: Work with Grid
title: Work with Grid
---          

``` todo

Working with columns and cells
---------------------

The API of dhtmlxGrid allows setting configuration of columns, getting an object of a particular column as well as the parameters of a certain cell.

### Setting columns configuration

You can specify the configuration of Grid columns on the fly via the [setColumns()](grid/api/grid_setcolumns_method.md) method. It takes an array with columns objects as a parameter.

~~~js
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
    // more columns objects
]);
~~~

You can find the full list of the available configuration options of a Grid column [here](grid/configuration.md#columns).

### Getting configuration of a column

It is possible to return an object with attributes of a column via its id. Use the [getColumn()](grid/api/grid_getcolumn_method.md) method for this purpose.

~~~js
var column = grid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"
~~~

The method returns an object with configuration of the specified column. Such an object contains a set of fields:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>(<i>array</i>) mandatory, an array of objects with header rows configuration. Each header object may include:
            <ul>
            <li><b>text</b> - (<i>string|number</i>) the text of a header</li>
            <li><b>align</b> - (<i>string</i>) aligns data in the header: "left"|"center"|"right"</li>
            <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
            <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan</li>
            <li><b>css</b> - (<i>any</i>) styling to be applied to a header</li>
            <li><b>content</b> - (<i>string</i>) additional content of a header, which can be:
            <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
            <ol>- one of the methods that process values in a column and show result in the header: "avg" | "sum" | "max" | "min" </ol>
            <ol>- some other string</ol>
            </li>
            <li><b>filterConfig</b> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
            <ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
            <ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
            <ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
            <ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
            <ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
            </li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration. Each footer object may include:
            <ul>
            <li><b>text</b> - (<i>string|number</i>) the text of a footer </li>
            <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
            <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan</li>
            <li><b>css</b> - (<i>any</i>) styling to be applied to a footer</li>
            <li><b>content</b> - (<i>string</i>) additional content of a footer, which can be:
            <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
            <ol>- one of the methods that process values in a column and show result in the footer: "avg" | "sum" | "max" | "min" </ol>
            <ol>- some other string</ol>
            </li>
            <li><b>filterConfig</b> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
            <ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
            <ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
            <ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
            <ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
            <ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
            </li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>mark</b></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
            <ul><li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li>
            <li>as a <i>function</i> takes several parameters:
            <ol>- <b>cell</b> - (<i>string</i>) the value of a cell</ol>
            <ol>- <b>columnCells</b> - (<i>array</i>) an array of all cell values in the specified column</ol>
            <ol>- <b>row</b> - (<i>object</i>) an object with all cells in a row</ol>
            <ol>- <b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</ol>
            </li></ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>resizable</b></td>
			<td>(<i>boolean</i>) defines whether a column can be resized</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a column: "string"|"number"|"boolean"|"any"|"date"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>dateFormat</b></td>
			<td>(<i>string</i>) defines <a href="https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html">the format of dates</a> (type:"date")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>editorType</b></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"datePicker"|"checkbox"|"combobox"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>template</b></td>
			<td>(<i>function</i>) returns a template with content for a cell(s). Takes 3 parameters:
            <ul>
                <li><b>cellValue</b> - (<i>any</i>) the value of a cell</li>
                <li><b>row</b> - (<i>object</i>) an object with all cells in a row</li>
                <li><b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a column is hidden</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>draggable</b></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>editable</b></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>sortable</b></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>adjust</b></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>autoWidth</b></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of Grid</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>align</b></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>$cellCss</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array of objects with CSS classes (as key:value pairs) for each cell of a column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>$uniqueData</b></td>
			<td>(<i>array</i>) <b>readonly</b>, an array that contains some unique data, can't be redefined</td>
		</tr>
    </tbody>
</table>

### Getting configuration of a cell

There is the [getCellRect()](grid/api/grid_getcellrect_method.md) method that returns an object with coordinates of a cell. The method takes as parameters the ids of the row and the column the cell belongs to:

~~~js
var rect = grid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}
~~~

The return object includes the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>x</b></td>
			<td>(<i>number</i>) the X coordinate of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>y</b></td>
			<td>(<i>number</i>) the Y coordinate of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>number</i>) the height of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a cell</td>
		</tr>
    </tbody>
</table>

Getting header filter
--------------------

You may want to manipulate a filter specified in the header of a grid, for example, to set/unset the focus on the filter, to change the filter, or clear it. To do that, you should get an object of the header filter by column id via the [getHeaderFilter](grid/api/grid_getheaderfilter_method.md) method: 

~~~js
var countryFilter = grid.getHeaderFilter("country");
// -> returns HTMLElement
// <label class="dhx_grid-filter__label dxi dxi-menu-down">...</label>

countryFilter.focus();

// or

var countryFilter = grid.getHeaderFilter("density");
// -> returns Combobox
// Combobox {_uid: "u1597304021754", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.blur();
~~~

{{sample grid/03_usage/14_get_header_filter.html}}

The method returns either an HTML object or an object with Combobox configuration.

Hiding/showing a column
--------------------------

It is possible to show and hide a column in the grid via the [showColumn()](grid/api/grid_showcolumn_method.md) and [hideColumn()](grid/api/grid_hidecolumn_method.md) methods. 

~~~js
//showing a column
grid.showColumn(col);
//hiding a column
grid.hideColumn(col);
~~~

{{editor    https://snippet.dhtmlx.com/n4zjwsqj	Grid. Show/Hide Column}}

Since the object of a column has the [hidden](grid/configuration.md#hiddencolumns) property, the showColumn() method changes it value to *false* while the hideColumn() method changes the hidden property to *true*.

Checking visibility of a column
----------------------------------

You can check whether a column is hidden or shown on a page using the grid/api/grid_iscolumnhidden_method.md method. The method returns *true*, if a column is hidden, and *false* if it's visible.

~~~js
grid.isColumnHidden("country"); // -> true|false
~~~

{{editor    https://snippet.dhtmlx.com/rdqhwnjv	Grid. Is Column Hidden}}


Hiding/showing a row
--------------------------

Starting from v7.0, it is possible to show and hide a row in the grid via the [showRow()](grid/api/grid_showrow_method.md) and [hideRow()](grid/api/grid_hiderow_method.md) methods. 

~~~js
//showing a row
grid.showRow(rowId);
//hiding a row
grid.hideRow(rowId);
~~~

{{sample	grid/03_usage/15_show_hide_row.html}}


Checking visibility of a row
----------------------------------

You can check whether a row is hidden or shown on a page using the grid/api/grid_isrowhidden_method.md method. The method returns *true*, if a row is hidden, and *false* if it's visible.

~~~js
grid.isRowHidden("1"); // -> true|false
~~~

{{sample	grid/03_usage/15_show_hide_row.html}}

Adding/removing spans
---------------------

You can manipulate columns and rows spans inside the grid with the help of corresponding API methods: **addSpan()**, **removeSpan()** and **getSpan()**.

###Adding spans

In order to add a col/row span into the grid, use the [addSpan()](grid/api/grid_addspan_method.md) method. Pass an object with configuration of a span as a parameter:

~~~js
grid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
// grid.paint();
~~~

These are possible fields of a span object:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a row</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
		</tr>
    </tbody>
</table>


###Getting spans

You can return the col/row span a cell is a part of using the [getSpan()](grid/api/grid_getspan_method.md) method. It takes the ids of the row and the column the cell belongs to as parameters:

~~~js
var span = grid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
~~~

As a result, you'll get an object with a span configuration, if any span includes the specified cell. Attributes of a span object are described above.

###Removing spans

To remove an existing span, make use of the [removeSpan()](grid/api/grid_removespan_method.md) method. It takes the ids of the row and the column as parameters: 

~~~js
grid.removeSpan("10","a");
~~~

Controlling scroll behavior 
-----------------------------

The API of dhtmlxGrid provides the possibility to set scrolls to the necessary position and to get the current state of scrolls.

### Scrolling to specific coordinates

You can scroll grid content to exact position defined by x and y coordinates via the [scroll()](grid/api/grid_scroll_method.md) method. Pass the coordinates as parameters of the method.

~~~js
grid.scroll(75,230);
~~~

### Scrolling to specific grid cell   

It is also possible to scroll grid content to a particular cell. Pass the ids of the row and the column as parameters:

~~~js
grid.scrollTo("15","c");
~~~

{{editor    https://snippet.dhtmlx.com/usu1rnpu	Grid. Controlling Scroll Behavior}}

### Getting the state of scroll

To return the current state of scroll, use the [getScrollState()](grid/api/grid_getscrollstate_method.md) method. 

~~~js
var state = grid.getScrollState(); // -> {x:0,y:0}
~~~

It returns an object with x,y coordinates of a position the grid has been scrolled to.

Filtering data
------------------

You can filter grid data by the specified criteria with the help of the **filter()** method of [data collection](data_collection/api/refs/datacollection.md). The method takes as a parameter an object with the properties described below:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>rule</b></td>
			<td>(<i>object|function</i>) the filtering criteria. It can be:
			<ul>
				<li>a filtering function. It takes as a parameter a data item (e.g. a row) and returns an object with a filtering rule.</li>
				or:
				<li>an object with the following attributes:<br>
					- <b>by</b> - (<i>string</i>) mandatory, the id of a column<br>
					- <b>match</b> - (<i>string</i>) mandatory, a pattern to match <br>
					- <b>compare</b> - (<i>function</i>) a function for extended filtering that takes three parameters:
					<ol>- <b>value</b> - the value to compare (e.g. a column in a row) </ol>
					<ol>- <b>match</b> - a pattern to match </ol>
					<ol>- <b>item</b> - a data item the values of which should be compared (e.g. a row) </ol>
				</li>
			</ul></td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) optional, an object with two properties:
				<ul><li><b>add</b> (<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</li>
				<li><b>smartFilter</b> (<i>boolean</i>) defines whether a filtering rule will be applied after adding and editing items of the collection</li>
				<ul>
				</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
grid.data.filter(function (item) {
  return item.a > 0 && item.b !== "Apple";
});

grid.data.filter(function (item) {
  return item.a > 0 && item.b !== "Apple";
}, {
  add: true
});

grid.data.filter({
  by: "a",
  match: "Orange",
  compare: function (value, match, item) {
    if (item.a !== "Some") {
      return val === "New";
    }
    return false;
}, {
  add: true,
  smartFilter: true
});
~~~

{{editor    https://snippet.dhtmlx.com/g0zpjqi1	Grid. Basic Filter}}


Sorting data
--------------

It is possible to sort data in the grid via the **sort()** method of [data collection](data_collection/api/refs/datacollection.md). The method takes two parameters:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>rule</b></td>
			<td>(<i>object</i>) an object with parameters for sorting. It can take the following attributes:
			<ul>
				<li><b>by</b> (<i>string</i>) the id of a column</li>
				<li><b>dir</b> (<i>string</i>) the direction of sorting "asc" or "desc"</li>
				<li><b>as</b> (<i>function</i>) a function that specifies the type to sort data as</li>
				<li><b>rule</b> (<i>function</i>) optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) defines the parameter of sorting. It takes one attribute:
			<ul>
				<li><b>smartSorting</b> (<i>boolean</i>) specifies whether a sorting rule should be applied each time after changing the data set</li>
			</ul>
			</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
grid.data.sort({
	by:"a",
	dir:"desc",
    as: function(item){
    	return item.toUpperCase(); 
    },
	{
		smartSorting: true
	}
});
~~~

{{editor    https://snippet.dhtmlx.com/81dmbdfd	Grid. Sorting Data}}

To discard all applied sorting rules, call the method without parameters:

~~~js
grid.data.sort();
~~~

### Custom sorting

You can also specify the **rule** attribute in a passed object instead of the default ones and set a custom function for sorting. For example:

~~~js
grid.data.sort({
	rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

Getting the sorting state
--------------------------

To get the current state of sorting data in Grid, use the grid/api/grid_getsortingstate_method.md method. The method returns an object with two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>dir</b></td>
			<td>(<i>string</i>) the sorting direction (desc, asc)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>by</b></td>
			<td>(<i>string</i>) the id of a column that the grid is sorted by</td>
		</tr>
    </tbody>
</table>
<br>
~~~js
var state = grid.getSortingState(); 
// -> {dir: "desc", by: "country"}
~~~

{{editor    https://snippet.dhtmlx.com/u2vk3ri3	Grid. Get Sorting State}}

Editing data
------------------

You can easily edit the desired cell of a grid with the help of the grid/api/grid_editcell_method.md method. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string</i>) the id of a row</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>col</b></td>
			<td>(<i>string</i>) the id of a column</td>
		</tr>
    </tbody>
</table>

For example, you can edit the first cell of the "project" column like this:

~~~js
grid.editCell(grid.data.getId(0),"project");
~~~

{{editor    https://snippet.dhtmlx.com/pqbax5vs	Grid. Editing Data}}

To finish editing of a cell, use the [editEnd()](grid/api/grid_editend_method.md) method. The method takes a *boolean* value as a parameter to define whether the edited data will be saved after the editing of a cell is complete (if *true*, the made changes won't be saved).

~~~js
grid.editEnd(); // the edited data will be saved

grid.editEnd(true); // the edited data won't be saved
~~~

{{note The [editEnd()](grid/api/grid_editend_method.md) method does not work if [the type of the column editor](grid/configuration.md#columneditors) is defined as **checkbox**.}}


Exporting Grid
-------------------

You can easily export data of Grid into the Excel or CSV format.

###Exporting data to Excel 

dhtmlxGrid provides the possibility to export data from Grid into an Excel file by calling the **xlsx()** method of the Export module. The method takes an object with export settings as a parameter.

~~~js
grid.export.xlsx({
	name:"grid_data",
	url: "//export.dhtmlx.com/excel"
});
~~~

Export settings include:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>url</b></td>
			<td>(<i>string</i>) the link to the server side where export will be processed. <br>By default, it is <b>"//export.dhtmlx.com/excel"</b></td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>name</b></td>
			<td>(<i>string</i>) the name of a ready Excel file</td>
		</tr>
    </tbody>
</table>

{{editor    https://snippet.dhtmlx.com/58oqij47	Grid. Export}}

<h3 id="exportcsv">Exporting data to CSV</h3>

You can export data from Grid to the CSV format with the **csv()** method of the Export module. The method takes an object with export settings as a parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>asFile</b></td>
			<td>(<i>boolean</i>) defines whether Grid should be exported to a file, <i>true</i> by default. To export Grid only as a CSV string, you need to set <i>asFile:false</i>.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>name</b></td>
			<td>(<i>string</i>) the name of the exported CSV file (if asFile is not set to <i>false</i>).</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>rowDelimiter</b></td>
			<td>(<i>string</i>) a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>columnDelimiter</b></td>
			<td>(<i>string</i>) a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value.</td>
		</tr>
    </tbody>
</table>
<br>

~~~js
grid.export.csv({
	name:"grid_data", // grid data will be exported to a CSV file named "grid_data"
    rowDelimiter: "\t", // the tab delimiter will be used to separate rows
    columnDelimiter: ";" // the semicolon delimiter will be used to separate columns
});
~~~

{{editor    https://snippet.dhtmlx.com/58oqij47	Grid. Export}}

The **csv()** method returns a CSV string with Grid data.

Repainting Grid
------------------

In case you've changed some configuration settings of a grid, you can repaint it on a page via the [paint()](grid/api/grid_paint_method.md) method:

~~~js
grid.paint();
~~~

Destructing Grid
-------------------

When it's necessary to release resources occupied by Grid during its activity, you can make use of the [destructor()](grid/api/grid_destructor_method.md) method:

~~~js
grid.destructor();
~~~


Using Selection API
----------------------

For information on using Selection API, read [Work with Selection Object](grid/usage_selection.md).


``` todo