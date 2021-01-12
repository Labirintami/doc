dhtmlxSlider API
=================

Constructor
---------------

~~~js
var slider = new dhx.Slider("slider_container",{
    max:0,
    min:100
});
~~~

Parameters:

- the HTML container of dhtmlxSlider
- an object with configuration settings (check below)

Methods
----------

###destructor


releases occupied resources

~~~js
slider.destructor();
~~~

###disable


disables slider
    
~~~js
slider.disable();
~~~



###enable


enables slider
    
~~~js
slider.enable();
~~~


###getValue


returns the current value of the slider 


~~~js
var value = slider.getValue();
~~~
    
returns:

- value - (number,array,string) - the current value of the slider



###setValue

sets a value for the slider

params: 

- value - (number,array,string)   the value to be set for Slider


~~~js
// sets value as a number
slider.setValue(2);

// sets value as an array 
slider.setValue([2]);

// sets value as an array (for the range mode)
slider.setValue([2,10]);

// sets value as a string
slider.setValue("2");

// sets value as a string (for the range mode)
slider.setValue("2,10");
~~~


Properties
----------------

###min

the minimal value of slider

default: 0 (zero)

type: number 


~~~js
var slider = new dhx.Slider("slider_container", { 
    min:2
});
~~~



###max

the maximal value of slider

default: 100

type: number 

~~~js
var slider = new dhx.Slider("slider_container", { 
    max:200
});
~~~


###step

the step the slider thumb will be moved with

default: 1

type:number


~~~js
var slider = new dhx.Slider("slider_container", { 
    step:3
});
~~~

###mode

the direction of the Slider scale 

default: "horizontal"

values: "horizontal", "vertical"

type:string

~~~js
var slider = new dhx.Slider("slider_container", { 
    mode:"vertical"
});
~~~

###thumbLabel

enables prompt messages with ticks values on hovering over the slider thumb

default: true

type:boolean


~~~js
var slider = new dhx.Slider("slider_container", { 
    thumbLabel:false
});
~~~

###range

enables/disables the possibility to select a range of values on the slider

type:boolean

~~~js
var slider = new dhx.Slider("slider_container", { 
    range:true
});
~~~


###value

the value the thumb will be set at on initialization of the slider

type:number

~~~js
var slider = new dhx.Slider("slider_container", { 
    value:20
});
~~~

###inverse

enables/disables the inverse slider mode

type:boolean

~~~js
var slider = new dhx.Slider("slider_container", { 
    inverse:true
});
~~~

###tick

sets the interval of steps for rendering the slider scale

type:number


~~~js
var slider = new dhx.Slider("slider_container", { 
    tick:2
});
~~~

###majorTick

sets interval of rendering numeric values on the slider scale

type:number


~~~js
var slider = new dhx.Slider("slider_container", { 
    majorTick:3
});
~~~


###tickTemplate 

sets a template for rendering values on the scale

type: function

~~~js
var slider = new dhx.Slider("slider_container", { 
    tickTemplate: function(v){
		return v + "°";
	} 
});
~~~

- v is a value of majorTick

###label 

specifies the label of a slider

type: string

~~~js
var slider = new dhx.Slider("slider_container", { 
   label:"Volume" 
});
~~~

###labelInline

defines whether the label of a slider is rendered on the same level with the trackbar or above it

type: boolean

default: false


~~~js
var slider = new dhx.Slider("slider_container", { 
   labelInline:true 
});
~~~

Events
------------

###Change

fires on change of the slider value

params:

- newValue	- (*number*) the new value set for the slider
- oldValue - (*number*) the previous value of the slider
- isRange - (*boolean*) defines, whether the range mode is activated for the slider

~~~js
slider.events.on("Change", function(newValue, oldValue, isRange){
	console.log("The value of a slider has changed to "+slider.getValue());
});
~~~

###MouseDown

fires on pressing the left mouse button over the slider thumb

params:

- e	- (*Event*) the native event object

~~~js
slider.events.on("MouseDown", function(e){
	// your code here
});
~~~

###MouseUp

fires on releasing the left mouse button over the slider thumb 

params: 

- e	- (*Event*) the native event object

~~~js
slider.events.on("MouseUp", function(e){
	// your code here
});
~~~


