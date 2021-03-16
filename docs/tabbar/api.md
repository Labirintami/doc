---
sidebar_label: Tabbar API
title: Tabbar API
---  

```tododelete не используется?``` 

Constructor
----------------

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "bottom"
});
~~~

Parameters:

- the HTML container of dhtmlxTabbar
- configuration settings (check below)

Methods
------

### addCell

adds a new tab into a tabbar

params:

- view  -  (object)  an object of a tab. It may include the following properties:
	- tab - the name of a tab
    - tabCss - the name of the CSS class used for a tab
	- css - the name of the CSS class used for a cell
	- header - the header of a cell	
- index -   (number)  the position to add a tab into

~~~js
tabbar.addCell({tab: "tab-" + nextTab++, css:"panel flex"}, 0);
~~~

### removeCell 

removes a tab from a tabbar

params:

- id      string         the id of a cell to remove


~~~js
var id = tabbar.getId(0);
tabbar.removeCell(id);
~~~

### getId

returns the id of a tab by its index

params:

- index    number    the position of a tab in the tabbar

~~~js
var id = tabbar.getId(0);
~~~

### setActive

sets an active tab
params:
	
- id	- (string)	the id of a tab

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});
 
tabbar.setActive("2");
~~~

### getActive

gets the id of the active tab

returns:

- id -	(string)	the id of the active tab

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});
 
var active = tabbar.getActive(); // -> "2"
~~~

### destructor

releases occupied resources

~~~js
tabbar.destructor();
~~~


Properties
--------

### mode

specifies the mode of displaying a tabbar

type:string

values: "top"|"bottom"|"left"|"right"

default:"top"


~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "bottom"
});
~~~


### closeButtons

adds close buttons for tabs

type:boolean

default: false


~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    closeButtons:true
});
~~~

### noContent

defines whether tabs contain any content

type:boolean

default: false


~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    noContent:true
});
~~~

### tabWidth

sets the width of a tab

type:number

default:150


~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    tabWidth: 120
});
~~~ 


### tabHeight

sets the height of a tab

type:number

default:45


~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
    tabHeight: 50
});
~~~ 

### views

defines the configuration of tabs

type: array

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
	views:[
		{ tab: "left", css:"panel flex", header:"Left"},
		{ tab: "west", css:"panel flex", header:"West"},
		{ tab: "east", css:"panel flex", header:"East"},
		{ tab: "right", css:"panel flex", header:"Right" }
	]
});
~~~

The views array contains a set of objects that describe configuration of tabs. Each tab object may include the following properties:

- tab - the name of a tab
- tabCss - the name of the CSS class used for a tab
- css - the name of the CSS class used for a cell
- header - the header of a cell	

Events
--------

### Change 

fires on changing an active tab

params:

- activeId  -  (string)    the id of a newly active tab
- prevId   -   (string)    the id of a previously active tab


~~~js
tabbar.events.on("Change", function(activeId, prevId){
	console.log(activeId);
});
~~~

### Close 

fires on closing a tab

params:

- id   -  (string)   the id of a closed tab

~~~js
tabbar.events.on("Close", function(id){
	console.log(id);
});
~~~

@todo:
- add Layout API, since Tabbar inherits it<br/>
- recheck descriptions of configs<br/>

