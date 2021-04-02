---
sidebar_label: Text
title: Text
---          

A control for adding some text.

![Text](../assets/form/form_text.png)

{{editor    https://snippet.dhtmlx.com/ikyyekxq	Form. All DhxForm Inputs}}

## Adding Text

You can easily add a Text control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
    rows: [
		{
			type: "text",
            name: "text",
            label: "text",						
			value: "I am a nice text"
		}
    ]
});
~~~

### Properties

[List of the Text properties](form/api/text/api_text_properties.md)

## Working with Text

You can manipulate a Text control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("text").getValue();
~~~

### Methods

[List of the Text methods](form/api/api_overview.md#methods-13)


### Events

[List of the Text events](form/api/api_overview.md#events-13)