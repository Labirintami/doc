align
---
sidebar_label: 
title: 
---          

@short: 
sets the alignment of content inside a cell




@type: string

@values: "start" | "center" | "end" | "between" | "around" | "evenly"

@example: 
var layout = dhx.Layout("layout_container", {
   rows: [
        {
            align: "center",
            cols: [
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                },
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                },
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                }
            ]
      	}
	]
});


@template:	api_config
@descr: 

@related: layout/init.md#initializelayout

@relatedsample: https://snippet.dhtmlx.com/4w1033c9	Layout. Align

