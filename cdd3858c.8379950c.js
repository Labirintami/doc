(window.webpackJsonp=window.webpackJsonp||[]).push([[1392],{1451:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var b=a(2),i=a(6),n=(a(0),a(1808)),r={sidebar_label:"Initialization",title:"Initialization"},l={unversionedId:"tabbar/init",id:"tabbar/init",isDocsHomePage:!1,title:"Initialization",description:"To add dhtmlxTabbar into an application, you need to take the following simple steps:",source:"@site/docs/tabbar/init.md",slug:"/tabbar/init",permalink:"/tabbar/init",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/tabbar/init.md",version:"current",sidebar_label:"Initialization",sidebar:"docs",previous:{title:"views",permalink:"/tabbar/api/tabbar_views_config"},next:{title:"Configuration",permalink:"/tabbar/configuring_tabbar"}},c=[{value:"Include source files",id:"include-source-files",children:[]},{value:"Create a container",id:"create-a-container",children:[]},{value:"Define Tabbar structure",id:"define-tabbar-structure",children:[]},{value:"Initialize Tabbar",id:"initialize-tabbar",children:[]}],s={rightToc:c};function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To add dhtmlxTabbar into an application, you need to take the following simple steps:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml"},"Download the Tabbar package")," and unpack it into a folder of your project"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#includesourcefiles"},"Include source files")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#createacontainer"},"Create a container")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#definetabbarstructure"},"Define Tabbar structure")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#initializetabbar"},"Initialize Tabbar")," with the object constructor")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>How to Start with dhtmlxTabbar</title>         \n        <script type="text/javascript" src="../../codebase/suite.js"><\/script>\n        <link rel="stylesheet" href="../../codebase/suite.css">\n    </head>\n    <body>\n        <div id="tabbar_container"></div>\n        <script>\n            // creating dhtmlxTabbar\n            var tabbar = new dhx.Tabbar("tabbar_container",{\n                views:[ \n                    { tab: "left", css:"panel flex"},\n                    { tab: "west", css:"panel flex"},\n                    { tab: "east", css:"panel flex"},\n                    { tab: "right", css:"panel flex"}\n                ]\n            });\n        <\/script>\n    </body>\n</html>\n')),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/uysfjo5z"},"https://snippet.dhtmlx.com/uysfjo5z"),"\tTabbar. Basic Initialization"),Object(n.b)("h2",{id:"include-source-files"},"Include source files"),Object(n.b)("p",null,"Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"suite.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"suite.css"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="../../codebase/suite.js"><\/script>\n<link rel="stylesheet" href="../../codebase/suite.css">\n')),Object(n.b)("h2",{id:"create-a-container"},"Create a container"),Object(n.b)("p",null,'Add a container for the Tabbar and give it an id, e.g. "tabbar_container":'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-html"},'<div id="tabbar_container"></div>\n')),Object(n.b)("h2",{id:"define-tabbar-structure"},"Define Tabbar structure"),Object(n.b)("p",null,"At this step you should specify the structure of your future Tabbar. Each tab represents an object with attributes, such as the name of a tab and a CSS class applied to a tab.\nFor example, Tabbar can have 4 tabs. You need to define their configuration objects and place them into the ",Object(n.b)("strong",null,"views")," array, like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'var views = [\n    { tab: "left", css:"panel flex"},\n    { tab: "west", css:"panel flex"},\n    { tab: "east", css:"panel flex"},\n    { tab: "right", css:"panel flex"}\n]\n')),Object(n.b)("h2",{id:"initialize-tabbar"},"Initialize Tabbar"),Object(n.b)("p",null,"Initialize Tabbar with the ",Object(n.b)("inlineCode",{parentName:"p"},"dhx.Tabbar")," object constructor. The constructor takes two parameters:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"the HTML object on the page that serves as the Tabbar container"),Object(n.b)("li",{parentName:"ul"},"an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'var tabbar = new dhx.Tabbar("tabbar_container",{\n    mode:"bottom",\n    views:views\n});\n')),Object(n.b)("p",null,"###Configuration properties"),Object(n.b)("p",null,"{{api"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_activetab_config.md - sets the currently active tab"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_closable_config.md - adds close buttons into tabs"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_css_config.md - the name of a CSS class(es) applied to Tabbar"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_disabled_config.md - makes tabs disabled"),Object(n.b)("li",{parentName:"ul"},'tabbar/api/tabbar_mode_config.md - specifies the mode of displaying a tabbar: "top"(default)|"bottom"|"left"|"right"'),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_nocontent_config.md - defines whether tabs contain any content, ",Object(n.b)("i",null,"false")," by default"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_tabalign_config.md - sets alignment for tabs"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_tabautoheight_config.md - defines whether the height of tabs is automatically adjusted to the height of the tabbar container"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_tabautowidth_config.md - defines whether the width of tabs is automatically adjusted to the width of the tabbar container"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_tabheight_config.md - sets the height of a tab, 45 by default"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_tabwidth_config.md - sets the width of a tab, 150 by default"),Object(n.b)("li",{parentName:"ul"},"tabbar/api/tabbar_views_config.md - defines the configuration of tabs")),Object(n.b)("p",null,"}}"))}o.isMDXComponent=!0}}]);