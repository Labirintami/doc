
---
sidebar_label: ColorPicker API 
title: ColorPicker API 
---          

Constructor
---------------

``` todo

~~~js
var colorpicker = new dhx.Colorpicker({
	// config options
});
~~~

Parameters:

- optional, the HTML container for dhtmlxColorPicker
- optional, an object with configuration settings (check below)

Methods
----------

### setValue

- short: selects a color in ColorPicker
- params:
    - value    string   the code of a color (in the Hex format) to select 
- example:

~~~js
colorpicker.setValue("#BDF0E9");
~~~

- relatedapi: getValue


### getValue

- short: returns the code of a selected color
- returns: 
	 - value    string   the code of a selected color in the Hex format
- example:
~~~js
colorpicker.setValue("#BDF0E9");

colorpicker.getValue();
// -> "#BDF0E9"
~~~
- relatedapi: setValue

### setCustomColors

- short: sets custom colors that will be displayed at the bottom of the palette
- params:
    - customColors    array    an array with custom colors 
- example:
~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);
~~~
- relatedapi: getCustomColors
- relatedsample: 
<br>{{sample  colorpicker/03_usage/01_set_custom_colors.html}}


### getCustomColors

- short: returns an array with selected custom colors
- returns: 
	- customColors    array    an array with custom colors 
- example:
~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);

colorpicker.getCustomColors();
// -> ["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]
~~~
- relatedapi: setCustomColors


### setView

- short: shows colopicker either in the "palette" or in the "picker" view
- params:
    - view    string   the view to show: "palette" or "picker"
- example:
~~~js
colorpicker.setView(view);
~~~
- relatedapi: getView
<br>{{sample  colorpicker/03_usage/02_set_view.html}}

### getView

- short: returns the currently set view of the colorpicker
- returns: 
	 - view    string   the currently set view: "palette" or "picker"
- example:
~~~js
colorpicker.setView(view);

colorpicker.getView();
// -> "palette"
~~~
- relatedapi: setView


Properties
--------------

### css

- short: adds style classes to ColorPicker
- type: string
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
 
var colorpicker = new dhx.Colorpicker({
    css:"my_first_class my_second_class"
});
~~~

### customColors (changed)

- short: shows a section for custom colors in the bottom part of the ColorPicker
- type: boolean
- default: true
- example:
~~~js
var colorpicker = new dhx.Colorpicker({
    customColors:false
});
~~~
- relatedsample:



### palette

- short: contains arrays with colors you want to be shown in a colorpicker
- type: array 
- example:
~~~js
var colorpicker = new dhx.Colorpicker("colorpicker", {
	grayShades: false,
	palette: [
    	["#ffffc0", "#ffff9c", "#ecd078", "#a59154", "#5e5330"],
    	["#ff916b", "#ff7657", "#d95b43", "#973f2e", "#56241a"],
    	["#ff4169", "#f93555", "#c02942", "#861c2e", "#4c101a"],
    	["#863958", "#6d2e47", "#542437", "#3a1926", "#210e16"],
    	["#84bec3", "#6b9a9e", "#53777a", "#3a5355", "#212f30"]
	]
});
~~~
- relatedsample: 
<br>{{sample   colorpicker/02_configuration/02_custom_palette_colors.html}}
- descr:
This is the default array of colors of the ColorPicker

~~~js
var palette = [
	["#D4DAE4","#B0B8CD","#949DB1","#727A8C","#5E6677","#3F4757","#1D2534"],
	["#FFCDD2","#FE9998","#F35C4E","#E94633","#D73C2D","#CA3626","#BB2B1A"],
	["#F9E6AD","#F4D679","#EDB90F","#EAA100","#EA8F00","#EA7E00","#EA5D00"],
	["#BCE4CE","#90D2AF","#33B579","#36955F","#247346","#1D5B38","#17492D"],
	["#BDF0E9","#92E7DC","#02D7C5","#11B3A5","#018B80","#026B60","#024F43"],
	["#B3E5FC","#81D4FA","#29B6F6","#039BE5","#0288D1","#0277BD","#01579B"],
	["#AEC1FF","#88A3F9","#5874CD","#2349AE","#163FA2","#083596","#002381"],
	["#C5C0DA","#9F97C1","#7E6BAD","#584A8F","#4F4083","#473776","#3A265F"],
	["#D6BDCC","#C492AC","#A9537C","#963A64","#81355A","#6E3051","#4C2640"],
	["#D2C5C1","#B4A09A","#826358","#624339","#5D4037","#4E342E","#3E2723"]
];
~~~


###grayShades 

- short: defines whether the section with gray shades is displayed in the palette
- type:boolean
- example:
~~~js
var colorpicker = new dhx.Colorpicker("colorpicker",{
	grayShades: false
});
~~~
- relatedsample:
<br>{{sample   colorpicker/02_configuration/03_gray_shades.html}}


### pickerOnly 

- short: defines whether a colorpicker can be shown in both palette and picker modes, or only the picker mode is shown 
- type: boolean
- example:
~~~js
var colorpicker = new dhx.Colorpicker("colorpicker",{
	pickerOnly: true
});
~~~
- relatedsample:
<br>{{sample   colorpicker/02_configuration/04_picker_only.html}}

### customColorsList 

- short: sets an array with custom colors
- type: array
- example:
~~~js
var colorpicker = new dhx.Colorpicker("colorpicker", {
	customColorsList: ["#1d2de7", "#ab31ff", "#a3fa76"]
});
~~~
- relatedsample:
<br>

Events
-------------------

### ColorChange

- short: fires on changing selected color in ColorPicker
- params:
    - color    string         the Hex code of a newly selected color
- example:
~~~js
colorpicker.events.on("ColorChange",function(color){
	// your logic here
});
~~~

### SelectClick 

- short: fires on clicking the "Select" button
- example:
~~~js
colorpicker.events.on("SelectClick",function(){
	// your logic here
});
~~~

### CancelClick

- short: fires on clicking the "Cancel" button
- example:
~~~js
colorpicker.events.on("CancelClick",function(){
	// your logic here
});
~~~

### ViewChange 

- short: fires on changing the view of ColorPicker
- params:
    - view     string         "palette" or "picker"
- example:
~~~js
colorpicker.events.on("ViewChange ",function(view){
	// your logic here
});
~~~


@todo:
- don't remove, constructor will be used for refs object 

``` todo