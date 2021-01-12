getSpan
---
sidebar_label: 
title: 
---          

@short: returns an object with spans


@params:
- row		string,number		the id of a row
- col		string,number		the id of a column

@returns:
- span		object		an object with configuration of a span


@example:
var span = grid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}


@template: api_method
@descr:
A returned **span** object contains the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a row</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
		</tr>
    </tbody>
</table>



@relatedapi:
grid/api/grid_spans_config.md
grid/api/grid_addspan_method.md
grid/api/grid_removespan_method.md


@changelog:

@related: treegrid/usage.md#addingremovingspans