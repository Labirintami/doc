(window.webpackJsonp=window.webpackJsonp||[]).push([[1420],{1479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var i=r(2),n=r(6),o=(r(0),r(1808)),a=r(1809),b={sidebar_label:"beforeResizeStart",title:"beforeResizeStart"},s={unversionedId:"treegrid/api/treegrid_beforeresizestart_event",id:"treegrid/api/treegrid_beforeresizestart_event",isDocsHomePage:!1,title:"beforeResizeStart",description:"@short: fires before resizing of a column has started",source:"@site/docs/treegrid/api/treegrid_beforeresizestart_event.md",slug:"/treegrid/api/treegrid_beforeresizestart_event",permalink:"/treegrid/api/treegrid_beforeresizestart_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/treegrid/api/treegrid_beforeresizestart_event.md",version:"current",sidebar_label:"beforeResizeStart",sidebar:"docs",previous:{title:"beforeExpand",permalink:"/treegrid/api/treegrid_beforeexpand_event"},next:{title:"beforeRowDrag",permalink:"/treegrid/api/treegrid_beforerowdrag_event"}},c=[],d={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.c,{mdxType:"Short"},"fires before resizing of a column has started"),Object(o.b)(a.d,{mdxType:"Signature"},"beforeResizeStart: (col: object, e: MouseEvent) => boolean | void;"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"column\t\tobject\t\tan object with a column configuration"),Object(o.b)("li",{parentName:"ul"},"e\t\t\t\tEvent\t\ta native event object")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"result\t\tboolean\t\tfalse - to block resizing of a column, otherwise true")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'grid.events.on("BeforeResizeStart", function(col,e){\n    // your logic here\n    return false;\n});\n')),Object(o.b)("p",null," api_event"),Object(o.b)(a.b,{mdxType:"Descr"}),Object(o.b)(a.a,{mdxType:"Changelog"},Object(o.b)("p",null,"added in v6.2")))}l.isMDXComponent=!0}}]);