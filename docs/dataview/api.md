---
sidebar_label: DataView API
title: DataView API
---          

``` todo

Constructor
---------------

~~~js
var dataview = new dhx.DataView("dataview_container",{
    itemsInRow: 2
});
~~~

Parameters:

- the HTML container of dhtmlxDataView
- configuration settings (check below)

Objects
-----------

- config
- events
- selection

Methods
-------------

###setFocusIndex

- short: sets focus to an item according to its index
- params:
	- index		number		the index of an item
- example:
~~~js
dataview.setFocusIndex(7);
~~~

### destructor

- short: releases occupied resources
- example:
~~~js
dataview.destructor();
~~~


### Selection 

#### getId

- short: returns the id of a selected item
- returns: 
	- id		string		the id of a selected item
- example:
~~~js
var id = dataview.selection.getId(); // -> "u1556619697041"
~~~


#### getItem

- short: returns the object of a selected item
- returns:
	- id	object		the object of a selected item
- example:
~~~js
var item = dataview.selection.getItem(); 
~~~

#### add

- short: selects the specified item in DataView
- params: 
	- id    string     the id of the item to select
- example:

~~~js
var id = dataview.selection.getId(); 
dataview.selection.add(id);
~~~
- relatedapi:getId

#### remove

- short: removes selection from an item
- params: 
	- id 	string		optional, the id of the selected item 
- returns:
	- result		boolean			true, if selection is removed, otherwise false
- example:
~~~js
// removes selection from the currently selected item
dataview.selection.remove();
~~~
- descr:
In case an id isn't passed, the method unselects the currently selected item.


Properties
-------------

### itemsInRow

- short: specifies the number of data items in a row
- type: number
- example:
~~~js
var dataview = new dhx.DataView("dataview", {itemsInRow: 5});
~~~

### gap

- short: sets margins for DataView items
- type: string?
- example:
~~~js
var dataview = new dhx.DataView("dataview", {itemsInRow: 5, gap: "20"});
~~~


### dragMode 

- short: enables drag-n-drop in DataView
- type: string
- values: "target", "source", "both"
- example:
~~~js
var dataview = new dhx.DataView("dataview_container", { 
    dragMode:"source"
});
~~~
- descr:<br>
Drag-n-drop can work in three modes: 
	- "target" - a dataview takes items from other dataviews, while its items can't be dragged out of it
    - "source" - a dataview allows dragging its items out and can't take items from other dataviews
    - "both" - a dataview both takes items from other dataviews and allows dragging its items out as well


### template

- short: specifies a template for DataView items
- type: function
- example:
~~~js
var dataview = new dhx.DataView("dataview", {itemsInRow: 5, template: function(item){
	return item.htmlContent + " <strong>this is template</strong>";
}});
~~~
- descr:
The template function takes one parameter:
	- item		object		an object of a data item


### css

- short: adds a CSS class(es) to the component
- type: string
- example:
~~~js
<style>
	.bg-gray {
		background: #efefef;
	}
</style>


var dataview = new dhx.DataView("dataview", {itemsInRow: 5, css: "bg-gray"});
~~~

###arrowNavigation

- short: enables/disables navigation in DataView by arrow keys
- type: function|boolean
- example:
~~~js
var dataview = new dhx.DataView("dataview", {
	itemsInRow: 5, arrowNavigation: true
});
~~~

Events
---------

### ContextMenu 

- short: fires on calling a context menu for an item
- params:
	- id      	string, number			the id of a right-clicked item
    - e		 	Event					a native event object
- example:
~~~js
dataview.events.on("ContextMenu", function(id, e){
    // your code here
});
~~~

### Click

- short: fires on clicking an item
- params: 
	- id     string, number			the id of a clicked item
    - e		 Event					a native event object
- example:
~~~js
dataview.events.on("Click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});
~~~

### FocusChange

- short: fires on moving focus to a new item
- params:
	- index		number				the position of an item
    - id		string, number		the id of an item
- example:
~~~js
dataview.events.on("FocusChange", function(index, id){
    // your code here
});
~~~


@todo:
- add getFocusIndex and getFocus methods <br>
- an example of returned item for getItem()<br>
- type of gap<br>
- add links to api and samples

``` todo