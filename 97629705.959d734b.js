(window.webpackJsonp=window.webpackJsonp||[]).push([[1015],{1074:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return b})),r.d(o,"metadata",(function(){return d})),r.d(o,"rightToc",(function(){return c})),r.d(o,"default",(function(){return w}));var t=r(2),n=r(6),i=(r(0),r(1808)),a=r(1809),b={sidebar_label:"beforeRowShow",title:"beforeRowShow"},d={unversionedId:"grid/api/grid_beforerowshow_event",id:"grid/api/grid_beforerowshow_event",isDocsHomePage:!1,title:"beforeRowShow",description:"@short: fires before a row is shown on a page",source:"@site/docs/grid/api/grid_beforerowshow_event.md",slug:"/grid/api/grid_beforerowshow_event",permalink:"/grid/api/grid_beforerowshow_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/grid/api/grid_beforerowshow_event.md",version:"current",sidebar_label:"beforeRowShow",sidebar:"docs",previous:{title:"beforeRowHide",permalink:"/grid/api/grid_beforerowhide_event"},next:{title:"cancelColumnDrop",permalink:"/grid/api/grid_cancelcolumndrop_event"}},c=[],s={rightToc:c};function w(e){var o=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:o,mdxType:"MDXLayout"}),Object(i.b)(a.c,{mdxType:"Short"},"fires before a row is shown on a page"),Object(i.b)(a.d,{mdxType:"Signature"},"beforeRowShow: (row: object) => boolean | void;"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"row   object  an object with a row configuration")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"result\tboolean\t\tfalse - to prevent a row from being shown, otherwise true")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'grid.events.on("BeforeRowShow", function(row){\n    // your logic here\n    return false;\n});\n')),Object(i.b)("p",null," api_event"),Object(i.b)(a.b,{mdxType:"Descr"}),Object(i.b)(a.a,{mdxType:"Changelog"},"added in v7.0"),Object(i.b)("p",null," grid/05_events/01_events.html"))}w.isMDXComponent=!0}}]);