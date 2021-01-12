type
---
sidebar_label: 
title: 
---          

@short: defines the type of borders between cells inside a layout


@type: string

@values: "line", "space", "wide", "none"

@example: 
const layout = new dhx.Layout("layout", {
    type: "space", /*!*/
    cols: [
        {
            html: "1"
        },
        {
            html: "2"
        },
        {
            html: "3"
        }
    ]
});


@template:	api_config
@descr: 

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>"line"</b></td>
			<td>adds a border to a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"space"</b></td>
			<td>adds a border and space around a cell</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"wide"</b></td>
			<td>adds a border to a cell and space between the neighboring cells</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"none"</b></td>
			<td>removes visible borders and space between cells</td>
		</tr>
    </tbody>
</table>

{{note Note, that if the children cell has no specified type of borders, the cell has the same type of borders as its parent cell. }} 

@related: layout/cell_configuration.md#settingbordersforcells

@relatedsample: layout/02_configuration/11_combination_of_types.html

@changelog: added in v7.0
