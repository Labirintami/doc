(window.webpackJsonp=window.webpackJsonp||[]).push([[1142],{1201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),l=n(6),c=(n(0),n(1808)),o={sidebar_label:"Work with Selection Object",title:"Work with Selection Object"},a={unversionedId:"tree/usage_selection",id:"tree/usage_selection",isDocsHomePage:!1,title:"Work with Selection Object",description:"You can manipulate with Tree items via the API of the selection object. It is possible to select an item, remove selection, and get the id or even the object of a selected Tree item.",source:"@site/docs/tree/usage_selection.md",slug:"/tree/usage_selection",permalink:"/tree/usage_selection",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/tree/usage_selection.md",version:"current",sidebar_label:"Work with Selection Object",sidebar:"docs",previous:{title:"Work with Tree",permalink:"/tree/work_with_tree"},next:{title:"Customization",permalink:"/tree/setting_tree_appearance"}},s=[{value:"Enabling/Disabling Selection object",id:"enablingdisabling-selection-object",children:[]},{value:"Selecting an item",id:"selecting-an-item",children:[]},{value:"Unselecting an item",id:"unselecting-an-item",children:[]},{value:"Getting id of a selected item",id:"getting-id-of-a-selected-item",children:[]},{value:"Getting object of a selected item",id:"getting-object-of-a-selected-item",children:[]}],r={rightToc:s};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can manipulate with Tree items via the API of the ",Object(c.b)("strong",null,"selection")," object. It is possible to select an item, remove selection, and get the id or even the object of a selected Tree item."),Object(c.b)("h2",{id:"enablingdisabling-selection-object"},"Enabling/Disabling Selection object"),Object(c.b)("p",null,"Starting from v7.0, you can activate selection of items via the tree/api/selection/selection_enable_method.md method of the selection object."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"tree.selection.enable();\n")),Object(c.b)("p",null,"To disable selection of items in Tree, make use of the tree/api/selection/selection_disable_method.md method of the selection object:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"tree.selection.disable();\n")),Object(c.b)("p",null,"{{sample tree/03_usage/09_enable_disable_selections.html}}"),Object(c.b)("p",null,"Here is a list of events that you can apply while working with selection of items:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"tree/api/selection/selection_afterselect_event.md"),Object(c.b)("li",{parentName:"ul"},"tree/api/selection/selection_afterunselect_event.md"),Object(c.b)("li",{parentName:"ul"},"tree/api/selection/selection_beforeselect_event.md"),Object(c.b)("li",{parentName:"ul"},"tree/api/selection/selection_beforeunselect_event.md")),Object(c.b)("h2",{id:"selecting-an-item"},"Selecting an item"),Object(c.b)("p",null,"To select a particular Tree item, make use of the ",Object(c.b)("strong",null,"add()")," method of the ",Object(c.b)("strong",null,"selection")," object. As a parameter the method takes the id of an item. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'var id = tree.selection.getId(); // -> "2"\ntree.selection.add("2");\n')),Object(c.b)("h2",{id:"unselecting-an-item"},"Unselecting an item"),Object(c.b)("p",null,"To remove selection from a selected item, apply the ",Object(c.b)("strong",null,"remove()")," method of the ",Object(c.b)("strong",null,"selection")," object. The method may take the id of an item as a parameter:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'tree.selection.remove("2"); \n')),Object(c.b)("p",null,"Starting from v7.0, the method unselects all previously selected items when calling without parameters:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"tree.selection.remove();\n")),Object(c.b)("h2",{id:"getting-id-of-a-selected-item"},"Getting id of a selected item"),Object(c.b)("p",null,"You can get the id of the currently selected item with the ",Object(c.b)("strong",null,"getId()")," method of the ",Object(c.b)("strong",null,"selection")," object:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'var selected = tree.selection.getId(); // -> "2"\n')),Object(c.b)("h2",{id:"getting-object-of-a-selected-item"},"Getting object of a selected item"),Object(c.b)("p",null,"It is also possible to get the object of a selected item using the ",Object(c.b)("strong",null,"getItem()")," method of the ",Object(c.b)("strong",null,"selection")," object:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var item = tree.selection.getItem();\n")))}b.isMDXComponent=!0}}]);