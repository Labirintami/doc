
---
sidebar_label: Grid API 
title: Grid API 
---          

``` todo

Constructor
----------------

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 100, id: "a", header: [{ text: "#" }] },
		{ width: 100, id: "b", header: [{ text: "Title" }] },
		{ width: 200, id: "c", header: [{ text: "Name" }] },
		{ width: 200, id: "d", header: [{ text: "Address" }] }
	],
	headerRowHeight: 50,
	data: dataset
});
~~~

Parameters:

- the HTML container for dhtmlxGrid
- optional, an object with configuration settings (check below)

Objects
----------

- config
- data
- events
- export


Methods
----------

### addCellCss

- short: adds a style to a cell
- params:
	- row	string,number		the id of a row
    - col	string,number		the id of a column
    - css	string				the name of the CSS class
- example:
~~~js
<style>
    .myCustomClass{
		background:greenyellow;
	}
</style>

grid.addCellCss("1", "b", "myCustomClass");
~~~


### addRowCss

- short: adds a style to a row
- params:
	- id	string,number		the id of a row
    - css 	string 				the name of the CSS class
- example:
~~~js
<style>
    .myCustomClass{
		background:greenyellow;
	}
</style>

grid.addRowCss("2", "myCustomClass");
~~~


### addSpan	

- short: adds a rows/cols span
- params:
	- span		object		an object with configuration of a span
- example:
~~~js
grid.addSpan({ 
	row: "0", 
    column: "a", 
    rowspan: 5 
});
// grid.paint();
~~~
- descr:
The **span** object contains the following properties:
	- **row** - (*string|number*) mandatory, the id of a row
	- **column** - (*string|number*) mandatory, the id of a column
	- **rowspan** - (*number*) optional, the number of rows in a span
	- **colspan** - (*number*) optional, the number of columns in a span
	- **text** - (*string|number*) optional, the text in a spanned row/column
	- **css** - (*string*) optional, the name of the CSS class that will be applied to a span
- relatedapi: spans, getSpan, removeSpan

### adjustColumnWidth	

- short: adjusts the width of a column to make all its content visible
- params:
	- id	string,number		the id of a column
- example:
~~~js
grid.adjustColumnWidth("b");
~~~

### destructor

- short: releases occupied resources
- example:
~~~js
grid.destructor();
~~~

### getCellRect

- short: returns the parameters of a cell
- params: 
	- row	string,number		the id of a row
    - col	string,number		the id of a column
- returns:
	- rect	object		an object with parameters of a cell
- example: 

~~~js
var rect = grid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}
~~~
- descr:
The return object includes the following attributes:

	- **x** - (*number*) the X coordinate of a cell
	- **y** - (*number*) the Y coordinate of a cell
	- **height** - (*number*) the height of a cell
	- **width** - (*number*) the width of a cell

### getColumn

- short: returns an object with attributes of a column
- params: 
	- colId		string,number		the id of a column
- returns:
	- config		object		an object with attributes of a column    
- example:
~~~js
var column = grid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"}
~~~
- descr:
The returned object contains the following set of properties:
- **id** - (*string|number*) the id of a column
- **width** - (*number*) the width of a column
- **header** - (*array*) an array of objects with header rows configuration. Each header object may include:
	- **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the header: "avg" | "sum" | "max" | "min"
        - some other string
- **footer** - (*array*) an array of objects with footer rows configuration. Each footer object may include:
    - **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the footer: "avg" | "sum" | "max" | "min"
        - some other string
- **maxWidth** - (*number*) the maximal width to be set for a column
- **mark** - (*object|function*) returns a template for marking a cell(s)
    - as an *object* contains **min** and **max** properties, to apply desired CSS classes to cells with minimal|maximal values in a column 
    - as a *function* takes several parameters:
        - **cell** - (*string*) the value of a cell
        - **columnCells** - (*array*) an array of all cell values in the specified column
        - **row** - (*object*) an object with all cells in a row
        - **col** - (*object*) the config of a column (see the **columns** config)      
- **type** - (*string*) the type of a column: "string"|"number"|"boolean"|"any"
- **template** - (*function*) returns a template with content for a cell(s). Takes 3 parameters:
    - **cellValue** - (*any*) the value of a cell
    - **row** - (*object*) an object with all cells in a row
    - **col** - (*object*) the config of a column (see the **columns** config)          
- **$cellCss** - (*array*) **readonly**, an array of objects with CSS classes (as key:value pairs) for each cell of a column
- **$uniqueData** - (*array*) **readonly**, an array that contains some unique data, can't be redefined


### getScrollState

- short: returns the coordinates of a position a grid has been scrolled to
- returns: 
	-  position		object		an object with x,y coordinates of a position the grid has been scrolled to
- example:
~~~js
var state = grid.getScrollState(); // -> {x:0,y:0}
~~~


### getSpan

- short: returns an object with spans 
- params:
	- row - (*string|number*) the id of a row
    - col - (*string|number*) the id of a column
- returns:
	- span - (*object*) an object with configuration of a span
- example:
~~~js
var span = grid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
~~~
- descr:
A returned **span** object contains the following properties:
	- **row** - (*string|number*) obligatory, the id of a row
	- **column** - (*string|number*) obligatory, the id of a column
	- **rowspan** - (*number*) optional, the number of rows in a span
	- **colspan** - (*number*) optional, the number of columns in a span
	- **text** - (*string|number*) optional, the content of a span
	- **css** - (*string*) optional, the name of a CSS class applied to a span
- relatedapi: spans, addSpan, removeSpan


### paint

- short: repaints a grid on a page
- example:
~~~js
grid.paint();
~~~


### removeCellCss

- short:removes a style from a cell
- params:
	- row	string,number		the id of a row
    - col	string,number		the id of a column
    - css	string				the name of the CSS class
- example:
~~~js
grid.removeCellCss("1", "b", "myCustomClass");
~~~

- relatedapi:addCellCss

### removeRowCss

- short:removes a style from a row
- params:
	- id	string,number		the id of a row
    - css 	string 				the name of the CSS class
- example:
~~~js
grid.removeRowCss("2", "myCustomClass");
~~~

- relatedapi:addRowCss

### removeSpan	

- short: removes a cols/rows span 
- params:
	- row 	string,number 	the id of a row
    - col 	string,number 	the id of a column
- example:
~~~js
grid.removeSpan("10","a"); 
~~~
- relatedapi:spans, addSpan, getSpan


### scroll	

- short: scrolls a grid according to specified coordinates
- params:
	- x		number		the X coordinate
    - y		number		the Y coordinate
- example:
~~~js
grid.scroll(75,230);
~~~




### scrollTo

- short: scrolls a grid to a specified cell
- params:
	- row 	string,number 	the id of a row
    - col 	string,number 	the id of a column
- example:
~~~js
grid.scrollTo("15","c");
~~~



### setColumns	

- short: sets headers for columns 
- params: 
	- columns	array	an array of objects with configuration of columns
- example:
~~~js
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
	// more columns objects
]);
// grid.paint();
~~~
- descr:
Each column object may contain the followings fields:
- **id** - (*string|number*) the id of a column
- **width** - (*number*) the width of a column
- **header** - (*array*) an array of objects with header rows configuration. Each header object may include:
	- **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the header: "avg" | "sum" | "max" | "min"
        - some other string
- **footer** - (*array*) an array of objects with footer rows configuration. Each footer object may include:
    - **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the footer: "avg" | "sum" | "max" | "min"
        - some other string
- **maxWidth** - (*number*) the maximal width to be set for a column
- **mark** - (*object|function*) returns a template for marking a cell(s)
    - as an *object* contains **min** and **max** properties, to apply desired CSS classes to cells with minimal|maximal values in a column 
    - as a *function* takes several parameters:
        - **cell** - (*string*) the value of a cell
        - **columnCells** - (*array*) an array of all cell values in the specified column
        - **row** - (*object*) an object with all cells in a row
        - **col** - (*object*) the config of a column (see the **columns** config)      
- **type** - (*string*) the type of a column: "string"|"number"|"boolean"|"any"
- **template** - (*function*) returns a template with content for a cell(s). Takes 3 parameters:
    - **cellValue** - (*any*) the value of a cell
    - **row** - (*object*) an object with all cells in a row
    - **col** - (*object*) the config of a column (see the **columns** config)          



Properties
--------------

### columns

- short: specifies the configuration of grid columns
- type: array
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 100, id: "a", header: [{ text: "#" }] },
		{ width: 100, id: "b", header: [{ text: "Title" }] },
		{ width: 200, id: "c", header: [{ text: "Name" }] },
		{ width: 200, id: "d", header: [{ text: "Address" }] }
	],
	data: dataset
});
~~~
- descr:
Each column object may contain a set of properties described below:
- **id** - (*string|number*) the id of a column
- **width** - (*number*) the width of a column
- **header** - (*array*) an array of objects with header rows configuration. Each header object may include:
	- **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the header: "avg" | "sum" | "max" | "min"
        - some other string
- **footer** - (*array*) an array of objects with footer rows configuration. Each footer object may include:
    - **text** - (*string*|*number*) the text of a header
	- **colspan** - (*number*) the number of columns in a colspan
	- **css** - (*any*) styling to be applied to a header
	- **content** -  (*string*) additional content of a header, which can be:
       	- a filter: "inputFilter" or "selectFilter"
        - one of the methods that process values in a column and show result in the footer: "avg" | "sum" | "max" | "min"
        - some other string
- **maxWidth** - (*number*) the maximal width to be set for a column
- **mark** - (*object|function*) returns a template for marking a cell(s)
    - as an *object* contains **min** and **max** properties, to apply desired CSS classes to cells with minimal|maximal values in a column 
    - as a *function* takes several parameters:
        - **cell** - (*string*) the value of a cell
        - **columnCells** - (*array*) an array of all cell values in the specified column
        - **row** - (*object*) an object with all cells in a row
        - **col** - (*object*) the config of a column (see the **columns** config)      
- **type** - (*string*) the type of a column: "string"|"number"|"boolean"|"any"
- **template** - (*function*) returns a template with content for a cell(s). Takes 3 parameters:
    - **cellValue** - (*any*) the value of a cell
    - **row** - (*object*) an object with all cells in a row
    - **col** - (*object*) the config of a column (see the **columns** config)          




### spans

- short:  describes the configuration of cols/rows spans
	
- type: array
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	spans: [
		{row:"0", column:"a", rowspan:5 },
		{row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
		{row:"0", column:"c", colspan:2, text:"Some content"},
		{row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
	],
	data: dataset
});
~~~

- descr:
Each object in the spans array contains the following properties:
	- **row** - (*string|number*) obligatory, the id of a row
	- **column** - (*string|number*) obligatory, the id of a column
	- **rowspan** - (*number*) optional, the number of rows in a span
	- **colspan** - (*number*) optional, the number of columns in a span
	- **text** - (*string|number*) optional, the content of a span
	- **css** - (*string*) optional, the name of a CSS class applied to a span

- related: addSpan, getSpan, removeSpan

### data

- short:specifies an array of data objects to set into the grid
- type:array
- example:
~~~js
var dataset = [
	{
		"id": 0,
		"a": 1,
		"b": "Linwood Long long long",
		"c": "Petersen",
		"d": "Dahlgreen Place"
	},
	{
		"id": 1,
		"a": 2,
		"b": "Edenburg",
		"c": "Agnes",
		"d": "Gem Street"
	},
    // more columns
];


var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	data: dataset
});
~~~


 
###headerRowHeight

- short: sets the height of rows in the header
- type: number
- default: 40
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	headerRowHeight: 50
});
~~~

- descr: 
The height of the header is calculated as a sum of all row heights in it.


###footerRowHeight

- short:sets the height of rows in the footer
- type: number
- default: 40
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	footerRowHeight: 50
});
~~~

- descr: 
The height of the footer is calculated as a sum of all row heights in it.


###columnsAutoWidth

- short: defines whether the width of columns is automatically adjusted to the width of their content
- type: boolean,number
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	columnsAutoWidth: true, /*!*/
	data: dataset
});
~~~
- descr:
At the moment "number" type defines the number of the last column that should be auto adjusted.



###rowHeight

- short: defines the height of a row in a grid
- type: number
- default: 40
- example:

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	rowHeight: 30, /*!*/
	data: dataset
});
~~~


###width

- short: sets the width of a grid 
- type: number
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	width: 400,  /*!*/
	data: dataset
});
~~~

###height

- short: sets the height of a grid
- type:number
- example: 
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	height: 400,   /*!*/
	data: dataset
});
~~~


###headerSort

- short: defines whether sorting on clicking headers of columns is enabled
- type: boolean
- default: true
- example: 
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	headerSort:false,  /*!*/
	data: dataset
});
~~~


###rowCss

- short: sets style for a row
- type: function
- example: 
~~~js
<style>
	.my_custom_row {
		background: coral;
	}
</style>


var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	rowCss: function (row) { return row.custom ? "my_custom_row" : "" }, /*!*/
	data: dataset
});
~~~

- descr:
The function takes the id of a row as a parameter and returns a string with the name of a CSS class.


###splitAt

- short: sets the number of frozen columns
- type:number
- example:
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	splitAt:2,  /*!*/
	data: dataset
});
~~~


###selection

- short: enables selection in a grid
- type:boolean
- default: false
- example: 
~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	selection:true,  /*!*/
	data: dataset
});
~~~


###fitToContainer

- short: makes grid to fit the size of a container
- type: boolean
- default: false
- example: 
~~~js
<div id="grid_container" style="width:600px;height:400px;"></div>


var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
    // grid will be adjusted to the size of container
	fitToContainer:true, /*!*/
	data: dataset
});
~~~
- descr: 
{{note Please note that if a grid has its own sizes specified, their values will redefine the size of the container.}}


Events
-----------

###Scroll 

- short: fires on scrolling a grid
- params:
	- coords	object		an object with new top and left coordinates
- example: 
~~~js
grid.events.on("Scroll", function({top,left}){
    console.log("The grid is scrolled to "+top,left);
});
~~~

###Sort

- short: fires on sorting a column by clicking on its header
- params:
	- id	string,number	the id of a column
- example: 
~~~js
grid.events.on("Sort", function(id){
    console.log("The grid is sorted by the "+id+" column");
});
~~~    
    
###Expand 

- short: fires on expanding a treegrid
- params:
	- rowId		string,number		the id of an expanded row
- example:
~~~js
grid.events.on("Expand", function(rowId){
    // your logic here
});
~~~


###HeaderInput

- short: fires on typing text in an input of a column's header
- params: 
	- value		string,number		an entered value
    - colId		string,number		the id of a column
    - filter	string				the type of a filter: "inputFilter" or "selectFilter"
- example:
~~~js
grid.events.on("HeaderInput", function(value,colId,filter){
    console.log("You've entered "+value+" into the "+colId+" column");
});
~~~  

<h3 id="cellclick">CellClick</h3>

- short: fires on click on a grid cell
- params:
	- row			object		an object with a row configuration
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("CellClick", function(row,column,e){
     // your logic here
});
~~~


###CellRightClick 

- short: fires on right click on a grid cell
- params:
	- row			object		an object with a row configuration
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("CellRightClick", function(row,column,e){
     // your logic here
});
~~~


###CellMouseOver

- short: fires on moving the mouse pointer over a grid cell
- params:
	- row			object		an object with a row configuration
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("CellMouseOver", function(row,column,e){
    // your logic here
});
~~~


###CellMouseDown

- short: fires before releasing the left mouse button when clicking on a grid cell
- params:
	- row			object		an object with a row configuration
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("CellMouseDown", function(row,column,e){
     // your logic here
});
~~~


###CellDblClick

- short: fires on double-click on a grid cell
- params:
	- row			object		an object with a row configuration
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("CellDblClick", function(row,column,e){
    // your logic here
});
~~~


###HeaderCellClick

- short: fires on click on a grid header cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("HeaderCellClick", function(column,e){
    // your logic here
});
~~~


###FooterCellClick 

- short: fires on click on a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("FooterCellClick", function(column,e){
    // your logic here
});
~~~

###HeaderCellRightClick

- short: fires on right click on a grid header cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("HeaderCellRightClick", function(column,e){
    // your logic here
});
~~~


###FooterCellRightClick 

- short: fires on right click on a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("FooterCellRightClick", function(column,e){
    // your logic here
});
~~~


###HeaderCellMouseOver

- short: fires on moving the mouse pointer over a grid header cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("HeaderCellMouseOver", function(column,e){
    // your logic here
});
~~~

###FooterCellMouseOver 

- short: fires on moving the mouse pointer over a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("FooterCellMouseOver ", function(column,e){
    // your logic here
});
~~~

###HeaderCellMouseDown 

- short: fires on moving the mouse pointer over a grid header cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("HeaderCellMouseDown", function(column,e){
    // your logic here
});
~~~

###FooterCellMouseDown

- short: fires on moving the mouse pointer over a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("FooterCellMouseDown", function(column,e){
    // your logic here
});
~~~


###HeaderCellDblClick 

- short: fires on double-click on a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("HeaderCellDblClick", function(column,e){
    // your logic here
});
~~~

###FooterCellDblClick 


- short: fires on double-click on a grid footer cell
- params:
    - column		object		an object with a column configuration
    - e				Event		a native event object
- example:
~~~js
grid.events.on("FooterCellDblClick", function(column,e){
    // your logic here
});
~~~


@todo:
- check, add links to samples, related api and guides<br>
- add pages/links for objects (events, export)?<br>
- css config

``` todo