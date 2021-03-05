---
sidebar_label: MenuItem
title: MenuItem
---          



This is a drop-down list of options.

<img src="toolbar/"/>


## Adding menuItem

You can add a MenuItem control to the toolbar with the help of the **add()** method of Tree Collection:

~~~js
toolbar.data.add({
	type:"menuItem", value:"Menu", items:[
		{ type:"menuItem", value:"Option 1" },
		{ type:"menuItem", value:"Option 2" },
		{ type:"separator"},
		{ type:"menuItem", value:"Option Infinite" }
	]
});
~~~

Attributes
------------------

You can provide the following **attributes** in the configuration object of a MenuItem control:

- **type** - (*string*) required, the type of a control, set it to "menuItem"
- **id** - (*string*) the id of a control, auto-generated if not set
- **icon** - (*string*) optional, the name of an icon from the used icon font
- **items** - (*array*) optional, an array of children controls (note that all the children should have the type *menuItem*)
- **value** - (*string*)  optional, a value for the menu item
- **hotkey** - (*string*) optional, the name of a keyboard shortcut for a menu item

## Showing/hiding menuItem

A menu item can be hidden and shown again with the methods of Toolbar:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enabling/disabling menuItem

Menu items can be enabled and disabled:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

<br/>

Check the full list of available operations in the [Toolbar API](toolbar/api.md) and [Tree Collection API](helpers/tree_collection.md).

@todo:
rename the control<br/>
add an image and link to the sample

