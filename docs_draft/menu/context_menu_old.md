---
sidebar_label: Creating Context Menu
title: Creating Context Menu
---          

dhtmlxContextMenu is a component that provides an easy way to add a contextual menu to projects. This component is highly customizable and supports a wide range of features. dhtmlxCustomMenu component can be a good aid for frequently used actions in web sites, help systems, etc.

![DHX Context Menu](../assets/menu/context.png)

## Initializing Context Menu

You can initialize dhtmlxContextMenu with the constructor:

~~~js
var cmenu = new dhx.ContextMenu();
~~~

## Loading Menu Options

Like with dhtmlxMenu, options can be either parsed from a JSON array:

~~~js
var carsdata = [
  	{ id:"1", value:"File", icon:"dxi-folder", childs:[
		{ id:"1.1", value:"New" },
		{ id:"1.2", value:"Open", hotkey:"alt+W" },
		{ type:"separator" },
		{ id:"1.3", value:"Close" }
  	]},
	{ type:"separator" },
	{ id:"2", value:"Edit", icon: "dxi-folder", childs:[
		{ id:"2.1", value:"Undo" },
		{ id:"2.2", value:"Redo" },
	{ type:"separator"},
		{ id:"2.3", value:"Select All" },
		{ type:"separator"},
		{ id:"2.4", value:"Cut" },
	]}
];

ccmenu.data.parse(carsdata);
~~~

or loaded from a JSON file:

~~~js
cmenu.data.load("[path_to_file]/file.json");
~~~

## Showing dhtmlxContextMenu

dhtmlxContextMenu is attached to a context zone, which is an HTML object, e.g.:

~~~html
<div id="menu"></div>
~~~

This is how you can attach dhtmlxContextMenu to an HTML element / id string:

~~~js
var cmenu = new dhx.ContextMenu();

document.querySelector('#menu').oncontextmenu = function(e) {
    cmenu.showAt(e.target, 'right');
    e.preventDefault();
}
//or
document.querySelector('#menu').oncontextmenu = function(e) {
    cmenu.showAt('menu', 'right');
    e.preventDefault();
}
~~~

**e** is the mouse event. You can attach dhtmlxContextMenu to it:

~~~js
document.querySelector('#menu').oncontextmenu = function(e) {
    cmenu.showAt(e);
    e.preventDefault();
}
~~~



## Positions of ContextMenu

<!-- dhtmlxContextMenu is shown with the [showAt()](todo) method. You can change the relative position of the menu by passing the second parameter of the method. A context menu can be shown: -->
- to the **right** of the element,
- at the **bottom** of the element,
- **at** the point where the mouse pointer is (default).

~~~js
cmenu.showAt('menu', 'right');
~~~

![DHX Context menu right position](../assets/menu/context_right.png)

@todo: check