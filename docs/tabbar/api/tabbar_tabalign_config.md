
---
sidebar_label: tabAlign
title: tabAlign
---          

@short: sets alignment for tabs


@values:
"left" | "start" | "center" | "middle" | "right" | "end"


@type: string

@example: 
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAlign: "right" /*!*/
});


@template:	api_config
@descr: 

@changelog: added in v7.0

@relatedsample: tabbar/02_configuration/09_tab_align.html

@related: tabbar/configuring_tabbar.md#alignment

