
---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
---          

``` todo

6.5 -> 7.0
-------------------

1) Starting with 7.0, to access the Form control you can use either the name of the control or its id (if the name attribute is not defined in the config of the control). In previous versions it was possible to access the control only by id.

2) The following events of Form have been deprecated: buttonClick, validationFail. These methods are still available but not recommended for use.

Instead of the **buttonClick** event, use the new **click** event:

~~~js
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});
~~~

Instead of the **validationFail** event, use the new **afterValidate**, **beforeValidate** events:

~~~js
form.events.on("AfterValidate", function(name, value, isValid) {
    console.log("AfterValidate", name, value, isValid); 
});

form.events.on("BeforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});
~~~

3) The **readonly** attribute of the Combo control of Form have been deprecated. Starting from v7.0, use **readOnly** instead.

6.3 -> 6.4 
---------------

In v6.4 some properties of widgets of the Suite library have been renamed. Therefore, the properties of Form controls that are based on these widgets have also been renamed.

<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.type_info {
		text-align: center;
        background-color: #E3F6FF;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>

### All Form controls

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>editing</td><td>editable</td></tr>
<tr><td>help</td><td>helpMessage</td></tr>
<tr><td>celCss</td><td>css</td></tr>
</table>

### Combo control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>cellHeight</td><td>itemHeight</td></tr>
</table>

### DatePicker control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>block</td><td>disabledDates</td></tr>
<tr><td>view</td><td>mode</td></tr>
</table>

### Slider control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>thumbLabel</td><td>tooltip</td></tr>
</table>

### TimePicker control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>action</td><td>controls</td></tr>
</table>

``` todo
