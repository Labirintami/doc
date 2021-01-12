beforeResizeStart
---
sidebar_label: 
title: 
---          

@short: fires before resizing of a column has started

@params:
- column		object		an object with a column configuration
- e				Event		a native event object


@returns:
- result		boolean		false - to block resizing of a column, otherwise true

@example:
grid.events.on("BeforeResizeStart", function(col,e){
	// your logic here
    return false;
});


@template: api_event
@descr:

@changelog:
added in v6.2
