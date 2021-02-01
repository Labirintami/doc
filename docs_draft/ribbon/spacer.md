---
sidebar_label: Spacer
title: Spacer
---          

This item takes space on the ribbon and is used for aligning controls.

![DHX Ribbon spacer](../assets/ribbon/spacer.png)


## Adding Spacer

A new Spacer can be created with the help of the **add()** method of Tree Collection:

~~~js
ribbon.data.add({
	type:"spacer"
});
~~~

{{editor	https://snippet.dhtmlx.com/a8c6y3ob	Ribbon. Spacer}}

### Attributes

Spacer can have two attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>


## Showing/hiding spacer

You can hide and show Spacer with the methods of ribbon:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~





