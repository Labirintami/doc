afterEditEnd
=============

@short: fires after editing of a cell is ended
	
@params:
- value			string		the new value of a cell
- row			object		an object with a row configuration
- column		object		an object with a column configuration


@example:
grid.events.on("AfterEditEnd", function(value,row,column){
	// your logic here
});


@template:	api_event
@descr:






@changelog: added in v6.1

