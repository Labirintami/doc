template
---
sidebar_label: 
title: 
---          

@short: 
specifies a template for List items




@type: function

@example: 
var list = new dhx.List("list", {
	template: function(item) {
		return "<strong>!!!</strong>" + item.value;
	}
});


@template:	api_config
@descr: 
The template function takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>(<i>object</i>) an object of a data item</td>
		</tr>
    </tbody>
</table>

@related: list/configuration.md#templateforlistitems


@relatedapi: list/api/list_eventhandlers_config.md

@relatedsample: https://snippet.dhtmlx.com/gtzdwpj4	List. Add Template To List Item
