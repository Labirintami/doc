(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{631:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return p}));var i=n(2),l=n(6),o=(n(0),n(1808)),s=n(1809),c={sidebar_label:"beforeSelect",title:"beforeSelect"},r={unversionedId:"list/api/selection/selection_beforeselect_event",id:"list/api/selection/selection_beforeselect_event",isDocsHomePage:!1,title:"beforeSelect",description:"@short: fires on selecting an item, but before the item is really selected",source:"@site/docs/list/api/selection/selection_beforeselect_event.md",slug:"/list/api/selection/selection_beforeselect_event",permalink:"/list/api/selection/selection_beforeselect_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/list/api/selection/selection_beforeselect_event.md",version:"current",sidebar_label:"beforeSelect",sidebar:"docs",previous:{title:"afterUnSelect",permalink:"/list/api/selection/selection_afterunselect_event"},next:{title:"beforeUnSelect",permalink:"/list/api/selection/selection_beforeunselect_event"}},a=[],b={rightToc:a};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.c,{mdxType:"Short"},"fires on selecting an item, but before the item is really selected"),Object(o.b)(s.d,{mdxType:"Signature"},"beforeSelect: (id: string) => void | boolean;"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"id    string  the id of an item")),Object(o.b)("p",null,"param   boolean     false - to prevent selecting of an item, otherwise - true"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'list.selection.events.on("BeforeSelect", function(id) {\n    console.log(id);\n    return false;\n});\n')),Object(o.b)("p",null," api_method"),Object(o.b)(s.b,{mdxType:"Descr"},Object(o.b)("p",null,"Starting from v7.0, you can also apply the simplified version of the event:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'list.events.on("BeforeSelect", function(id) {\n    console.log(id);\n    return false;\n});\n'))),Object(o.b)("p",null,"list/api/selection/selection_enable_method.md\nlist/api/list_selection_config.md"))}p.isMDXComponent=!0}}]);