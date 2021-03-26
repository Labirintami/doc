---
sidebar_label: TimePicker
title: TimePicker
description: 
---          

A control that allows a user to select time value either by moving handles along track bars or by entering hour and minutes values directly into related inputs.

![TimePicker](../assets/form/form_timepicker.png)

{{editor    https://snippet.dhtmlx.com/ikyyekxq	Form. All DhxForm Inputs}}

{{editor	https://snippet.dhtmlx.com/4k3o8p7b	Form. TimePicker}}

Adding TimePicker 
------------

You can easily add a TimePicker control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
	rows: [
    	{
			type: "timepicker",
            name: "timepicker",
            label: "time",
            labelWidth: "50px",
			timeFormat: 12,
    		valueFormat: "timeObject",
            value: [6,20,"AM"]
		}
    ]
});
~~~
``` todotw перенести это на страницу Properties в API Timepicker ```

### Properties

You can provide the following attributes in the configuration object of a TimePicker:

- `type` - (string) the type of a control, set it to "timepicker"
- `id` - (string) the id of a control, auto-generated if not set
- `value` - (Date|number|string|array|object) the initial value of the TimePicker control:
    - The value of a timepicker set as an array should have the following elements:
        - the hour value
        - the minutes value
        - the "AM/PM" identifier for 12-hour format as a string
    -  The value set as an object:
        - for the 24-hour format contains key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
        - or the 12-hour format contains key:value pairs for for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}
    -  The date set as a number is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the `getTime()` method of the `Date` object.
- `valueFormat` - (string) defines the format of the value to be applied when working with the events of the timepicker control: "string", "timeObject"
- `validation` - (function) the validation function, takes as a parameter the value to validate and returns true/false to indicate the result of validation
- `icon` - (string) the name of an icon from the used icon font
- `placeholder` - (string) a tip for the input
- `editable` - (boolean) allows a user to enter the value of the control manually
- `width` - (string|number|"content") the width of a control
- `height` - (string|number|"content") the height of a control
- `padding` - (string|number) sets padding between a cell and a border of the TimePicker control
- `css` - (string) adds style classes to a control
- `disabled` - (boolean) defines whether a control is enabled (false) or disabled (true)
- `hidden` - (boolean) defines whether a control is hidden
- `label` - (string) specifies a label for a control
- `labelWidth` - (string|number) sets the width of the label of a control
- `hiddenLabel` - (boolean) invisible label that will be used to identify the input on the server side
- `labelPosition` - (string) defines the position of a label: "left"|"top"
- `name` - (string) the name of a control
- `required` - (boolean) defines whether a control is required
- `helpMessage` - (string) adds a help message to a control
- `preMessage` - (string) a message that contains instructions for interacting with the control
- `successMessage` - (string) a message that appears in case of successful validation of the control value
- `errorMessage` - (string) a message that appears in case of error during validation of the control value
- `timeFormat` - (number) defines what clock format is activated: the 12-hour or 24-hour one. Set the property to 12 or 24 (default) value, correspondingly
- `controls` - (boolean) defines whether a timepicker is equipped with the Close and Save buttons


Working with TimePicker
----------------------

You can manipulate a TimePicker control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("timepicker").getValue();
~~~

### List of the control methods:

``` todotw наверно просто якорной ссылкой сослаться на методы в API ```
``` You can find a list of widget methods here. ```

{{api
- form/api/timepicker/timepicker_clear_method.md - clears the value of a TimePicker control
- form/api/timepicker/timepicker_clearvalidate_method.md - clears validation of a TimePicker control
- form/api/timepicker/timepicker_disable_method.md - disables a TimePicker control on a page
- form/api/timepicker/timepicker_enable_method.md - enables a disabled TimePicker control
- form/api/timepicker/timepicker_focus_method.md - sets focus to a control
- form/api/timepicker/timepicker_getproperties_method.md - returns an object with the available configuration attributes of the control
- form/api/timepicker/timepicker_getvalue_method.md - returns the current value of a TimePicker control
- form/api/timepicker/timepicker_getwidget_method.md - returns the dhtmlxTimePicker widget attached to a TimePicker control
- form/api/timepicker/timepicker_hide_method.md - hides a TimePicker control
- form/api/timepicker/timepicker_isdisabled_method.md - checks whether a TimePicker control is disabled
- form/api/timepicker/timepicker_isvisible_method.md - checks whether a TimePicker control is visible on the page
- form/api/timepicker/timepicker_setproperties_method.md - allows changing available configuration attributes of the control dynamically
- form/api/timepicker/timepicker_setvalue_method.md - sets the value for a TimePicker control
- form/api/timepicker/timepicker_show_method.md - shows a TimePicker control on the page
- form/api/timepicker/timepicker_validate_method.md - validates a TimePicker control
}}

### List of the control events:

``` todotw наверно просто якорной ссылкой сослаться на события в API ```

{{api
- form/api/timepicker/timepicker_afterchangeproperties_event.md - fires after configuration attributes of the control have been changed dynamically
- form/api/timepicker/timepicker_afterhide_event.md - fires after a control is hidden
- form/api/timepicker/timepicker_aftershow_event.md - fires after a control is shown
- form/api/timepicker/timepicker_aftervalidate_event.md - fires after the control value is validated
- form/api/timepicker/timepicker_beforechangeproperties_event.md - fires before configuration attributes of the control are changed dynamically
- form/api/timepicker/timepicker_beforehide_event.md - fires before a control is hidden
- form/api/timepicker/timepicker_beforeshow_event.md - fires before a control is shown
- form/api/timepicker/timepicker_beforevalidate_event.md - fires before the control value is validated
- form/api/timepicker/timepicker_change_event.md - fires on changing the value of a control
- form/api/timepicker/timepicker_input_event.md - fires when a user enters the value of a control in the input manually

}}

### Working with the dhtmlxTimePicker widget

There is a possibility to use methods of dhtmlxTimePicker via the **getWidget()** method of a TimePicker control.

For example, you can set value for a TimePicker control. To do this, you need to get the widget attached to the TimePicker control and then use the [setValue()](timepicker/api/timepicker_setvalue_method.md) method of this widget.

~~~js
var timepicker = form.getItem("timepicker").getWidget();  // -> TimePicker
timepicker.setValue("00:39"); //set the value as a string
~~~

{{editor	https://snippet.dhtmlx.com/0aqkdsi7	Form. Get Widget Of Control}}

