dhtmlxMenu API
================

Constructor
--------------

~~~js
var menu = new dhx.Menu("menu", {
    navigationType:"click"
});
~~~

Parameters:

- the HTML container of dhtmlxMenu
- configuration settings (check below)

Methods
-----------

### paint()

refreshes the menu

~~~js
menu.paint();
~~~

### disable()

disables and dims an item of dhtmlxMenu

parameter:

- **ids**  - (*string|array*) one ID or an array of IDs of items

~~~js
menu.disable("save");
// several at a time
menu.disable(["cancel","del"]);
~~~
	
### enable()

enables an item of dhtmlxMenu

parameter:

- **ids** - (*string|array*) one ID or an array of IDs of items

~~~js
menu.enable("save");
// several at a time
menu.enable(["cancel","del"]);
~~~

### show()

shows an item of dhtmlxMenu

parameter:

- **ids** - (*string|array*) one ID or an array of IDs of items

~~~js
menu.show("save");
// several at a time
menu.show(["cancel","del"]);
~~~
	
### hide()

hides an item of dhtmlxMenu

parameter:

- **ids** - (*string|array*) one ID or an array of IDs of items

~~~js
menu.hide("save");
// several at a time
menu.hide(["cancel","del"]);
~~~


### showAt() (method of dhtmlxContextMenu)

shows a context menu

parameters:

- **element**  - (*HTMLElement|MouseEvent|string*) a master HTML element or the mouse event that will trigger the context menu
- **direction** - (*string*) a place where the context menu will be shown relative to the **element**

~~~js
var cmenu = new dhx.ContextMenu();
document.querySelector('#menu').oncontextmenu = function(e) {
	e.preventDefault();
    cmenu.showAt("menu", 'right');    
}
~~~

Read details in the article menu/creating_context_menu.md.

Events
-----------

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


### Сlick

fires after a click on a button or a menu option

parameters:

- **id** - (*string*)  the ID of a clicked control
- **e** - (*Event*)  a native event object

~~~js
menu.events.on("Click", function(id,e){
	console.log(id);
});
~~~


### InputBlur

fires when a control is blurred

parameter:

- **id** - (*string*) the ID of a new control

~~~js
menu.events.on("InputBlur", function(id){
	console.log(id);
});
~~~


### InputFocus

fires when a control is focused

parameter:

- **id** - (*string*) the ID of a new control

~~~js
menu.events.on("InputFocus", function(id){
	console.log(id);
});
~~~



### OpenMenu

fires on expanding a menu item

parameter:

- **id** - (*string*)  the ID of an opened menu item

~~~js
menu.events.on("OpenMenu", function(id){
	console.log(id);
});
~~~

Properties
--------------

### navigationType

defines the action that opens menu options: "click" or "pointer" (default)

~~~js
menu.config.navigationType = "click";
menu.paint();
~~~

Check details in the section menu/how_to_start.md#initializemenu.

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

var menu = new dhx.Menu({
    css:"my_first_class my_second_class"
});
~~~




@todo:
add links to samples and guides

