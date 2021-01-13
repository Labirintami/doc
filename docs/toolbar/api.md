---
sidebar_label: Toolbar API
title: 
---          

Constructor
----------------

~~~js
var toolbar = new dhx.Toolbar("toolbar_container");
~~~

Parameters:

- the HTML container of dhtmlxToolbar
- configuration settings (check below)

Methods
-------------

### setState()

sets values/states of controls 
parameter:

- state - (object) a hash of *key:value* pairs, where key is the ID of a control and value is a new value/state of the control

~~~js
toolbar.setState({
	"search": "Hello",
    "edit": true,
    "align": "right"
});
~~~


### getState()

gets current values/states of controls
returns: 

- state - (object) - an object with IDs of controls and their values/states 

~~~js
var state = toolbar.getState(); // -> {"search":"Hello","edit":true,"align":"right"} 
~~~



### disable()

disables and dims an item of dhtmlxToolbar

parameter:

- ids -  (string,array)  one ID or an array of IDs of items

~~~js
toolbar.disable("save_btn");
// several at a time
toolbar.disable(["cancel_btn","del_btn"]);
~~~
	
### enable()

enables a disabled item of dhtmlxToolbar

parameter:

- ids - (string,array)   one ID or an array of IDs of items

~~~js
toolbar.enable("save_btn");
// several at a time
toolbar.enable(["cancel_btn","del_btn"]);
~~~

### show()

shows an item of dhtmlxToolbar

parameter:

- ids -  (string,array)   one ID or an array of IDs of items

~~~js
toolbar.show("save_btn");
// several at a time
toolbar.show(["cancel_btn","del_btn"]);
~~~
	
### hide()

hides an item of dhtmlxToolbar

parameter:

- ids -  (string,array)    one ID or an array of IDs of items

~~~js
toolbar.hide("save_btn");
// several at a time
toolbar.hide(["cancel_btn","del_btn"]);
~~~


Events
------------------

### InputCreated

fires when a new input is added 

parameters:

- **id** - (*string*) the ID of a new input
- **el** -	(*HTMLElement*)	a newly created input

~~~js
toolbar.events.on("InputCreated", function(id, el){
	console.log(id);
});
~~~

### Click

short:fires after a click on a control

parameter:

- id  -  (string)  	the ID of a clicked control
- e -	(Event)  a native event object

~~~js
toolbar.events.on("Click", function(id,e){
	console.log(id)
});
~~~

### InputBlur

fires when a control is blurred

parameter:

- **id** - (*string*) the ID of a new control

~~~js
toolbar.events.on("InputBlur", function(id){
	console.log(id);
});
~~~


### InputFocus

fires when a control is focused

parameter:

- **id** - (*string*) the ID of a new control

~~~js
toolbar.events.on("InputFocus", function(id){
	console.log(id);
});
~~~

### OpenMenu

fires on expanding a menu control 

~~~js
toolbar.events.on("OpenMenu", function(){
	// your code here
});
~~~


Properties
--------------

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

var toolbar = new dhx.Toolbar({
    css:"my_first_class my_second_class"
});
~~~


@todo:
check, add links to samples and guides

