---
sidebar_label: showAt
title: showAt
---          

@short: shows a context menu


@params:
- element 			HTMLElement,Event,string		 	a master HTML element (or its id) or the mouse event that will trigger the context menu
- direction 		string								a place where the context menu will be shown relative to the element



@example:
var cmenu = new dhx.ContextMenu();
document.querySelector('#menu').oncontextmenu = function(e) {
    e.preventDefault();
    cmenu.showAt("menu", 'right');    
}


@template: api_method
@descr:
{{note This is the method of [Context Menu](menu/creating_context_menu.md).}}

@related:
menu/creating_context_menu.md


@changelog:


@relatedsample: https://snippet.dhtmlx.com/9xfpymlg	Menu. Show At