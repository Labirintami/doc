
---
sidebar_label: change
title: change
---          

@short:
fires on changing the active tab

@params:
- activeId		string		the id of a newly active tab
- prevId 		string		the id of a previously active tab


@example:
tabbar.events.on("Change", function(activeId, prevId){
    console.log(activeId);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/dld2qo1m	Tabbar. Events

