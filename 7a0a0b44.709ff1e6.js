(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{882:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return d})),r.d(o,"metadata",(function(){return l})),r.d(o,"rightToc",(function(){return u})),r.d(o,"default",(function(){return b}));var a=r(2),t=r(6),i=(r(0),r(1808)),n=r(1809),d={sidebar_label:"beforeValidate",title:"beforeValidate"},l={unversionedId:"form/api/radiogroup/radiogroup_beforevalidate_event",id:"form/api/radiogroup/radiogroup_beforevalidate_event",isDocsHomePage:!1,title:"beforeValidate",description:"@short: fires before the control value is validated",source:"@site/docs/form/api/radiogroup/radiogroup_beforevalidate_event.md",slug:"/form/api/radiogroup/radiogroup_beforevalidate_event",permalink:"/form/api/radiogroup/radiogroup_beforevalidate_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/radiogroup/radiogroup_beforevalidate_event.md",version:"current",sidebar_label:"beforeValidate",sidebar:"docs",previous:{title:"beforeShow",permalink:"/form/api/radiogroup/radiogroup_beforeshow_event"},next:{title:"change",permalink:"/form/api/radiogroup/radiogroup_change_event"}},u=[],p={rightToc:u};function b(e){var o=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:o,mdxType:"MDXLayout"}),Object(i.b)(n.c,{mdxType:"Short"},"fires before the control value is validated"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"value       string  the value to be validated")),Object(i.b)("p",null,"param   boolean     false - to cancel the default action of the event, otherwise true"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("radiogroup").events.on("BeforeValidate", function(value) {\n    console.log("BeforeValidate", value);\n    return true;\n});\n')),Object(i.b)("p",null," api_event"),Object(i.b)(n.b,{mdxType:"Descr"}),Object(i.b)(n.a,{mdxType:"Changelog"},"added in v7.0"))}b.isMDXComponent=!0}}]);