beforeHide
---
sidebar_label: 
title: 
---          

@short:
fires before hiding an item of Toolbar

@params:
- id 		string		the ID of a toolbar item
- e         Event       a native event object

@returns:
- result        boolean     false - to prevent hiding of a toolbar item, otherwise - true

@example:
toolbar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events