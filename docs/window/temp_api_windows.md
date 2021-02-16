---
sidebar_label: Window API 
title: 
---          

Constructor
---------------

~~~js
var dhxWindow = new dhx.Window({
    movable: true,
	resizable: true,
	closable: true,
	minWidth: 120,
	minHeight: 120
});
dhxWindow.show();
~~~

Parameters:

- optional, an object with configuration settings (check below)

Objects
------------

- config
- events
- header
- footer


Methods
-----------

### fullScreen

- short: enters the full screen mode
- example:

~~~js
dhxWindow.fullScreen();
~~~

{{sample   window/03_usage/02_fullscreen.html}}

### setSize

- short: sets the size of the window
- params:
    - size    object      an object with the size attributes
- example:

~~~js
dhxWindow.setSize({
    left:20,
    top:20,
    width:250,
    height:250
});
dhxWindow.show();
~~~

- descr:
The attributes of the **size** object are:
    - left - the left margin
    - top - the top margin
    - width - the width of the window
    - height - the height of the window
    
{{sample 	window/03_usage/03_set_size.html}}    
    
### show

- short: shows a window on a page
- params:
    * left  number   optional, the left margin
    * top   number   optional, the top margin
- example:

~~~js
dhxWindow.show();

// showing a window at a specified position
dhxWindow.show("550", "230");
~~~
- relatedapi: hide

{{sample  	window/03_usage/01_show_hide.html}}

### hide

- short: hides a window
- example:

~~~js
dhxWindow.hide();
~~~
- relatedapi:show

{{sample  	window/03_usage/01_show_hide.html}}

### attachHTML

- short: adds an HTML content into a dhtmlxWindow
- params: 
    - content   string   an HTML content to be added into a window
- example:

~~~js
var dhxWindow = new dhx.Window({title: "Window"});
var html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();
~~~

{{sample 	window/03_usage/05_attach_html.html}}

### attachComponents

- short: attaches a DHTMLX component to a dhtmlxWindow
- params:
	- name 			string		the name of a component
    * config		object	    optional, the configuration settings of a component	
- example:

~~~js
dhxWindow.attachComponents("richtext",{mode: "document"});
dhxWindow.show();
~~~

{{sample 	window/03_usage/04_attach_components.html}}

### paint

- short: repaints a window on a page
- example:
~~~js
dhxWindow.paint();
~~~

###destructor

- short: removes a window instance and releases occupied resources
- example:
~~~js
dhxWindow.destructor();
~~~


Properties
---------------

### viewportOverflow

- short: defines whether a window can go beyond borders of a browser
- type: boolean
- default: false
- example:

~~~js
var dhxWindow = new dhx.Window({
    viewportOverflow:true
});
dhxWindow.show();
~~~

{{sample   window/02_configuration/05_viewport_overflow.html}}

### css

- short: adds style classes for the component
- type:string
- example:
~~~js
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var dhxWindow = new dhx.Window({
    title: "Window", 
    css:"my_first_class my_second_class"
});
dhxWindow.show();
~~~



### html

- short: sets an HTML content into a window on initialization
- type: string
- example: 
~~~js
var dhxWindow = new dhx.Window({
	html:"<h1>Header</h1><p>paragraph</p>"
});
dhxWindow.show();
~~~

### title

- short: adds a header to a window
- type: string
- example:

~~~js
var dhxWindow = new dhx.Window({
    title: "DHX Window Sample"
});
dhxWindow.show();
~~~

{{sample    window/01_init/01_basic.html}}

### footer

- short: adds a footer to a window
- type: boolean
- example:

~~~js
var dhxWindow = new dhx.Window({
    footer: true
});
dhxWindow.show();
~~~

{{sample   window/02_configuration/06_footer.html}}

- descr:
By default a footer is initialized with no controls. To add a control into the footer, follow the instructions given in the article window/customization.md.


### resizable

- short: defines whether a window can be resized
- type: boolean
- default: false
- example:

~~~js
var dhxWindow = new dhx.Window({
    resizable:true
});
dhxWindow.show();
~~~

{{sample   window/02_configuration/04_resizable.html}}

### movable

- short: defines whether a window is movable
- type: boolean
- default: false
- example:

