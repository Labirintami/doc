(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{1265:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return s})),l.d(t,"default",(function(){return d}));var b=l(2),n=l(6),a=(l(0),l(1808)),c={sidebar_label:"Data Loading",title:"Data Loading"},i={unversionedId:"sidebar/data_loading",id:"sidebar/data_loading",isDocsHomePage:!1,title:"Data Loading",description:"There are several simple ways of loading data into dhtmlxSidebar:",source:"@site/docs/sidebar/data_loading.md",slug:"/sidebar/data_loading",permalink:"/sidebar/data_loading",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/sidebar/data_loading.md",version:"current",sidebar_label:"Data Loading",sidebar:"docs",previous:{title:"Title",permalink:"/sidebar/title"},next:{title:"Configuration",permalink:"/sidebar/sidebar_config"}},s=[{value:"Preparing data set",id:"preparing-data-set",children:[]},{value:"Loading from a local source",id:"loading-from-a-local-source",children:[]},{value:"Loading from an external file",id:"loading-from-an-external-file",children:[]},{value:"Saving and restoring state",id:"saving-and-restoring-state",children:[]},{value:"JSON format templates",id:"json-format-templates",children:[{value:"Common template",id:"common-template",children:[]},{value:"Custom HTML",id:"custom-html",children:[]},{value:"MenuItem",id:"menuitem",children:[]},{value:"NavItem",id:"navitem",children:[]},{value:"Separator",id:"separator",children:[]},{value:"Spacer",id:"spacer",children:[]},{value:"Title",id:"title",children:[]}]}],o={rightToc:s};function d(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are several simple ways of loading data into dhtmlxSidebar:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"load data from an external file"),Object(a.b)("li",{parentName:"ul"},"load data from a local data source")),Object(a.b)("p",null,"First, you need to prepare a data set that will be loaded into Sidebar."),Object(a.b)("h2",{id:"preparing-data-set"},"Preparing data set"),Object(a.b)("p",null,"dhtmlxSidebar expects loaded data in the JSON format. Here is an example of an appropriate data set:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'var data = [\n    {\n        "id": "dashboard",\n        "value": "Dashboard",\n        "icon": "mdi mdi-view-dashboard"\n    },\n    {\n        "id": "statistics",\n        "value": "Statistics",\n        "icon": "mdi mdi-chart-line"\n    },\n    {\n        "id": "reports",\n        "value": "Reports",\n        "icon": "mdi mdi-file-chart"\n    }\n];\n')),Object(a.b)("p",null,"A data set consists of objects with configurations of sidebar controls. Templates for Sidebar controls in JSON format are given ",Object(a.b)("a",{parentName:"p",href:"#jsonformattemplates"},"below"),"."),Object(a.b)("h2",{id:"loading-from-a-local-source"},"Loading from a local source"),Object(a.b)("p",null,"You can load data to a sidebar from an array with the ",Object(a.b)("strong",null,"parse()")," method of TreeCollection. Pass ",Object(a.b)("a",{parentName:"p",href:"#preparingdataset"},"a predefined data set")," as a parameter of this method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"sidebar.data.parse(data);\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/x0qpt7pk"},"https://snippet.dhtmlx.com/x0qpt7pk"),"\tSidebar. Basic Initialization"),Object(a.b)("h2",{id:"loading-from-an-external-file"},"Loading from an external file"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"load")," method loads the sidebar data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'sidebar.data.load("[path to this file]/file.json");\n')),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/mq4ggjmm"},"https://snippet.dhtmlx.com/mq4ggjmm"),"\tSidebar. Init Load"),Object(a.b)("p",null,"The component will make an AJAX call and expect the remote URL to provide valid JSON data."),Object(a.b)("p",null,"Data loading is asynchronous, so you need to wrap any after-loading code into a promise:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'sidebar.data.load("/some/data").then(function(){\n   // some logic here\n});\n')),Object(a.b)("h2",{id:"saving-and-restoring-state"},"Saving and restoring state"),Object(a.b)("p",null,"To save the current state of a sidebar, use the ",Object(a.b)("strong",null,"serialize()")," method of Tree Collection. It converts the data of a sidebar into an array of JSON objects.\nEach JSON object contains the configuration of a separate Sidebar control."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"var state = sidebar1.data.serialize();\n")),Object(a.b)("p",null,"Then you can parse the data stored in the saved state array to a different sidebar. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// creating a new sidebar\nvar sidebar2 = new dhx.Sidebar(document.body);\n// parsing the state of sidebar1 into sidebar2\nsidebar2.data.parse(state);\n")),Object(a.b)("h2",{id:"json-format-templates"},"JSON format templates"),Object(a.b)("p",null,"This section will give you the idea of JSON format templates for separate Sidebar controls."),Object(a.b)("h3",{id:"common-template"},"Common template"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// common\n[\n    {id: "item_a", type: "menuItem", ...},\n    {id: "item_b", type: "input", ...},\n    {id: "item_c", type: "title", ...}\n]\n')),Object(a.b)("h3",{id:"custom-html"},"Custom HTML"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"customHTML")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') required, the item type, set it to "customHTML". If not specified - the ',Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of an item, auto-generated if not set")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"parent")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the parent of the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"html")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") a string with HTML that should be inserted into the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"css")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string|string[]"),") adds style classes")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hidden")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether an item is hidden")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// custom HTML button\n{\n    id: "custom_html",\n    type: "customHTML",\n    html:"<div style=\'height:30px; border: 2px solid\'>My HTML button</div>"\n}\n')),Object(a.b)("h3",{id:"menuitem"},"MenuItem"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"menuItem")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the type of a control, set it to "menuItem". If not specified - the ',Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"parent")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the parent of the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"value")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),")  a value for the menu item. You need to set either the ",Object(a.b)("b",null,"value")," or ",Object(a.b)("b",null,"html")," property to the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"html")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") optional, a string with HTML that should be inserted into the menu item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"css")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string|string[]"),") adds style classes")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"icon")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the name of an ",Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/menu__fa_icons.html"},"icon")," from the used icon font")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"items")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"array"),") an array of children controls (note that all the children should have the type ",Object(a.b)("i",null,"menuItem"),")")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hotkey")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the name of a keyboard shortcut for a menu item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"tooltip")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") a tooltip for the menuItem")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"count")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"number|string"),") a badge with a number")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"countColor")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the color of a badge with number: "danger" | "secondary" | "primary" | "success" ')),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hidden")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether a control is hidden")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"disabled")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether an item is disabled")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// menuItem\n{\n    type:"menuItem", \n    value:"Some",\n    icon:"dxi dxi-menu-right"\n}\n')),Object(a.b)("h3",{id:"navitem"},"NavItem"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"navItem")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the type of a control, set it to "navItem"')),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"parent")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the parent of the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"value")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") a value of the navItem. You need to set either the ",Object(a.b)("b",null,"value")," or ",Object(a.b)("b",null,"html")," property to the navItem")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"html")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") optional, a string with HTML that should be inserted into the navItem")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"css")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string|string[]"),") adds style classes to a navItem")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"icon")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") an ",Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/menu__fa_icons.html"},"icon")," of the navItem")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"items")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"array"),") an array of nested controls. You can find the full list of all available controls ",Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html"},"here"),". If the type of a nested control is not specified, the ",Object(a.b)("i",null,"menuItem")," type will be applied by default. ")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"twoState")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") adds two states to the item: active (pressed) and inactive  (unpressed)")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"active")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") sets the state of a twoState item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"group")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hotkey")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the name of a keyboard shortcut for a menu item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"count")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"number"),") a badge with a number")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"countColor")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the color of a badge with number: "danger" | "secondary" | "primary" | "success" ')),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hidden")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether an item is hidden")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"disabled")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether an item is disabled")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// navItem\n{\n    type:  "navItem", \n    value: "Some",\n    icon:  "dxi-check",\n    count: 10\n}\n')),Object(a.b)("h3",{id:"separator"},"Separator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"separator")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the item type, set it to "separator". If not specified - the ',Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of a control, auto-generated if not set")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// separator\n{\n    id:     "sepId",        \n    type:   "separator"     \n}\n')),Object(a.b)("h3",{id:"spacer"},"Spacer"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"spacer")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the type of a control, set it to "spacer". If not specified - the ',Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of a control, auto-generated if not set")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// spacer\n{\n    id:     "spacerId",     \n    type:   "spacer"        \n}\n')),Object(a.b)("h3",{id:"title"},"Title"),Object(a.b)("p",null,"The ",Object(a.b)("strong",null,"title")," object has the following properties:"),Object(a.b)("table",{className:"webixdoc_links"},Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"type")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),') the item type, set it to "title". If not specified - the ',Object(a.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"id")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"parent")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the parent of the item")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"value")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") the value of the Title control. You need to set either the ",Object(a.b)("b",null,"value")," or ",Object(a.b)("b",null,"html")," property to the title")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"html")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") optional, a string with HTML that should be inserted into the title")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"css")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") adds a custom CSS class")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"tooltip")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"string"),") a tooltip for the control")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"hidden")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether a control is hidden")),Object(a.b)("tr",null,Object(a.b)("td",{className:"webixdoc_links0"},Object(a.b)("b",null,"disabled")),Object(a.b)("td",null,"(",Object(a.b)("i",null,"boolean"),") defines whether a control is disabled")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// title\n{\n    id:         "collection",       \n    type:       "title",                \n    value:      "Music",                \n    tooltip:    "Current collection"    \n}\n')),Object(a.b)("p",null,"check, add links to api and samples"))}d.isMDXComponent=!0}}]);