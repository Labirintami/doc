---
sidebar_label: ComboBox API 
title: ComboBox API 
---      

```tododelete``` 

Constructor
---------------

~~~js
var combo = new dhx.Combobox("combo_container",{
    listHeight: 220,
	cellHeight: 30
});
~~~

Parameters:

- the HTML container of dhtmlxComboBox
- configuration settings (check below)


Methods
-----------

### disable

disables ComboBox on a page

~~~js
combo.disable();
~~~

### enable

enables a disabled ComboBox

~~~js
combo.enable();
~~~

### paint

repaints a Combo Box

~~~js
combo.config.disabled = true;
// repaints Combo with a new config
combo.paint();
~~~

### clear

clears the value set in the Combo Box

~~~js
combo.clear();
~~~

### focus

sets focus in the input without opening a popup with options

~~~js
combo.focus();
~~~

### setState

- sets the state of ComboBox, used for validation
- param:
    - state    string      the state of Combo Box:"default"|"error"|"success"

~~~js
combo.setState("success");
~~~
 
Depending on the set state the input of Combo Box gets a colored border: green for "success", red for "error".


<h3 id="getvalue"> getValue </h3>

gets id(s) of items from data collection selected in ComboBox

param:
  
- asArray   boolean   true, to return ids as an array of strings

returns:

- values     string|array    id(s) of options selected in Combo Box

~~~js
var id = combo.getValue();
// -> "u1556098582074"

// returns ids of selected options as strings
var ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"

// returns ids of selected options as an array of strings
var array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]
~~~


### setValue

selects option(s) in ComboBox

param:
   
- ids     string|array    the ids of items from data collection that should be selected in Combo Box

~~~js
// select one option
combo.setValue(combo.data.getId(1));

// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);
~~~

### destructor

releases occupied resources
:
~~~js
combo.destructor();
~~~

Properties
--------------

### readonly

makes Combo Box readonly

- default: false
- type: boolean 
- example:

~~~js
var combo = new dhx.Combobox("combo_container", { 
    readonly:true
});
~~~
- descr: In this mode it is only possible to select options from the list, without entering words in the input.

### disabled

makes Combo Box disabled

- default: false
- type: boolean 
- example:

~~~js
var combo = new dhx.Combobox("combo_container", { 
    disabled:true
});
~~~

### template

sets a template of displaying options in the popup list

- type: function 
- example:

~~~js
var combo = new dhx.Combobox("combo_container", {
	template: function (item) {
	  return "<div style='display:inline-block'>"
	  +"<img style='width:20px;height:20px;margin-right:10px;' src="+item.src+"></div>" 
	  + item.value + "</div>";
	}
});			
~~~


The **template** function takes as a parameter an item of data collection and should return a string with a template for rendering options in the list.

<h3 id="customfilter">customFilter</h3>

sets a custom function for filtering Combo Box options

- type: function
- example:
~~~js
function mySearch(item, target) {
	// your filtering logic here			
}
var combo = new dhx.Combobox("combo_container", {
	customFilter: mySearch
});
~~~
 
The filtering function takes two parameters:

- item			object			an item of data collection
- target		string			the string to compare to

and should return *true/false* to specify whether an item should be displayed in the filtered list of options.

### multiselection

enables selection of multiple options in ComboBox

- type: boolean
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	multiselection:true
});
~~~

### label

adds a label for ComboBox

- type: string
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	label:"My Combo label"
});
~~~

### labelInline

defines whether a label will be placed in one line with ComboBox

- type: boolean
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	labelInline:true
});
~~~

### labelWidth

sets the width of a label

- type: string
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	labelWidth:100
});
~~~

### placeholder

sets a placeholder in the input of Combo

- type: string
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	placeholder: "Some placeholder"
});
~~~


### selectAllButton

defines whether the Select All button should be shown

- type: boolean
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	// enables multiple selection of options
	multiselection:true,
    // shows the Select All button
	selectAllButton: true
});
~~~

Note that to select several options you need to enable the **multiselection** option.

### showItemsCount

shows the total number of selected options 

- type: boolean|function
- example:
~~~js
var combo = new dhx.Combobox("combo_container", {
	multiselection: true,
	showItemsCount: function (num) {
		return num + (num === 1 ? " item" : " items") + " selected";
	}
});
~~~

As a function takes one parameter:

- count		number		the number of options

and should return a template for displaying a result.

Note that to select several options you need to enable the **multiselection** option.


### cellHeight

sets the height of a cell in the list of options

- type: number
- default: 32
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	cellHeight:50
});
~~~

### listHeight

sets the height of the list of options

- type: number
- default: 224
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	listHeight:50
});
~~~

### virtual

enables dynamic loading of data on scrolling the list of options

- type:boolean;
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	virtual:true
});
~~~


### required

defines whether the field with Combo box is required (for a form)

- type:boolean;
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	label:"My Combo",
	required:true
});
~~~


### hiddenLabel

adds a hidden label for a Combo box input that will be used while sending a form to the server

- type:boolean
- example:
~~~js
var combo = new dhx.Combobox("combo_container",{
	hiddenLabel:true
});
~~~

Events
----------

### Change

fires when a new option is selected

- params:
	- id	string		the id of a newly selected option
- example:
~~~js
combo.events.on("Change", function(id){
	// your logic here
});
~~~

### Open

fires when a list with options is opened

- example:
~~~js
combo.events.on("Open", function(){
	// your logic here
});
~~~

### Close

fires when a list with options is closed

- example:
~~~js
combo.events.on("Close", function(){
	// your logic here
});
~~~

	