~~~js
var dhxWindow = new dhx.Window({
    movable:true
});
dhxWindow.show();
~~~

{{sample   window/02_configuration/02_movable.html}}

### modal

- short: defines whether a window is modal
- type: boolean
- default: false
- example:

~~~js
var dhxWindow = new dhx.Window({
    modal:true
});
dhxWindow.show();
~~~
- descr:
A modal window blocks the main browser window when called.

{{sample   window/02_configuration/01_modal.html}}

### closable

- short: defines whether a window can be closed 
- type: boolean
- default: false
- example:

~~~js
var dhxWindow = new dhx.Window({
    closable:true
});
dhxWindow.show();
~~~
- descr: 
A closable window gets the Close icon in the right top corner.

{{sample   window/02_configuration/03_closable.html}}

### width

- short: sets the width of a window
- type: number
- default: 50% of the browser window's width
- example:

~~~js
var dhxWindow = new dhx.Window({
    width:250
});
dhxWindow.show();
~~~

{{sample    window/01_init/01_basic.html}}

### minWidth

- short: sets the minimal width of a window
- type: number
- default: 100
- example:

~~~js
var dhxWindow = new dhx.Window({
    minWidth:170
});
dhxWindow.show();
~~~

### height

- short: sets the height of a window
- type: number
- default: 50% of the browser window's height
- example:

~~~js
var dhxWindow = new dhx.Window({
    height:250
});
dhxWindow.show();
~~~

{{sample    window/01_init/01_basic.html}}

### minHeight

- short: sets the minimal height of a window
- type: number
- default: 100
- example:

~~~js
var dhxWindow = new dhx.Window({
    minHeight:170
});
dhxWindow.show();
~~~


Events
-----------------

### Resize

- short: fires on resizing a window
- params:
    - size     			object    an object with the new size of a window
    - oldSize   		object    an object with the previous size of a window
    - direction    		object    an object that specifies the direction of resizing 
- example:

~~~js
dhxWindow.events.on("Resize", function(size, oldsize, resizeSide) {
    if (types.left && types.right && types.bottom && types.top) {
        restore = oldsize;
    }
});
~~~

{{sample    window/05_events/01_events.html}}

- descr:
Examples of incoming parameters are:
	- size: {"width":369,"height":316,"left":668,"top":304}
	- oldSize:{"left":299,"top":272,"height":348,"width":415}
	- direction:{"top":true,"right":true}


### HeaderDoubleClick

- short:fires on double clicking the header of a window
- example:

~~~js
dhxWindow.events.on("HeaderDoubleclick", function() {
   if (toFull) {
      w.fullScreen();
   } else {
      w.setSize(restore);
   }
   toFull = !toFull;
});
~~~

{{sample    window/05_events/01_events.html}}

### Move

- short: fires on moving a window
- params:
    - left   number   the left coordinate of a new position
    - top	 number   the top coordinate of a new position  
- example:

~~~js
dhxWindow.events.on("Move", function(left,top){
    console.log("The window is moved to "+left,top)
}); 
~~~

{{sample    window/05_events/01_events.html}}


### AfterShow

- short: fires after a window is shown  
- example:

~~~js
dhxWindow.events.on("AfterShow", function(){
    console.log("A window is shown");
}); 
~~~

{{sample    window/05_events/01_events.html}}

### AfterHide

- short: fires after a window is hidden  
- example:

~~~js
dhxWindow.events.on("AfterHide", function(){
    console.log("A window is hidden");
}); 
~~~

{{sample    window/05_events/01_events.html}}

### BeforeShow

- short: fires before a window is shown  
- example:

~~~js
dhxWindow.events.on("BeforeShow", function(){
    console.log("A window is shown");
}); 
~~~

{{sample    window/05_events/01_events.html}}

- descr: The event is blockable. You can return false to prevent showing of a window.

### BeforeHide

- short: fires before a window is hidden  
- example:

~~~js
dhxWindow.events.on("BeforeHide", function(){
    console.log("A window will be hidden");
}); 
~~~

{{sample    window/05_events/01_events.html}}

- descr: The event is blockable. You can return false to prevent hiding of a window.

@todo: 
don't remove!