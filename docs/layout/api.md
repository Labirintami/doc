dhtmlxLayout API
---
sidebar_label: 
title: 
---          

``` todo

Constructor
----------------

~~~js
var layout = new dhx.Layout("layout_container", {
	cols: [
		{
			header: "Column 1"
		},
		{
			header: "Column 2",
			cols: [
				{
					header:"Left cols"
				},
				{
					header:"Center cols",
				    cols: [
						{ header: "Sub Block Header cols 1" },
						{ header: "Sub Block Header cols 2" },
						{ header: "Sub Block Header cols 3" }
					]
                }							
			]
		}
	]
});
~~~

Parameters:

- the HTML container of dhtmlxLayout
- configuration settings (check below)

Methods (Layout)
-----------

### addCell

- short: adds a new cell into a layout
- params:
	- config	object		the config object of a cell
    - index		number		the position to add a cell into
- example:

~~~js
layout.addCell({
	header:"The header of a new cell"
});
~~~

{{note Add cell attributes here or the link to the list}}

### cell

- short: returns the config object of a cell
- params:
	- id 	string		the id of a cell
- example:

~~~js
layout.cell(id);
~~~

### removeCell

- short: removes a specified cell
- params:
	- id 	string		the id of a cell
- example:

~~~js
layout.removeCell(id);
~~~


Methods (Cell)
---------------

### attach

- short: should attach any dhx component into a Layout cell?
- params:
	- name   		string? 		the name of a component
    - config		object			the config object of the attached component
- example:

~~~js
layout.cell(id).attach(name,config);
~~~


### isVisible

- short: checks whether a cell is visible
- returns:
	- result	boolean		true, if the cell is visible
- example:

~~~js
layout.cell("1").isVisible(); // -> true|false
~~~


### getParent

- short: returns the parent of a cell
- returns:
	- config	object		the config object of the parent of a cell
- example:

~~~js
layout.cell("1").getParent();
~~~
	
### show

- short: shows a hidden cell
- params:
	- id 	string		the id of a cell
- example:

~~~js
layout.cell("1").show();
~~~
	
### hide

- short: hides a specified cell
- params:
	- id 	string		the id of a cell
- example:

~~~js
layout.cell("1").hide();
~~~

Properties (Cell)
----------------

### id

- short: the id of a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
		cols: [
			{ header: "Cell header", id:"1"}
        ]
	}
);
~~~

### html

- short: sets HTML content for a cell
- type:string 
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", html: "Hello world"}
    ]
});
~~~

### hidden 

- short: defines whether a cell is hidden
- type:boolean 
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", hidden:true}
    ]
});
~~~


### header

- short: adds a header with text for a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header"}
    ]
});
~~~

### headerIcon 

- short: an icon used in the header of a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header:"Cell header", headerIcon:"/icon.png"}
    ]
});
~~~


### headerImage 

- short: an image used in the header of a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", headerImage:"/img.png"}
    ]
});
~~~


### width

- short: sets the width of a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", width:"300px"}
    ]
});
~~~

### height

- short: sets the height of a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", height:"300px"}
    ]
});
~~~


### css 

- short: the name of a CSS class applied to a cell
- type:string
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", css:"meClass"}
    ]
});
~~~


### collapsable 

- short: defines whether a cell can be collapsed 
- type:boolean
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", collapsable:true}
    ]
});
~~~


### resizable 

- short: defines whether a cell can be resized
- type:boolean
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", resizable:true}
    ]
});
~~~

### collapsed

- short: defines whether a cell is collapsed 
- type:boolean
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", collapsed:true}
    ]
});
~~~


### isAccordion 

- short: defines whether a layout (cell) works as an accordion
- type:boolean
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", isAccordion:true}
    ]
});
~~~


Properties (Layout)
-------------------

### rows 

- short: an array of rows objects
- type:array
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
	header: "Main Block Header",
	rows: [
		{
			cols: [
				{
					header: "Block 1",
					width: "40%"								
				},
				{
					header: "Block 2",					
					width: "60%"
				}
			]
		},
		{
			rows: [
				{
					header: "Block 3",
					height: "200px"								
				},
				{
					header: "Block 4",								
					height: "300px"
				}
			]
		}
	]
});
~~~


### cols 

- short: an array of columns objects
- type:array
- example:

~~~js
var layout = new dhx.Layout("layout_container", {
	header: "Main Block Header",
	cols: [
		{
			header: "Sub Block Header row"
		},
		{
			header: "Sub Block Header row",
			cols: [
				{
					header:"Left cols"
				},
				{
					header:"Center cols",
				    cols: [
						{ header: "Sub Block Header cols 1" },
						{ header: "Sub Block Header cols 2" },
						{ header: "Sub Block Header cols 3" }
					]
                },
							
			]
		}
	]
});
~~~

### views 

- short: sets an array of views objects 
- type: array
- example:

~~~js
var tabbar = new dhx.Tabbar("tabbar_container",{
	views:[
    	{ tab: "left", css:"panel flex"},
    	{ tab: "west", css:"panel flex"},
    	{ tab: "east", css:"panel flex"},
    	{ tab: "right", css:"panel flex"}
	]
});
~~~

### activeView  

- short: sets the currently active view
- type:string
- example:

~~~js
var tabbar = new dhx.Tabbar("tabbar", {activeView:"3",
	mode: "top",
	views:[
		{ id:"1", tab: "leftside", css:"panel flex", header:"Left"},
		{ id:"2", tab: "west", css:"panel flex", header:"West"},
		{ id:"3", tab: "east", css:"panel flex", header:"East"},
		{ id:"4", tab: "right", css:"panel flex", header:"Right" }
	]
});
~~~


@todo:
- check and improve<br>
- should configs of a cell be duplicated for layout?<br>
- "full" cell config?<br>
- isAccordion?<br>
- attach()?<br>

``` todo