beforeClose
=============

@short: fires before closing a tab in Tabbar

@params:
- id 		string		the id of a closed tab

@returns:
- result	boolean		false - to prevent closing of a tab, otherwise true

@example:
tabbar.events.on("BeforeClose", function(id){
    // your logic here
    return true;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/dld2qo1m	Tabbar. Events

