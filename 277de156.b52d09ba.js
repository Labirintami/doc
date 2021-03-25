(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{336:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return r}));var o=a(2),l=a(6),n=(a(0),a(1808)),b={sidebar_label:"Work with Toolbar",title:"Work with Toolbar"},c={unversionedId:"toolbar/common_methods",id:"toolbar/common_methods",isDocsHomePage:!1,title:"Work with Toolbar",description:"Setting/getting values and states",source:"@site/docs/toolbar/common_methods.md",slug:"/toolbar/common_methods",permalink:"/toolbar/common_methods",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/toolbar/common_methods.md",version:"current",sidebar_label:"Work with Toolbar",sidebar:"docs",previous:{title:"Data Loading",permalink:"/toolbar/load_data"},next:{title:"Customization",permalink:"/toolbar/customization"}},i=[{value:"Setting/getting values and states",id:"settinggetting-values-and-states",children:[{value:"Setting values/states",id:"setting-valuesstates",children:[]},{value:"Getting values/states",id:"getting-valuesstates",children:[]}]},{value:"Hiding and showing controls",id:"hiding-and-showing-controls",children:[]},{value:"Disabling and enabling controls",id:"disabling-and-enabling-controls",children:[]},{value:"Checking if a Toolbar item is disabled",id:"checking-if-a-toolbar-item-is-disabled",children:[]},{value:"Adding a tooltip to a control",id:"adding-a-tooltip-to-a-control",children:[]},{value:"Selecting/Unselecting an item",id:"selectingunselecting-an-item",children:[{value:"Selecting a toolbar item",id:"selecting-a-toolbar-item",children:[]},{value:"Unselecting a toolbar item",id:"unselecting-a-toolbar-item",children:[]}]},{value:"Checking if a toolbar item is selected",id:"checking-if-a-toolbar-item-is-selected",children:[]},{value:"Getting selected items",id:"getting-selected-items",children:[]},{value:"Using Tree collection API",id:"using-tree-collection-api",children:[{value:"Adding new controls into Toolbar",id:"adding-new-controls-into-toolbar",children:[]},{value:"Rearranging controls",id:"rearranging-controls",children:[]}]}],s={rightToc:i};function r(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"settinggetting-values-and-states"},"Setting/getting values and states"),Object(n.b)("h3",{id:"setting-valuesstates"},"Setting values/states"),Object(n.b)("p",null,"You can change the value or state (for a TwoState button) of a control with the help of the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_setstate_method"},"setState()")," method. It takes one parameter: a ",Object(n.b)("em",{parentName:"p"},"key-value")," pair with the ID of the control and its new value (state)."),Object(n.b)("p",null,"Here is how you can use it to change the state of a TwoState button:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{type:"button", twoState:true, id:"check"}\n...\ntoolbar.setState({"check":true});\n//or\ntoolbar.setState({"check":false});\n')),Object(n.b)("p",null,"And this is how you can change the value of an input:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{type:"input", id:"name", value:""}\n...\ntoolbar.setState({"name":"Maintenance"});\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/h34uh1dr"},"https://snippet.dhtmlx.com/h34uh1dr"),"\tToolbar. Set State"),Object(n.b)("h3",{id:"getting-valuesstates"},"Getting values/states"),Object(n.b)("p",null,"To get the current value of the control, use the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_getstate_method"},"getState()")," method. "),Object(n.b)("p",null,"Starting from v7.0, the method can take the id of a Toolbar control as a parameter and return the value/state of the control. If id is not specified, the method returns an object with IDs of controls and their values/states."),Object(n.b)("p",null,"This is what the method returns for a TwoState button:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{type:"button", twoState:true, id:"check"}\n...\ntoolbar.getState("check"); // -> true/false\n// or\ntoolbar.getState(); // -> { "check":true } or { "check":false }\n')),Object(n.b)("p",null,"And this is a possible return value for an input:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{type:"input", id:"name", value:"Maintenance"}\n...\ntoolbar.getState("name"); // -> "Maintenance"\n// or\ntoolbar.getState(); // -> {"name":"Maintenance"}\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/kvttdgad"},"https://snippet.dhtmlx.com/kvttdgad"),"\tToolbar. Get State"),Object(n.b)("h2",{id:"hiding-and-showing-controls"},"Hiding and showing controls"),Object(n.b)("p",null,"You can show or hide controls by their IDs. Pass them to the corresponding methods - ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_show_method"},"show()")," and ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_hide_method"},"hide()"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"toolbar.hide(id); // hides a control\ntoolbar.show(id); // shows a control\n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/cldp89u4"},"https://snippet.dhtmlx.com/cldp89u4"),"\tToolbar. Hide/Show"),Object(n.b)("p",null,"Starting from v7.0, it is possible to hide/show all Toolbar controls on the page at once by using the methods without parameters:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"// hides all Toolbar controls\ntoolbar.hide();\n// shows all Toolbar controls\ntoolbar.show();\n")),Object(n.b)("h2",{id:"disabling-and-enabling-controls"},"Disabling and enabling controls"),Object(n.b)("p",null,"You can disable or enable controls. The related methods - ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_enable_method"},"enable()")," and ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_disable_method"},"disable()")," - take the IDs of controls as parameters:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"toolbar.disable(id); // disables a control\ntoolbar.enable(id);  // enables a control\n")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/ovblenaf"},"https://snippet.dhtmlx.com/ovblenaf"),"\tToolbar. Enable/Disable"),Object(n.b)("p",null,"Starting from v7.0, it is possible to disable/enable all Toolbar controls on the page at once by using the methods without parameters:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"// disables all Toolbar controls\ntoolbar.disable();\n// enables all Toolbar controls\ntoolbar.enable();\n")),Object(n.b)("h2",{id:"checking-if-a-toolbar-item-is-disabled"},"Checking if a Toolbar item is disabled"),Object(n.b)("p",null,"To check if an item of Toolbar is disabled, call the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_isdisabled_method"},"isDisabled()")," method. The method takes one parameter:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") an id of a toolbar item")))),Object(n.b)("br",null),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'menu.isDisabled("1"); // -> true/false\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/ovblenaf"},"https://snippet.dhtmlx.com/ovblenaf"),"\tToolbar. Enable/Disable"),Object(n.b)("h2",{id:"adding-a-tooltip-to-a-control"},"Adding a tooltip to a control"),Object(n.b)("p",null,"You can attach a tooltip to a control. For this you need to provide the ",Object(n.b)("strong",null,"tooltip")," property with the tooltip text in the control object before the toolbar initialization:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{\n    type: "text",\n    value: "test1",\n    tooltip: "tooltip for test1"\n}\n')),Object(n.b)("h2",{id:"selectingunselecting-an-item"},"Selecting/Unselecting an item"),Object(n.b)("h3",{id:"selecting-a-toolbar-item"},"Selecting a toolbar item"),Object(n.b)("p",null,"To select a particular Toolbar item, make use of the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_select_method"},"select()")," method of Toolbar. The method takes two parameters:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the id of an item")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"unselect")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") optional, ",Object(n.b)("i",null,"true")," - to unselect previously selected items, otherwise - ",Object(n.b)("i",null,"false"),"; ",Object(n.b)("i",null,"true")," by default")))),Object(n.b)("br",null),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.select("web");\n')),Object(n.b)("p",null,"{{sample toolbar/03_usage/06_select_unselect.html}}"),Object(n.b)("h3",{id:"unselecting-a-toolbar-item"},"Unselecting a toolbar item"),Object(n.b)("p",null,"To remove selection from a selected item, apply the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_unselect_method"},"unselect()")," method of Toolbar. The method may take the id of an item as a parameter:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'// unselects a specified selected item\ntoolbar.unselect("web");\n')),Object(n.b)("p",null,"It is also possible to remove selection from all previously selected items of Toolbar via the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_unselect_method"},"unselect()")," method:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"// unselects all previously selected items\ntoolbar.unselect();\n")),Object(n.b)("p",null,"{{sample toolbar/03_usage/06_select_unselect.html}}"),Object(n.b)("h2",{id:"checking-if-a-toolbar-item-is-selected"},"Checking if a toolbar item is selected"),Object(n.b)("p",null,"To check if an item of Toolbar is selected, call the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_isselected_method"},"isSelected()")," method. The method takes one parameter:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") an id of a toolbar item")))),Object(n.b)("br",null),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.isSelected("web"); // -> returns true/false\n')),Object(n.b)("p",null,"{{sample toolbar/03_usage/06_select_unselect.html}}"),Object(n.b)("h2",{id:"getting-selected-items"},"Getting selected items"),Object(n.b)("p",null,"To get the selected items, call the ",Object(n.b)("a",{parentName:"p",href:"/toolbar/api/toolbar_getselected_method"},"getSelected()")," method. The method returns an array of IDs of selected items:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.getSelected(); // -> ["selected_1", "selected_1.1"]\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/105levtd"},"https://snippet.dhtmlx.com/105levtd"),"\tToolbar. Tooltips"),Object(n.b)("h2",{id:"using-tree-collection-api"},"Using Tree collection API"),Object(n.b)("p",null,"You can manipulate the controls of Toolbar with the help of the ",Object(n.b)("a",{parentName:"p",href:"/tree_collection/api/refs/treecollection"},"Tree collection API"),". "),Object(n.b)("h3",{id:"adding-new-controls-into-toolbar"},"Adding new controls into Toolbar"),Object(n.b)("p",null,"It is possible to add more controls into the initialized Toolbar on the fly. Use the ",Object(n.b)("strong",null,"add()")," method of Tree Collection. It takes three parameters:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"config")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"object"),") the configuration object of the added control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"index")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"number"),") optional, the position to add a control at")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"parent")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") optional, the id of a parent control (for the ",Object(n.b)("i",null,"menuItem")," control type)")))),Object(n.b)("br",null),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.data.add({\n    type:"button", value:"Add"\n});\ntoolbar.data.add({\n    type:"separator"\n});\ntoolbar.data.add({\n    type:"button", value:"Remove"\n});\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/r6jv9kk2"},"https://snippet.dhtmlx.com/r6jv9kk2"),"\tToolbar. Add"),Object(n.b)("p",null,"Templates for Toolbar controls in the JSON format are given ",Object(n.b)("a",{parentName:"p",href:"/toolbar/load_data#jsonformattemplates"},"here"),"."),Object(n.b)("p",null,"###Updating config of controls"),Object(n.b)("p",null,"You can change config options of the control via the ",Object(n.b)("strong",null,"update()")," method of Tree Collection. It takes two parameters:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"the id of the control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"config")),Object(n.b)("td",null,"an object with new configuration of the control")))),Object(n.b)("p",null,"For example, you can change the icon of a control:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.data.update("edit", { \n    icon: "mdi mdi-pencil" \n});\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/xfs5gh5t"},"https://snippet.dhtmlx.com/xfs5gh5t"),"\tToolbar. Update"),Object(n.b)("p",null,"###Removing controls from Toolbar"),Object(n.b)("p",null,"To remove a control, make use of the ",Object(n.b)("strong",null,"remove()")," method of Tree Collection. Pass the id of the control that should be removed to the method:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.data.remove("control-id");\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/w8jcn1t2"},"https://snippet.dhtmlx.com/w8jcn1t2"),"\tToolbar. Remove"),Object(n.b)("h3",{id:"rearranging-controls"},"Rearranging controls"),Object(n.b)("p",null,"You can move menu controls to different positions with the ",Object(n.b)("strong",null,"move()"),' method of Tree Collection. For example, this is how you can move an item with ID "2" to the left edge of the toolbar:'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'toolbar.data.move("2",0);\n')),Object(n.b)("br",null),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Check the full list of ",Object(n.b)("a",{parentName:"p",href:"/tree_collection/api/refs/treecollection"},"Tree collection API"),"."))),Object(n.b)("p",null,"check, add info about adding popup into toolbar"))}r.isMDXComponent=!0}}]);