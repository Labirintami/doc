---
sidebar_label: RadioGroup
title: RadioGroup
---          

A control intended for creating groups of Radio buttons.

![RadioGroup control](../assets/form/form_radio.png)

{{editor    https://snippet.dhtmlx.com/ikyyekxq	Form. All DhxForm Inputs}}

{{editor	https://snippet.dhtmlx.com/ycp1cbct	Form. Radio Buttons}}

{{editor	https://snippet.dhtmlx.com/1pzybtja	Form. Blocks}}

## Adding RadioGroup

You can easily add a RadioGroup control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {	
	rows: [
    	{
			id: "radiogroup",
            name: "radiogroup",
			type: "radioGroup",
			required: true,
			label: "Radio Group",
			labelWidth: 140,
			labelPosition: "left",
			helpMessage: " Help information",
			value: "1",
			options: {
				rows: [
					{
						type: "radioButton",
						text: "Select 1",
						value: "1",
					},
					{
						type: "radioButton",
						text: "Select 2",
						value: "2"
					},
				]
			}
		}
     ]
});
~~~

### Properties of RadioGroup

[List of the RadioGroup properties](form/api/radiogroup/api_radiogroup_properties.md)

### Properties of RadioButton

[List of the RadioButton properties](form/api/radiogroup/api_radiogroup_properties.md#radiobutton-properties)

## Working with RadioGroup

You can manipulate a RadioGroup control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("radiogroup").getValue();
~~~

### Methods

[List of the RadioGroup methods](form/api/api_overview.md#methods-8)

### Events

[List of the RadioGroup events](form/api/api_overview.md#events-8)