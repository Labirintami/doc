---
sidebar_label: Input
title: Input
---          

``` todo

This is an input field for entering some text. 



## Adding Input

The following example shows how an Input control can be easily added to a sidebar with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
	type:"input",
	value:"",
	placeholder:"Type to search"
});
~~~


### Attributes

You can provide the following **attributes** in the configuration object of an input field:

- **type** - (*string*) required, the type of a control, set it to "input". If not specified - the ["navItem"](sidebar/navitem.md) type is applied by default.
- **id** - (*string*) the id of a control, auto-generated if not set
- **icon** - (*string*) optional, the name of an [icon](sidebar/customization.md#icons) from the used icon font
- **placeholder** - (*string*) optional, a tip for the input 
- **width** - (*number*) optional, the width of the input field
- **label** - (*string*) optional, a text label for the Input control
- **value** - (*string*) optional, the initial value of the field
- **tooltip** - (*string*) a tooltip for an input
- **inputType** - (*string*) sets the type of an input, use the "password" value to specify a field for entering a password


## Showing/hiding input 

You can show or hide Input with the methods of Sidebar:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Enabling/disabling input

You can also disable and enable inputs:

~~~js
sidebar.enable(id);
sidebar.disable(id);
~~~

## Setting tooltip

You can create a tooltip for an input:

~~~js
{
	type: "input",
	value: "",
	tooltip:"Type to search"
}
~~~


## Setting/getting value

You can use the **setState()** and **getState()** methods of Sidebar to change and access the value of Input.

To fill in Input with some text, call **setState()** with a key-value pair as a parameter, where the key is the ID of the input and the value is the text:

~~~js
{
	type: "input",
	id:"search",
	value: ""
}
...
sidebar.setState({search:"Summer"});
~~~

To get the text that is currently inside the Input control, call **getState()**:

~~~js
sidebar.getState(); //-> {search:"Summer"}
~~~

<br/>

Check the full list of available operations in the [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).

@todo:
add image, add link to sample<br/>

``` todo