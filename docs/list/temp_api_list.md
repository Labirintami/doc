---
sidebar_label: List API
title: List API
---      

```tododelete``` 

Constructor
---------------

~~~js
var list = new dhx.List("list_container",{
    itemHeight: 40
});
~~~

Parameters:

- the HTML container of dhtmlxList
- configuration settings (check below)

Objects
-----------

- config
- events
- selection

Methods
-------------

###setFocusIndex

sets focus to an item according to its index

params:

- index	-	(number)		the index of an item

~~~js
list.setFocusIndex(7);
~~~

###getFocusItem

returns the id of an item in focus

returns: 

- id	-	(string)		the id of an item in focus

~~~js
var focus = list.getFocusItem(); // -> "u1556534543152"
~~~

###getFocusIndex

returns the index of an item in focus

returns:

- index	-	(number)		the index of an item in focus

~~~js
var index = list.getFocusIndex(); // -> 6
~~~


### destructor

releases occupied resources

~~~js
list.destructor();
~~~


### Selection 

#### getId

returns the id of a selected item

returns: 

- id	-	(string)		the id of a selected item

~~~js
var id = list.selection.getId(); // -> "u1548495213601"
~~~


#### getItem

returns the object of a selected item

returns:

- id	- (object)		the object of a selected item

~~~js
var item = list.selection.getItem(); 
// -> {$selected: true, id: "u1548495213601", index: 7}
~~~

#### add

selects the specified item in the list

params: 

- id   -  (string)     the id of the item to select

~~~js
var id = list.selection.getId(); 
list.selection.add(id);
~~~


#### remove

removes selection from an item

params: 

- id 	- (string)		optional, the id of the selected item 

returns:

- result	-	(boolean)			true, if selection is removed, otherwise false

~~~js
// removes selection from the currently selected item
list.selection.remove();
~~~

In case an id isn't passed, the method unselects the currently selected item.


Properties
-------------

### dragMode 

enables drag-n-drop in List

type: string

values: "target", "source", "both"

~~~js
var list = new dhx.List("list_container", { 
    dragMode:"source"
});
~~~
- descr:
Drag-n-drop can work in three modes: 
	- "target" - a list takes items from other lists, while its items can't be dragged out of it
    - "source" - a list allows dragging its items out and can't take items from other lists
    - "both" - a list both takes items from other lists and allows dragging its items out as well


###dragCopy

defines that an item is copied to a target during drag-n-drop

type: boolean

~~~js
var source = new dhx.List("list-source", {dragMode: "source", dragCopy: true});
var target = new dhx.List("list-target", {dragMode: "target", dragCopy: true});
~~~

###dropBehaviour

defines the behaviour of a dragged item

type:string

~~~js
var source = new dhx.List("list-source",{
	dragMode:"source", dropBehaviour:"complex"
});
var target = new dhx.List("list-target",{
	dragMode:"target", dropBehaviour:"complex"
});
~~~

There are three modes of behaviour of a dragged list item:

- "child" - a dragged item becomes a child of the item it is dragged to
- "sibling" - a dragged item becomes a sibling of the item it is dragged to
- "complex" - a dragged item can become both a child of a sibling of a target item, depending on the position specified by highlighting

### template

specifies a template for List items

type: function

~~~js
var list = new dhx.List("list", {
	template: function(item) {
		return "<strong>!!!</strong>" + item.value;
	}
});
~~~

The template function takes one parameter:

- item	-	(object)		an object of a data item

### virtual 

enables dynamic rendering of List items

type: boolean

default: false

~~~js
var list = new dhx.List("list_container", {
	virtual: true
});
~~~


### itemHeight

sets the height of an item

type: number

default: 34 

~~~js
var list = new dhx.List("list_container", { 
    itemHeight:30
});
~~~

### css

adds a CSS class(es) to the component

type: string

~~~js
<style>
	.bg-gray {
		background: #faf9f9;
	}
</style>


var list = new dhx.List("list", {css: "bg-gray"});
~~~

###height

sets the height of List

type: number

~~~js
var list = new dhx.List("list", {height: 700});
~~~

###keyNavigation

enables/disables navigation in List by arrow keys

type: function|boolean

~~~js
var list = new dhx.List("list", {keyNavigation:true});
~~~


Events
---------

### ContextMenu 

fires on calling a context menu for an item

params:

- id    -  	(string, number)			the id of a right-clicked item
- e		- 	(Event)					a native event object

~~~js
list.events.on("ContextMenu", function(id, e){
    // your code here
});
~~~

### Click

fires on clicking an item

params: 

- id  -   (string, number)			the id of a clicked item
- e		-	 (Event)				a native event object

~~~js
list.events.on("Click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});
~~~

### FocusChange

fires on moving focus to a new item

params:

- index	-	(number)				the position of an item
- id	-	(string, number)		the id of an item

~~~js
list.events.on("FocusChange", function(index, id){
    // your code here
});
~~~

@todo: 
check and improve
