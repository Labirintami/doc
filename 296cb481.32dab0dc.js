(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{353:function(e,r,i){"use strict";i.r(r),i.d(r,"frontMatter",(function(){return a})),i.d(r,"metadata",(function(){return l})),i.d(r,"rightToc",(function(){return s})),i.d(r,"default",(function(){return c}));var t=i(2),o=i(6),n=(i(0),i(1808)),d=i(1809),a={sidebar_label:"beforeHide",title:"beforeHide"},l={unversionedId:"form/api/slider/slider_beforehide_event",id:"form/api/slider/slider_beforehide_event",isDocsHomePage:!1,title:"beforeHide",description:"@short: fires before a control is hidden",source:"@site/docs/form/api/slider/slider_beforehide_event.md",slug:"/form/api/slider/slider_beforehide_event",permalink:"/form/api/slider/slider_beforehide_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/slider/slider_beforehide_event.md",version:"current",sidebar_label:"beforeHide",sidebar:"docs",previous:{title:"beforeChangeProperties",permalink:"/form/api/slider/slider_beforechangeproperties_event"},next:{title:"beforeShow",permalink:"/form/api/slider/slider_beforeshow_event"}},s=[],b={rightToc:s};function c(e){var r=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},b,i,{components:r,mdxType:"MDXLayout"}),Object(n.b)(d.c,{mdxType:"Short"},"fires before a control is hidden"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"value     number[]     the current value of the control"),Object(n.b)("li",{parentName:"ul"},"init      boolean     true, if the event is triggered on the control initialization, otherwise false")),Object(n.b)("p",null,"param   boolean     false - to prevent a control from being hidden, otherwise - true"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("slider").events.on("BeforeHide", function(value, init) {\n    console.log("BeforeHide", value, init);\n    return true;\n});\n')),Object(n.b)("p",null," api_event"),Object(n.b)(d.b,{mdxType:"Descr"}),Object(n.b)(d.a,{mdxType:"Changelog"},"added in v7.0"))}c.isMDXComponent=!0}}]);