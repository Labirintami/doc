(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{903:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(2),o=a(6),n=(a(0),a(1808)),i=a(1809),l={sidebar_label:"beforeValidate",title:"beforeValidate"},d={unversionedId:"form/api/textarea/textarea_beforevalidate_event",id:"form/api/textarea/textarea_beforevalidate_event",isDocsHomePage:!1,title:"beforeValidate",description:"@short: fires before the control value is validated",source:"@site/docs/form/api/textarea/textarea_beforevalidate_event.md",slug:"/form/api/textarea/textarea_beforevalidate_event",permalink:"/form/api/textarea/textarea_beforevalidate_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/textarea/textarea_beforevalidate_event.md",version:"current",sidebar_label:"beforeValidate",sidebar:"docs",previous:{title:"beforeShow",permalink:"/form/api/textarea/textarea_beforeshow_event"},next:{title:"change",permalink:"/form/api/textarea/textarea_change_event"}},b=[],c={rightToc:b};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i.c,{mdxType:"Short"},"fires before the control value is validated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"value       string  the value to be validated")),Object(n.b)("p",null,"param   boolean     false - to cancel the default action of the event, otherwise true"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("textarea").events.on("BeforeValidate", function(value) {\n    console.log("BeforeValidate", value);\n    return true;\n});\n')),Object(n.b)("p",null," api_event"),Object(n.b)(i.b,{mdxType:"Descr"}),Object(n.b)("p",null," form/api/textarea/textarea_validate_method.md"),Object(n.b)(i.a,{mdxType:"Changelog"},"added in v7.0"))}s.isMDXComponent=!0}}]);