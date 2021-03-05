---
sidebar_label: Sidebar API
title: Sidebar API
---          


## Constructor

~~~js
var sidebar = new dhx.Sidebar("sidebar_container",{
    // config options
});
~~~

Parameters:

- the HTML container of dhtmlxSidebar
- optional, an object with configuration settings (check below)

Methods
-----------

### toggle()

expands/collapses a sidebar

~~~js
sidebar.toggle();
~~~

### setState()

sets values/states of controls 

parameter:

- **state** - (*object*) a hash of *key:value* pairs, where key is the ID of a control and value is a new value/state of the control

~~~js
sidebar.setState({
	"search": "sidebar search", 
    "center": true, 
    "currentButton": "3"
});
~~~


### getState()

gets current values/states of controls

returns: 

- **state** - (*object*) an object with IDs of controls and their values/states 

~~~js
var state = sidebar.getState(); 
/* ->
 {
	"search": "sidebar search", 
    "center": true, 
    "currentButton": "3"
 } 
*/
~~~


### disable()

disables and dims an item(s) of dhtmlxSidebar

parameter:

- **ids** -  (*string,array*)  one ID or an array of IDs of items

~~~js
sidebar.disable("search");
// several at a time
sidebar.disable(["search", "currentButton", "edit"]);
~~~
	
### enable()

enables a disabled item(s) of dhtmlxSidebar

parameter:

- **ids**  - (*string,array*)   one ID or an array of IDs of items

~~~js
sidebar.enable("search");
// several at a time
sidebar.enable(["search", "currentButton", "edit"]);
~~~

### show()

shows an item of dhtmlxSidebar

parameter:

- **ids**  - (*string,array*)   one ID or an array of IDs of items

~~~js
sidebar.show("search");
// several at a time
sidebar.show(["search", "currentButton", "edit"]);
~~~
	
### hide()

hides an item of dhtmlxSidebar

parameter:

- **ids**  - (*string,array*)   one ID or an array of IDs of items

~~~js
sidebar.hide("search");
// several at a time
sidebar.hide(["search", "currentButton", "edit"]);
~~~


Properties
---------------

### width

sets the width of a sidebar, 200 by default

type: string

~~~js
var sidebar = new dhx.Sidebar(document.body, {
	css: "dhx_widget--border_right",
	width: "450"
});
~~~

### minWidth

sets the minimal width of a sidebar in the collapsed state, 69 by default

type: number

~~~js
var sidebar = new dhx.Sidebar(document.body, {
	css: "dhx_widget--border_right",
	minWidth: 80,
	collapsed: true
});
~~~

### collapsed

defines that a sidebar is initialized in the collapsed state

type: boolean

~~~js
var sidebar = new dhx.Sidebar(document.body, {
	css: "dhx_widget--border_right",
	collapsed: true
});
~~~

### css

adds style classes for the component

type:string

~~~js
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var sidebar = new dhx.Sidebar({
    css:"my_first_class my_second_class"
});
~~~

### navigationType

defines the action that opens sidebar items: "click" or "pointer" (default)

~~~js
sidebar.config.navigationType = "click";
sidebar.paint();
~~~

Check details in the section sidebar/init.md#initializesidebar.

Events
-------------

### Toggle

fires on expanding/collapsing a sidebar

parameter:

- **isCollapsed** - (*boolean*)	true, if a sidebar is collapsed

~~~js
sidebar.events.on("Toggle",function(true){
   // your code here
});
~~~

### Click

fires after a click on a control

parameter:

- **id** - (*string*)  the ID of a clicked control
- **e** - (*Event*) a native event object

~~~js
sidebar.events.on("Click", function(id,e){
	console.log(id);
});
~~~


### InputCreated

fires when a new input is added 

parameter:

- **id** - (*string*) the ID of a new input
- **el** -	(*HTMLElement*)	a newly created input

~~~js
sidebar.events.on("InputCreated", function(id, el){
	console.log(id);
});
~~~

### InputBlur

fires when a control is blurred

parameter:

- **id** - (*string*) the ID of a new control

~~~js
sidebar.events.on("InputBlur", function(id){
	console.log(id);
});
~~~


### InputFocus

fires when a control is focused

parameter:

- **id** - (*string*) the ID of a new control

~~~js
sidebar.events.on("InputFocus", function(id){
	console.log(id);
});
~~~


### OpenMenu

fires on expanding a menu control 

~~~js
sidebar.events.on("OpenMenu", function(){
	// your code here
});
~~~



@todo:
add links to samples and Data events<br/>
check navigationType, now works only for "click"

