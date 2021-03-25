(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{112:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var o=t(2),n=t(6),a=(t(0),t(1808)),i=t(1809),p={sidebar_label:"beforeChangeProperties",title:"beforeChangeProperties"},c={unversionedId:"form/api/form_beforechangeproperties_event",id:"form/api/form_beforechangeproperties_event",isDocsHomePage:!1,title:"beforeChangeProperties",description:"@short: fires before configuration attributes of a Form control are changed dynamically",source:"@site/docs/form/api/form_beforechangeproperties_event.md",slug:"/form/api/form_beforechangeproperties_event",permalink:"/form/api/form_beforechangeproperties_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/form_beforechangeproperties_event.md",version:"current",sidebar_label:"beforeChangeProperties",sidebar:"docs",previous:{title:"afterValidate",permalink:"/form/api/form_aftervalidate_event"},next:{title:"beforeHide",permalink:"/form/api/form_beforehide_event"}},s=[],f={rightToc:s};function b(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},f,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)(i.c,{mdxType:"Short"},"fires before configuration attributes of a Form control are changed dynamically"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"name|id   string      the name (or id, if the name is not specified) of the Form control"),Object(a.b)("li",{parentName:"ul"},"properties     object      an object with configuration attributes of the control and their new values")),Object(a.b)("p",null,"param   boolean     false - to cancel the default action of the event, otherwise true"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'form.events.on("BeforeChangeProperties", function(name, properties) {\n    console.log("BeforeChangeProperties", name, properties);\n    return true;\n});\n')),Object(a.b)("p",null," api_event"),Object(a.b)(i.b,{mdxType:"Descr"}),Object(a.b)("p",null," form/api/form_setproperties_method.md"),Object(a.b)(i.a,{mdxType:"Changelog"},"added in v7.0"))}b.isMDXComponent=!0}}]);