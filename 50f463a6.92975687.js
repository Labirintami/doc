(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{630:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var c=n(2),r=n(6),o=(n(0),n(1808)),l=n(1809),i={sidebar_label:"afterUnSelect",title:"afterUnSelect"},a={unversionedId:"treegrid/api/selection/selection_afterunselect_event",id:"treegrid/api/selection/selection_afterunselect_event",isDocsHomePage:!1,title:"afterUnSelect",description:"@short: fires after unselecting a cell",source:"@site/docs/treegrid/api/selection/selection_afterunselect_event.md",slug:"/treegrid/api/selection/selection_afterunselect_event",permalink:"/treegrid/api/selection/selection_afterunselect_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/treegrid/api/selection/selection_afterunselect_event.md",version:"current",sidebar_label:"afterUnSelect",sidebar:"docs",previous:{title:"afterSelect",permalink:"/treegrid/api/selection/selection_afterselect_event"},next:{title:"beforeSelect",permalink:"/treegrid/api/selection/selection_beforeselect_event"}},s=[],b={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.c,{mdxType:"Short"},"fires after unselecting a cell"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"row\t\tobject\t\tthe config of a row"),Object(o.b)("li",{parentName:"ul"},"col       object      the config of a column")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'treegrid.selection.events.on("AfterUnSelect", function(row, col){\n    console.log("afterUnSelect", row, col); \n});\n')),Object(o.b)("p",null," api_method"),Object(o.b)(l.b,{mdxType:"Descr"},Object(o.b)("p",null,"It is also possible to use the simplified version of the event:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'treegrid.events.on("AfterUnSelect", function(row, col){\n    console.log("afterUnSelect", row, col); \n});\n'))),Object(o.b)(l.a,{mdxType:"Changelog"},Object(o.b)("p",null,"added in v7.0")))}d.isMDXComponent=!0}}]);