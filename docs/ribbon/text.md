Text Control
=============

This is an item with a text label.

<img src="ribbon/text.png"/>

## Adding Text Control

A Text Control can be added to the ribbon with the help of the **add()** method of TreeCollection:

~~~js
myribbon.data.add({
    type: "text",
	value: "APP NAME"
});
~~~

{{sample
dhtmlxRibbon/samples/03_ribbon/01_init.html
}}

## Attributes

You can provide the following attributes in the configuration object of Text:

- **id** (string|number) - optional, the ID of the control;
- **type** (string) - always "text";
- **value** (string) - optional, the text;
- **$hidden** (boolean) - optional, hides the control;
- **css** (string) - optional, adds a custom CSS class.

## Showing/Hiding Text

Text can be hidden and shown:

~~~js
myRibbon.show(id);
myRibbon.hide(id);
~~~
