activeView
=============

@short: 
sets the currently active view




@type: string

@example: 
var tabbar = new dhx.Tabbar("tabbar", {activeView:"3",
    mode: "top",
    views:[
        { id:"1", tab: "leftside", css:"panel flex", header:"Left"},
        { id:"2", tab: "west", css:"panel flex", header:"West"},
        { id:"3", tab: "east", css:"panel flex", header:"East"},
        { id:"4", tab: "right", css:"panel flex", header:"Right" }
    ]
});


@template:	api_config
@descr: 

@deprecated: instead of it, you can use the tabbar/api/tabbar_activetab_config.md property:

~~~js
var tabbar = new dhx.Tabbar("tabbar", {
	activeTab:"3",
    mode: "top",
    views:[
        { id:"1", tab: "leftside", css:"panel flex", header:"Left"},
        { id:"2", tab: "west", css:"panel flex", header:"West"},
        { id:"3", tab: "east", css:"panel flex", header:"East"},
        { id:"4", tab: "right", css:"panel flex", header:"Right" }
    ]
});

~~~

