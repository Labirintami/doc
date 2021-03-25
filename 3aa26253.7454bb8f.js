(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var l=n(2),i=n(6),a=(n(0),n(1808)),c={sidebar_label:"List API",title:"List API"},b={unversionedId:"list/temp_api_list",id:"list/temp_api_list",isDocsHomePage:!1,title:"List API",description:"`tododelete`",source:"@site/docs/list/temp_api_list.md",slug:"/list/temp_api_list",permalink:"/list/temp_api_list",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/list/temp_api_list.md",version:"current",sidebar_label:"List API"},s=[{value:"Constructor",id:"constructor",children:[]},{value:"Objects",id:"objects",children:[]},{value:"Methods",id:"methods",children:[{value:"destructor",id:"destructor",children:[]},{value:"Selection",id:"selection",children:[]}]},{value:"Properties",id:"properties",children:[{value:"dragMode",id:"dragmode",children:[]},{value:"template",id:"template",children:[]},{value:"virtual",id:"virtual",children:[]},{value:"itemHeight",id:"itemheight",children:[]},{value:"css",id:"css",children:[]}]},{value:"Events",id:"events",children:[{value:"ContextMenu",id:"contextmenu",children:[]},{value:"Click",id:"click",children:[]},{value:"FocusChange",id:"focuschange",children:[]}]}],r={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tododelete")," "),Object(a.b)("h2",{id:"constructor"},"Constructor"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list_container",{\n    itemHeight: 40\n});\n')),Object(a.b)("p",null,"Parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the HTML container of dhtmlxList"),Object(a.b)("li",{parentName:"ul"},"configuration settings (check below)")),Object(a.b)("h2",{id:"objects"},"Objects"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"config"),Object(a.b)("li",{parentName:"ul"},"events"),Object(a.b)("li",{parentName:"ul"},"selection")),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("p",null,"###setFocusIndex"),Object(a.b)("p",null,"sets focus to an item according to its index"),Object(a.b)("p",null,"params:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"index\t-\t(number)\t\tthe index of an item")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"list.setFocusIndex(7);\n")),Object(a.b)("p",null,"###getFocusItem"),Object(a.b)("p",null,"returns the id of an item in focus"),Object(a.b)("p",null,"returns: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id\t-\t(string)\t\tthe id of an item in focus")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var focus = list.getFocusItem(); // -> "u1556534543152"\n')),Object(a.b)("p",null,"###getFocusIndex"),Object(a.b)("p",null,"returns the index of an item in focus"),Object(a.b)("p",null,"returns:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"index\t-\t(number)\t\tthe index of an item in focus")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"var index = list.getFocusIndex(); // -> 6\n")),Object(a.b)("h3",{id:"destructor"},"destructor"),Object(a.b)("p",null,"releases occupied resources"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"list.destructor();\n")),Object(a.b)("h3",{id:"selection"},"Selection"),Object(a.b)("h4",{id:"getid"},"getId"),Object(a.b)("p",null,"returns the id of a selected item"),Object(a.b)("p",null,"returns: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id\t-\t(string)\t\tthe id of a selected item")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var id = list.selection.getId(); // -> "u1548495213601"\n')),Object(a.b)("h4",{id:"getitem"},"getItem"),Object(a.b)("p",null,"returns the object of a selected item"),Object(a.b)("p",null,"returns:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id\t- (object)\t\tthe object of a selected item")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var item = list.selection.getItem(); \n// -> {$selected: true, id: "u1548495213601", index: 7}\n')),Object(a.b)("h4",{id:"add"},"add"),Object(a.b)("p",null,"selects the specified item in the list"),Object(a.b)("p",null,"params: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id   -  (string)     the id of the item to select")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"var id = list.selection.getId(); \nlist.selection.add(id);\n")),Object(a.b)("h4",{id:"remove"},"remove"),Object(a.b)("p",null,"removes selection from an item"),Object(a.b)("p",null,"params: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id \t- (string)\t\toptional, the id of the selected item ")),Object(a.b)("p",null,"returns:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"result\t-\t(boolean)\t\t\ttrue, if selection is removed, otherwise false")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// removes selection from the currently selected item\nlist.selection.remove();\n")),Object(a.b)("p",null,"In case an id isn't passed, the method unselects the currently selected item."),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"dragmode"},"dragMode"),Object(a.b)("p",null,"enables drag-n-drop in List"),Object(a.b)("p",null,"type: string"),Object(a.b)("p",null,'values: "target", "source", "both"'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list_container", { \n    dragMode:"source"\n});\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"descr:\nDrag-n-drop can work in three modes: ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},'- "target" - a list takes items from other lists, while its items can\'t be dragged out of it\n- "source" - a list allows dragging its items out and can\'t take items from other lists\n- "both" - a list both takes items from other lists and allows dragging its items out as well\n')))),Object(a.b)("p",null,"###dragCopy"),Object(a.b)("p",null,"defines that an item is copied to a target during drag-n-drop"),Object(a.b)("p",null,"type: boolean"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var source = new dhx.List("list-source", {dragMode: "source", dragCopy: true});\nvar target = new dhx.List("list-target", {dragMode: "target", dragCopy: true});\n')),Object(a.b)("p",null,"###dropBehaviour"),Object(a.b)("p",null,"defines the behaviour of a dragged item"),Object(a.b)("p",null,"type:string"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var source = new dhx.List("list-source",{\n    dragMode:"source", dropBehaviour:"complex"\n});\nvar target = new dhx.List("list-target",{\n    dragMode:"target", dropBehaviour:"complex"\n});\n')),Object(a.b)("p",null,"There are three modes of behaviour of a dragged list item:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'"child" - a dragged item becomes a child of the item it is dragged to'),Object(a.b)("li",{parentName:"ul"},'"sibling" - a dragged item becomes a sibling of the item it is dragged to'),Object(a.b)("li",{parentName:"ul"},'"complex" - a dragged item can become both a child of a sibling of a target item, depending on the position specified by highlighting')),Object(a.b)("h3",{id:"template"},"template"),Object(a.b)("p",null,"specifies a template for List items"),Object(a.b)("p",null,"type: function"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list", {\n    template: function(item) {\n        return "<strong>!!!</strong>" + item.value;\n    }\n});\n')),Object(a.b)("p",null,"The template function takes one parameter:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"item\t-\t(object)\t\tan object of a data item")),Object(a.b)("h3",{id:"virtual"},"virtual"),Object(a.b)("p",null,"enables dynamic rendering of List items"),Object(a.b)("p",null,"type: boolean"),Object(a.b)("p",null,"default: false"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list_container", {\n    virtual: true\n});\n')),Object(a.b)("h3",{id:"itemheight"},"itemHeight"),Object(a.b)("p",null,"sets the height of an item"),Object(a.b)("p",null,"type: number"),Object(a.b)("p",null,"default: 34 "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list_container", { \n    itemHeight:30\n});\n')),Object(a.b)("h3",{id:"css"},"css"),Object(a.b)("p",null,"adds a CSS class(es) to the component"),Object(a.b)("p",null,"type: string"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'<style>\n    .bg-gray {\n        background: #faf9f9;\n    }\n</style>\n\n\nvar list = new dhx.List("list", {css: "bg-gray"});\n')),Object(a.b)("p",null,"###height"),Object(a.b)("p",null,"sets the height of List"),Object(a.b)("p",null,"type: number"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list", {height: 700});\n')),Object(a.b)("p",null,"###keyNavigation"),Object(a.b)("p",null,"enables/disables navigation in List by arrow keys"),Object(a.b)("p",null,"type: function|boolean"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var list = new dhx.List("list", {keyNavigation:true});\n')),Object(a.b)("h2",{id:"events"},"Events"),Object(a.b)("h3",{id:"contextmenu"},"ContextMenu"),Object(a.b)("p",null,"fires on calling a context menu for an item"),Object(a.b)("p",null,"params:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id    -  \t(string, number)\t\t\tthe id of a right-clicked item"),Object(a.b)("li",{parentName:"ul"},"e\t\t- \t(Event)\t\t\t\t\ta native event object")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'list.events.on("ContextMenu", function(id, e){\n    // your code here\n});\n')),Object(a.b)("h3",{id:"click"},"Click"),Object(a.b)("p",null,"fires on clicking an item"),Object(a.b)("p",null,"params: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"id  -   (string, number)\t\t\tthe id of a clicked item"),Object(a.b)("li",{parentName:"ul"},"e\t\t-\t (Event)\t\t\t\ta native event object")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'list.events.on("Click", function(id, e){\n    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");\n});\n')),Object(a.b)("h3",{id:"focuschange"},"FocusChange"),Object(a.b)("p",null,"fires on moving focus to a new item"),Object(a.b)("p",null,"params:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"index\t-\t(number)\t\t\t\tthe position of an item"),Object(a.b)("li",{parentName:"ul"},"id\t-\t(string, number)\t\tthe id of an item")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'list.events.on("FocusChange", function(index, id){\n    // your code here\n});\n')),Object(a.b)("p",null,"check and improve"))}u.isMDXComponent=!0}}]);