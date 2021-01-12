gravity
---
sidebar_label: 
title: 
---          

@short: 
sets the "weight" of a cell in relation to other cells placed in the same row and within one parent



@type: number

@example: 
var layout = dhx.Layout("layout_container", {
	css: "dhx_widget--bordered",
	rows: [
		{
			id: "1",
			cols: [
				{
					id: "1.1",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.1",
                    gravity: 2 /*!*/
				},
				{
					id: "1.2",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.2",
                    gravity: 1 /*!*/
				},
				{
					id: "1.3",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.3",
                    gravity: 3 /*!*/
				}
			]
		}
    ]
});


@template:	api_config
@descr: 
{{note You can use the **gravity** property only when a cell has no specified sizes - width and height, otherwise - the property does not work.}} 

If you specify the property for a cell, its size will be adjusted regarding the sizes of the cells that are in the same row, within the same parent and have **gravity** in their configuration.  

The negative number set as a value to the **gravity** property is equated to zero.  

@relatedsample:
layout/02_configuration/09_gravity.html

@related: layout/init.md#initializelayout

@changelog:
The property is updated in v7.0. For more information, see [Migration article](migration/index.md#65270).