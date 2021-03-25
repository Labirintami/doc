(window.webpackJsonp=window.webpackJsonp||[]).push([[1669],{1728:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return r}));var i=a(2),n=a(6),l=(a(0),a(1808)),c={sidebar_label:"Work with Selection Object",title:"Work with Selection Object"},o={unversionedId:"dataview/usage_selection",id:"dataview/usage_selection",isDocsHomePage:!1,title:"Work with Selection Object",description:"You can manipulate with DataView items via the API of the selection object. It is possible to select an item, remove selection, and get the id or even the object of a selected DataView item.",source:"@site/docs/dataview/usage_selection.md",slug:"/dataview/usage_selection",permalink:"/dataview/usage_selection",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/dataview/usage_selection.md",version:"current",sidebar_label:"Work with Selection Object",sidebar:"docs",previous:{title:"Work with DataView",permalink:"/dataview/manipulating_data"},next:{title:"Customization",permalink:"/dataview/customization"}},s=[{value:"Enabling/Disabling Selection object",id:"enablingdisabling-selection-object",children:[]},{value:"Selecting an item",id:"selecting-an-item",children:[]},{value:"Unselecting an item",id:"unselecting-an-item",children:[]},{value:"Getting id of a selected item",id:"getting-id-of-a-selected-item",children:[]},{value:"Getting object of a selected item",id:"getting-object-of-a-selected-item",children:[]}],b={rightToc:s};function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can manipulate with DataView items via the API of the ",Object(l.b)("strong",null,"selection")," object. It is possible to select an item, remove selection, and get the id or even the object of a selected DataView item."),Object(l.b)("h2",{id:"enablingdisabling-selection-object"},"Enabling/Disabling Selection object"),Object(l.b)("p",null,"Starting from v7.0, you can activate selection of items via the ",Object(l.b)("a",{parentName:"p",href:"/dataview/api/selection/selection_enable_method"},"enable()")," method of the selection object."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"dataview.selection.enable();\n")),Object(l.b)("p",null,"To disable selection of items in DataView, make use of the ",Object(l.b)("a",{parentName:"p",href:"/dataview/api/selection/selection_disable_method"},"disable()")," method of the selection object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"dataview.selection.disable();\n")),Object(l.b)("p",null,"{{sample\tdataview/03_usage/06_disable_selection.html}}"),Object(l.b)("p",null,"Here is a list of events that you can apply while working with selection of items:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"dataview/api/selection/selection_afterselect_event.md"),Object(l.b)("li",{parentName:"ul"},"dataview/api/selection/selection_afterunselect_event.md"),Object(l.b)("li",{parentName:"ul"},"dataview/api/selection/selection_beforeselect_event.md"),Object(l.b)("li",{parentName:"ul"},"dataview/api/selection/selection_beforeunselect_event.md")),Object(l.b)("h2",{id:"selecting-an-item"},"Selecting an item"),Object(l.b)("p",null,"To select a particular DataView item, make use of the ",Object(l.b)("strong",null,"add()")," method of the ",Object(l.b)("strong",null,"selection")," object. As a parameter the method takes the id of an item. "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'var id = dataview.selection.getId(); // -> "2"\ndataview.selection.add("2");\n')),Object(l.b)("p",null,"Starting from v7.0, the method selects all unselected items when calling without parameters:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"dataview.selection.add();\n")),Object(l.b)("h2",{id:"unselecting-an-item"},"Unselecting an item"),Object(l.b)("p",null,"To remove selection from a selected item, apply the ",Object(l.b)("strong",null,"remove()")," method of the ",Object(l.b)("strong",null,"selection")," object. The method may take the id of an item as a parameter:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'dataview.selection.remove("2"); \n')),Object(l.b)("p",null,"Starting from v7.0, the method unselects all previously selected items when calling without parameters:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"dataview.selection.remove();\n")),Object(l.b)("h2",{id:"getting-id-of-a-selected-item"},"Getting id of a selected item"),Object(l.b)("p",null,"You can get the id of the currently selected item with the ",Object(l.b)("strong",null,"getId()")," method of the ",Object(l.b)("strong",null,"selection")," object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'var selected = dataview.selection.getId(); // -> "2"\n')),Object(l.b)("p",null,"Starting from v7.0, the method can also return an array with ids of selected items if the ",Object(l.b)("a",{parentName:"p",href:"/dataview/api/dataview_multiselection_config"},"multiselection")," property of DataView is enabled."),Object(l.b)("h2",{id:"getting-object-of-a-selected-item"},"Getting object of a selected item"),Object(l.b)("p",null,"It is also possible to get the object of a selected item using the ",Object(l.b)("strong",null,"getItem()")," method of the ",Object(l.b)("strong",null,"selection")," object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var item = dataview.selection.getItem();\n")),Object(l.b)("p",null,"Starting from v7.0, the method can also return an array of selected items if the ",Object(l.b)("a",{parentName:"p",href:"/dataview/api/dataview_multiselection_config"},"multiselection")," property of DataView is enabled."))}r.isMDXComponent=!0}}]);