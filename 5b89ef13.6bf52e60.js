(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{694:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return r})),t.d(a,"default",(function(){return s}));var i=t(2),n=t(6),l=(t(0),t(1808)),o={sidebar_label:"Initialization",title:"Initialization"},c={unversionedId:"dataview/initialization",id:"dataview/initialization",isDocsHomePage:!1,title:"Initialization",description:"To initialize dhtmlxDataView on a page, you need to take the following simple steps:",source:"@site/docs/dataview/initialization.md",slug:"/dataview/initialization",permalink:"/dataview/initialization",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/dataview/initialization.md",version:"current",sidebar_label:"Initialization",sidebar:"docs",previous:{title:"beforeUnSelect",permalink:"/dataview/api/selection/selection_beforeunselect_event"},next:{title:"Configuration",permalink:"/dataview/configuration"}},r=[{value:"Include source files",id:"include-source-files",children:[]},{value:"Create a container",id:"create-a-container",children:[]},{value:"Initialize DataView",id:"initialize-dataview",children:[{value:"Configuration properties",id:"configuration-properties",children:[]}]},{value:"Load data into DataView",id:"load-data-into-dataview",children:[]}],d={rightToc:r};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To initialize dhtmlxDataView on a page, you need to take the following simple steps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml"},"Download the DataView package")," and unpack it into a folder of your project"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#includesourcefiles"},"Include source files")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#createacontainer"},"Create a container")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#initializedataview"},"Initialize DataView")," with the object constructor"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#loaddataintodataview"},"Load data into DataView"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>How to Start with dhtmlxDataView</title>         \n        <script type="text/javascript" src="../../codebase/suite.js"><\/script>\n        <link rel="stylesheet" href="../../codebase/suite.css">\n    </head>\n    <body>\n        <div id="dataview_container"></div>\n        <script>\n            // creating dhtmlxDataView\n            var dataview = new dhx.DataView("dataview_container",{\n                itemsInRow: 5\n            });\n        <\/script>\n    </body>\n</html>\n')),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/7rjmp5ol"},"https://snippet.dhtmlx.com/7rjmp5ol"),"\tDataview. Basic Initialization"),Object(l.b)("h2",{id:"include-source-files"},"Include source files"),Object(l.b)("p",null,"Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"suite.js")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"suite.css"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="../../codebase/suite.js"><\/script>\n<link rel="stylesheet" href="../../codebase/suite.css">\n')),Object(l.b)("h2",{id:"create-a-container"},"Create a container"),Object(l.b)("p",null,'Add a container for DataView and give it an id, for example "dataview_container":'),Object(l.b)("p",null,"{{snippet\tindex.html}}"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div id="dataview_container"></div>\n')),Object(l.b)("h2",{id:"initialize-dataview"},"Initialize DataView"),Object(l.b)("p",null,"Initialize DataView with the ",Object(l.b)("inlineCode",{parentName:"p"},"dhx.DataView")," object constructor. The constructor has two parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the HTML container for DataView,"),Object(l.b)("li",{parentName:"ul"},"optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.")),Object(l.b)("p",null,"{{snippet\tindex.html}}"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'// creating dhtmlxDataView\nvar dataview = new dhx.DataView("dataview_container", {\n    itemsInRow: 5\n});\n')),Object(l.b)("p",null,"There is a set of properties you can specify for DataView to optimize its configuration for your needs. Read the details below."),Object(l.b)("h3",{id:"configuration-properties"},"Configuration properties"),Object(l.b)("p",null,"You can specify the following properties in the configuration object of DataView:"),Object(l.b)("p",null,"{{api"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_css_config.md - adds a CSS class(es) to the component"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_data_config.md - specifies an array of data objects to set into the dataview "),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_dragmode_config.md - enables drag-n-drop in DataView"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_editable_config.md - enables editing in DataView"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of DataView items"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_gap_config.md - sets margins for DataView items"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_height_config.md - sets the height of Dataview"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_itemheight_config.md - sets the height of an item"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_itemsinrow_config.md - specifies the number of data items in a row"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_keynavigation_config.md - enables/disables navigation in DataView by arrow keys"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_multiselection_config.md - enables selection of multiple DataView items"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_selection_config.md - enables selection of DataView items"),Object(l.b)("li",{parentName:"ul"},"dataview/api/dataview_template_config.md - specifies a template for DataView items")),Object(l.b)("p",null,"}}"),Object(l.b)("h2",{id:"load-data-into-dataview"},"Load data into DataView"),Object(l.b)("p",null,"Finally, you are to load DataView with data. You can load inline or external data into DataView."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"to load data from a local source, use the data_collection/api/parse.md method of the Data Collection object:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'var dataview = new dhx.DataView("dataview_container",{\n     itemsInRow: 5\n});\n\ndataview.data.parse(data);\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"to load data from an external file, use the data_collection/api/load.md method of the Data Collection object:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'var dataview = new dhx.DataView("dataview_container",{\n    itemsInRow: 5\n});\n\ndataview.data.load("../common/dataset.json");\n')),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/7rjmp5ol"},"https://snippet.dhtmlx.com/7rjmp5ol"),"\tDataview. Basic Initialization"))}s.isMDXComponent=!0}}]);