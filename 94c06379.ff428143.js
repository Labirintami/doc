(window.webpackJsonp=window.webpackJsonp||[]).push([[996],{1055:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return f})),r.d(t,"metadata",(function(){return d})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(1808)),i=r(1809),f={sidebar_label:"afterHide",title:"afterHide"},d={unversionedId:"form/api/form_afterhide_event",id:"form/api/form_afterhide_event",isDocsHomePage:!1,title:"afterHide",description:"@short: fires after hiding a control of Form",source:"@site/docs/form/api/form_afterhide_event.md",slug:"/form/api/form_afterhide_event",permalink:"/form/api/form_afterhide_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/form_afterhide_event.md",version:"current",sidebar_label:"afterHide",sidebar:"docs",previous:{title:"afterChangeProperties",permalink:"/form/api/form_afterchangeproperties_event"},next:{title:"afterSend",permalink:"/form/api/form_aftersend_event"}},m=[],c={rightToc:m};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.c,{mdxType:"Short"},"fires after hiding a control of Form"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"name|id\t\tstring\t\tthe name (or id, if the name is not specified) of the Form control"),Object(a.b)("li",{parentName:"ul"},"value     any         the current value of the control")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'form.events.on("AfterHide", function(name, value) {\n    console.log("AfterHide", name, value); \n});\n')),Object(a.b)("p",null," api_event"),Object(a.b)(i.b,{mdxType:"Descr"}),Object(a.b)("p",null," form/api/form_beforehide_event.md"),Object(a.b)(i.a,{mdxType:"Changelog"},"- added in v6.5 - Before v7.0, the event took one parameter - the control id. - Starting from v7.0, the event takes two parameters: ",Object(a.b)("strong",null,"name|id")," and ",Object(a.b)("strong",null,"value"),"."))}l.isMDXComponent=!0}}]);