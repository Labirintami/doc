afterClose
---
sidebar_label: 
title: 
---          

@short: fires after closing a tab in Tabbar


@params:
- id 		string		the id of a closed tab


@example:
tabbar.events.on("AfterClose", function(id){
    console.log(id);
});


@template: api_event
@descr:

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/dld2qo1m	Tabbar. Events
