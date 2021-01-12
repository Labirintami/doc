dhtmlxRibbon API
================

## Constructor

~~~js
var ribbon = new dhx.Ribbon("ribbon",{
    // config options
});
~~~

Parameters:

- the HTML container of dhtmlxRibbon
- configuration settings (check below)

## Methods

### setState()

sets values and states of input controls and two-state buttons

parameter:

- **state** - (*object*)  a hash of control IDs and new values/states

~~~js
ribbon.setState({"check":true, "inp":"Name" });
~~~

### getState()

gets current values and states of input controls and two-state buttons

returns:

- **state** - (*object*) with control IDs and their values/states 

~~~js
ribbon.getState();  /* {check:true,inp:"Name"} */
~~~

### paint()

refreshes Ribbon

~~~js
ribbon.paint();
~~~

### disable()

disables and dims an item of Ribbon

parameter:

- **ids** -  (*string|array*)    one ID or an array of IDs of controls

~~~js
ribbon.disable("save_btn");
// several at a time
ribbon.disable(["cancel_btn","del_btn"]);
~~~
	
### enable()

enables an item of Ribbon

parameter:

- **ids** -  (*string|array*)    one ID or an array of IDs of items

~~~js
ribbon.enable("save_btn");
// several at a time
ribbon.enable(["cancel_btn","del_btn"]);
~~~

### show()

shows an item of ribbon

parameter:

- **ids** -  (*string|array*)   one ID or an array of IDs of items

~~~js
ribbon.show("save_btn");
// several at a time
ribbon.show(["cancel_btn","del_btn"]);
~~~
	
### hide()

hides an item of Ribbon

parameter:

- **ids** -  (*string|array*)  one ID or an array of IDs of items

~~~js
ribbon.hide("save_btn");
// several at a time
ribbon.hide(["cancel_btn","del_btn"]);
~~~

### destructor()

removes a component instance and releases occupied resources

~~~js
ribbon.destructor();
~~~

## Events

### InputCreated

fires when a new input is added 

parameters:

- **id** - (*string*) the ID of a new input
- **el** -	(*HTMLElement*)	a newly created input

~~~js
ribbon.events.on("InputCreated", function(id, el){
	console.log(id);
});
~~~

### Click

fires after a click on a control

parameter:

- **id** - (*string*) the ID of a clicked control
- **e** - (*Event*) a native event object

~~~js
ribbon.events.on("Click", function(id,e){
	console.log(id,e);
});
~~~

### InputBlur

fires when a control is blurred

parameter:

- **id** - (*string*) the ID of a new control

~~~js
ribbon.events.on("InputBlur", function(id){
	console.log(id);
});
~~~


### InputFocus

fires when a control is focused

parameter:

- **id** - (*string*) the ID of a new control

~~~js
ribbon.events.on("InputFocus", function(id){
	console.log(id);
});
~~~


### OpenMenu

fires on expanding a menu control 

~~~js
ribbon.events.on("OpenMenu", function(){
	// your code here
});
~~~


Properties
-----------------

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

var ribbon = new dhx.Ribbon({
    css:"my_first_class my_second_class"
});
~~~



@todo:
create the api structure
