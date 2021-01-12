beforeCollapse
---
sidebar_label: 
title: 
---          

@short: fires before collapsing a treegrid
	
@params:
- rowId			string,number		the id of a collapsed row


@returns:
- result		boolean		false - to block collapsing a treegrid, otherwise true

@example:
treeGrid.events.on("BeforeCollapse", function(rowId) {
    // your logic here
    return false;
});


@template:	api_event
@descr:




@relatedsample:
https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	

@changelog: added in v6.4