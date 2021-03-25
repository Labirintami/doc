(window.webpackJsonp=window.webpackJsonp||[]).push([[1690],{1749:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var i=r(2),a=r(6),n=(r(0),r(1808)),o=r(1809),m={sidebar_label:"beforeShow",title:"beforeShow"},c={unversionedId:"form/api/timepicker/timepicker_beforeshow_event",id:"form/api/timepicker/timepicker_beforeshow_event",isDocsHomePage:!1,title:"beforeShow",description:"@short: fires before a control is shown",source:"@site/docs/form/api/timepicker/timepicker_beforeshow_event.md",slug:"/form/api/timepicker/timepicker_beforeshow_event",permalink:"/form/api/timepicker/timepicker_beforeshow_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/timepicker/timepicker_beforeshow_event.md",version:"current",sidebar_label:"beforeShow",sidebar:"docs",previous:{title:"beforeHide",permalink:"/form/api/timepicker/timepicker_beforehide_event"},next:{title:"beforeValidate",permalink:"/form/api/timepicker/timepicker_beforevalidate_event"}},p=[],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o.c,{mdxType:"Short"},"fires before a control is shown"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"value     string|object     the current value of the control")),Object(n.b)("p",null,"param   boolean     false - to prevent a control from being shown, otherwise - true"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("timepicker").events.on("BeforeShow", function(value) {\n    console.log("BeforeShow", value);\n    return true;\n});\n')),Object(n.b)("p",null," api_event"),Object(n.b)(o.b,{mdxType:"Descr"},Object(n.b)("p",null,"The type of the value parameter depends on the applied ",Object(n.b)("a",{parentName:"p",href:"/form/timepicker#addingtimepicker"},"valueFormat")," and ",Object(n.b)("a",{parentName:"p",href:"/form/timepicker#addingtimepicker"},"timeFormat"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("em",{parentName:"li"},'valueFormat: "string"'),"  and ",Object(n.b)("em",{parentName:"li"},"timeFormat:24"),' are specified, the string value will include just the hour and minutes: "00:39"'),Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("em",{parentName:"li"},'valueFormat: "string"'),"  and ",Object(n.b)("em",{parentName:"li"},"timeFormat:12"),' are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"'),Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("em",{parentName:"li"},'valueFormat: "timeObject"'),"  and ",Object(n.b)("em",{parentName:"li"},"timeFormat:24")," are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}"),Object(n.b)("li",{parentName:"ul"},"If ",Object(n.b)("em",{parentName:"li"},'valueFormat: "timeObject"'),"  and ",Object(n.b)("em",{parentName:"li"},"timeFormat:12")," are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}"))),Object(n.b)(o.a,{mdxType:"Changelog"},"added in v7.0"))}b.isMDXComponent=!0}}]);