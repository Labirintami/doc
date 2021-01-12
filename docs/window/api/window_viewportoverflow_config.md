viewportOverflow
---
sidebar_label: 
title: 
---          

@short: 
defines whether a window can go beyond borders of a browser


@default:
false


@type: boolean

@example: 
var dhxWindow = new dhx.Window({
    viewportOverflow:true
});

dhxWindow.show();

@related: window/how_to_start.md
window/configuration.md#overflowingbrowserwindow
@template:	api_config
@descr: 
{{note The property makes sense when set together with the window/api/window_movable_config.md property.}}

@relatedsample: https://snippet.dhtmlx.com/qfhdlzri	Window. Viewport Overflow