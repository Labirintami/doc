(window.webpackJsonp=window.webpackJsonp||[]).push([[1190],{1249:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return s}));var r=t(2),n=t(6),o=(t(0),t(1808)),l=t(1809),i={sidebar_label:"beforeValidate",title:"beforeValidate"},d={unversionedId:"form/api/calendar/calendar_beforevalidate_event",id:"form/api/calendar/calendar_beforevalidate_event",isDocsHomePage:!1,title:"beforeValidate",description:"@short: fires before the control value is validated",source:"@site/docs/form/api/calendar/calendar_beforevalidate_event.md",slug:"/form/api/calendar/calendar_beforevalidate_event",permalink:"/form/api/calendar/calendar_beforevalidate_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/calendar/calendar_beforevalidate_event.md",version:"current",sidebar_label:"beforeValidate",sidebar:"docs",previous:{title:"beforeShow",permalink:"/form/api/calendar/calendar_beforeshow_event"},next:{title:"change",permalink:"/form/api/calendar/calendar_change_event"}},c=[],b={rightToc:c};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)(l.c,{mdxType:"Short"},"fires before the control value is validated"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"value       Date|string  the value to be validated")),Object(o.b)("p",null,"param   boolean     false - to cancel the default action of the event, otherwise true"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("datepicker").events.on("BeforeValidate", function(value) {\n    console.log("BeforeValidate", value);\n    return true;\n});\n')),Object(o.b)("p",null," api_event"),Object(o.b)(l.b,{mdxType:"Descr"}),Object(o.b)("p",null," form/api/calendar/calendar_validate_method.md"),Object(o.b)(l.a,{mdxType:"Changelog"},"added in v7.0"))}s.isMDXComponent=!0}}]);