(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{917:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(2),i=r(6),a=(r(0),r(1808)),o=r(1809),d={sidebar_label:"beforeEditStart",title:"beforeEditStart"},b={unversionedId:"tree/api/tree_beforeeditstart_event",id:"tree/api/tree_beforeeditstart_event",isDocsHomePage:!1,title:"beforeEditStart",description:"@short: fires before editing of an item has started",source:"@site/docs/tree/api/tree_beforeeditstart_event.md",slug:"/tree/api/tree_beforeeditstart_event",permalink:"/tree/api/tree_beforeeditstart_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/tree/api/tree_beforeeditstart_event.md",version:"current",sidebar_label:"beforeEditStart",sidebar:"docs",previous:{title:"beforeEditEnd",permalink:"/tree/api/tree_beforeeditend_event"},next:{title:"beforeExpand",permalink:"/tree/api/tree_beforeexpand_event"}},s=[],l={rightToc:s};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o.c,{mdxType:"Short"},"fires before editing of an item has started"),Object(a.b)(o.d,{mdxType:"Signature"},"beforeEditStart: (value: string, id: string) => boolean | void;"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"value     string  the value of an item"),Object(a.b)("li",{parentName:"ul"},"id        string  the id of an item")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"result\tboolean, void\t\tfalse - to block editing of an item, otherwise true")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'tree.events.on("BeforeEditStart", function(value, id) {\n    // your logic here\n    return false;\n});\n')),Object(a.b)("p",null," api_event"),Object(a.b)(o.b,{mdxType:"Descr"}),Object(a.b)("p",null," tree/05_events/01_events.html"),Object(a.b)(o.a,{mdxType:"Changelog"},"added in v7.0"))}c.isMDXComponent=!0}}]);