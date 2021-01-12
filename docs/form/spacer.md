
---
sidebar_label: Spacer
title: Spacer
---          

This item takes space on the form and is used for aligning controls.


## Adding Spacer

You can easily add a Spacer control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
    rows: [
        {
  			type: "input",
  			label: "Name",
  			name: "name"
		},
		{
  			type: "spacer",
            name: "spacer"
		},
		{
  			type: "input",
  			label: "Email",
  			name: "email"
		}
    ]
});
~~~

### Attributes

You can provide the following attributes in the configuration object of a Spacer:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "spacer"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>name</b></td>
			<td>(<i>string</i>) the name of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Spacer control</td>
		</tr>	
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>

Working with Spacer
----------------------

You can manipulate a Spacer control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can hide the control:

~~~js
var value = form.getItem("spacer").hide();
~~~

###List of the control methods:

{{api
- form/api/spacer/spacer_getproperties_method.md - returns an object with the available configuration attributes of the control
- form/api/spacer/spacer_hide_method.md - hides a Spacer control
- form/api/spacer/spacer_isvisible_method.md - checks whether a Spacer control is visible on the page
- form/api/spacer/spacer_setproperties_method.md - allows changing available configuration attributes of the control dynamically
- form/api/spacer/spacer_show_method.md - shows a Spacer control on the page
}}


<h3 id="eventhandling">List of the control events:</h3>

{{api
- form/api/spacer/spacer_afterchangeproperties_event.md - fires after configuration attributes of the control have been changed dynamically
- form/api/spacer/spacer_afterhide_event.md - fires after a control is hidden
- form/api/spacer/spacer_aftershow_event.md - fires after a control is shown
- form/api/spacer/spacer_beforechangeproperties_event.md - fires before configuration attributes of the control are changed dynamically
- form/api/spacer/spacer_beforehide_event.md - fires before a control is hidden
- form/api/spacer/spacer_beforeshow_event.md - fires before a control is shown
}}


@index:
- form/api/refs/spacer_methods.md
- form/api/refs/spacer_events.md


