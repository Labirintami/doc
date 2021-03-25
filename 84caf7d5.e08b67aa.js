(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{951:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var i=a(2),n=a(6),r=(a(0),a(1808)),l={sidebar_label:"Initialization",title:"Initialization"},d={unversionedId:"sidebar/init",id:"sidebar/init",isDocsHomePage:!1,title:"Initialization",description:"To add dhtmlxSidebar into an application, you need to take the following simple steps:",source:"@site/docs/sidebar/init.md",slug:"/sidebar/init",permalink:"/sidebar/init",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/sidebar/init.md",version:"current",sidebar_label:"Initialization",sidebar:"docs",previous:{title:"width",permalink:"/sidebar/api/sidebar_width_config"},next:{title:"Custom HTML",permalink:"/sidebar/customhtmlbutton"}},s=[{value:"Include source files",id:"include-source-files",children:[]},{value:"Create a container",id:"create-a-container",children:[]},{value:"Initialize Sidebar",id:"initialize-sidebar",children:[]},{value:"Load data into Sidebar",id:"load-data-into-sidebar",children:[]}],b={rightToc:s};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To add dhtmlxSidebar into an application, you need to take the following simple steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml"},"Download the Sidebar package")," and unpack it into a folder of your project"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#includesourcefiles"},"Include source files")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#createacontainer"},"Create a container")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#initializesidebar"},"Initialize Sidebar")," with the object constructor"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#loaddataintosidebar"},"Load data into Sidebar"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>How to Start with dhtmlxSidebar</title>         \n        <script type="text/javascript" src="../../codebase/suite.js"><\/script>\n        <link rel="stylesheet" href="../../codebase/suite.css">\n    </head>\n    <body>\n        <div id="sidebar_container"></div>\n        <script>\n            // creating dhtmlxSidebar\n            var sidebar = new dhx.Sidebar("sidebar_container");\n        <\/script>\n    </body>\n</html>\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/x0qpt7pk"},"https://snippet.dhtmlx.com/x0qpt7pk"),"\tSidebar. Basic Initialization"),Object(r.b)("h2",{id:"include-source-files"},"Include source files"),Object(r.b)("p",null,"Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"suite.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"suite.css"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="../../codebase/suite.js"><\/script>\n<link rel="stylesheet" href="../../codebase/suite.css">\n')),Object(r.b)("h2",{id:"create-a-container"},"Create a container"),Object(r.b)("p",null,'Add a container for the Sidebar and give it an id, e.g. "sidebar_container":'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<div id="sidebar_container"></div>\n')),Object(r.b)("h2",{id:"initialize-sidebar"},"Initialize Sidebar"),Object(r.b)("p",null,"Initialize Sidebar with the ",Object(r.b)("inlineCode",{parentName:"p"},"dhx.Sidebar")," object constructor. The constructor takes two parameters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the HTML object on the page that serves as the sidebar container"),Object(r.b)("li",{parentName:"ul"},"an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var sidebar = new dhx.Sidebar("sidebar_container",{\n    // config options\n});\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/x0qpt7pk"},"https://snippet.dhtmlx.com/x0qpt7pk"),"\tSidebar. Basic Initialization"),Object(r.b)("p",null,"###Configuration properties"),Object(r.b)("p",null,"{{api"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_collapsed_config.md - defines that a sidebar is initialized in the collapsed state"),Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_css_config.md - adds style classes for the component"),Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_data_config.md - specifies an array of data objects to set into Sidebar "),Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_menucss_config.md - adds style classes to all containers of Sidebar controls with nested items"),Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_minwidth_config.md - sets the minimal width of a sidebar in the collapsed state, 69 by default"),Object(r.b)("li",{parentName:"ul"},"sidebar/api/sidebar_width_config.md - sets the width of a sidebar, 200 by default")),Object(r.b)("p",null,"}}"),Object(r.b)("h2",{id:"load-data-into-sidebar"},"Load data into Sidebar"),Object(r.b)("p",null,"There are two handy ways of loading data, i.e. a set of controls into Sidebar:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"from an external file with the help of the ",Object(r.b)("strong",null,"load()")," method of tree collection:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var sidebar = new dhx.Sidebar("sidebar_container");\nsidebar.data.load("../common/dataset.json");\n')),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/mq4ggjmm"},"https://snippet.dhtmlx.com/mq4ggjmm"),"\tSidebar. Init Load"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"from a local source using the ",Object(r.b)("strong",null,"parse()")," method of tree collection:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var data = [\n    {\n        "id": "dashboard",\n        "value": "Dashboard",\n        "icon": "mdi mdi-view-dashboard"\n    },\n    {\n        "id": "statistics",\n        "value": "Statistics",\n        "icon": "mdi mdi-chart-line"\n    },\n    {\n        "id": "reports",\n        "value": "Reports",\n        "icon": "mdi mdi-file-chart"\n    }\n];\n\nvar sidebar = new dhx.Sidebar("sidebar_container", {css: "dhx_widget--border_right" });\nsidebar.data.parse(data);\n')),Object(r.b)("p",null,"Detailed information on loading data into Sidebar is given in the article sidebar/data_loading.md."))}c.isMDXComponent=!0}}]);