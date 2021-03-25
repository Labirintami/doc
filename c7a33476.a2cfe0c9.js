(window.webpackJsonp=window.webpackJsonp||[]).push([[1345],{1404:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return l}));var a=t(2),o=t(6),i=(t(0),t(1808)),s={sidebar_label:"Customization",title:"Customization"},c={unversionedId:"ribbon/fa_icons",id:"ribbon/fa_icons",isDocsHomePage:!1,title:"Customization",description:"Icons",source:"@site/docs/ribbon/fa_icons.md",slug:"/ribbon/fa_icons",permalink:"/ribbon/fa_icons",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/ribbon/fa_icons.md",version:"current",sidebar_label:"Customization",sidebar:"docs",previous:{title:"Work with Ribbon",permalink:"/ribbon/operating_ribbon"},next:{title:"Event Handling",permalink:"/ribbon/handling_events"}},r=[{value:"Icons",id:"icons",children:[]},{value:"Styling",id:"styling",children:[]}],b={rightToc:r};function l(e){var n=e.components,s=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,s,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"icons"},"Icons"),Object(i.b)("p",null,"dhtmlxRibbon uses the ",Object(i.b)("a",{parentName:"p",href:"/helpers/icon"},"icons of the DHTMLX library")," by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on\na page and apply icons for Ribbon controls."),Object(i.b)("p",null,"For example, you can use the ",Object(i.b)("a",{parentName:"p",href:"https://materialdesignicons.com/"},"Material Design")," icon pack by including ",Object(i.b)("a",{parentName:"p",href:"https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css"},"link to its CDN"),"\nafter the source files of dhtmlxRibbon as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="../../codebase/ribbon.js"><\/script>\n<link rel="stylesheet" href="../../codebase/ribbon.css">\n\n<link href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css?v=6.4.4" \n media="all" rel="stylesheet" type="text/css">\n')),Object(i.b)("p",null,"Then you can use the name of the icon as the value of the ",Object(i.b)("strong",null,"icon")," property in the ",Object(i.b)("a",{parentName:"p",href:"/ribbon/loading_json#jsonformattemplates"},"object with the control parameters")," for ribbon:"),Object(i.b)("p",null,Object(i.b)("img",{src:t(2075).default})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'var data = [\n    {\n        type: "block",\n        "items": [\n            {\n                type: "block",\n                "items": [\n                    {\n                        value: "New",\n                        icon: "mdi mdi-file-outline",\n                        size: "auto",\n                    }\n                ]\n            },\n            {\n                type: "block",\n                direction: "col",\n                "items": [\n                    {\n                        value: "Add",\n                        icon: "mdi mdi-plus",\n                        size: "small",\n                    },\n                    {\n                        value: "Remove",\n                        icon: "mdi mdi-minus",\n                        size: "small",\n                    }\n                ]\n            }\n        ]\n    }\n]\n')),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/sfkou9gp"},"https://snippet.dhtmlx.com/sfkou9gp"),"\tRibbon. Custom Icons"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You can use the ",Object(i.b)("a",{parentName:"p",href:"https://fontawesome.com/"},"Font Awesome")," icon pack by including ",Object(i.b)("a",{parentName:"p",href:"https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css"},"link to its CDN")," in the same way."))),Object(i.b)("h2",{id:"styling"},"Styling"),Object(i.b)("p",null,"There is a possibility to make changes in the look and feel of a ribbon. "),Object(i.b)("p",null,Object(i.b)("img",{src:t(2076).default})),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/9ckg47ro"},"https://snippet.dhtmlx.com/9ckg47ro"),"\tRibbon. Custom Css"),Object(i.b)("p",null,"For this you need to take the following steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"add a new CSS class(es) with desired settings in the ","<","style",">"," section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"<style>\n    .my-first-class {\n        /*some styles*/\n    }\n    \n    .my-second-class {\n        /*some styles*/\n    }\n</style>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"specify the name of the created CSS class (or names of classes separated by spaces) as the value of the ",Object(i.b)("a",{parentName:"li",href:"/ribbon/api/ribbon_css_config"},"css")," property in the Ribbon configuration:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'var ribbon = new dhx.Ribbon({\n    css:"my_first_class my_second_class"\n});\n')))}l.isMDXComponent=!0},2075:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},2076:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/custom_style-5bfba6d5c22d386813c4dd0e60e9f71a.png"}}]);