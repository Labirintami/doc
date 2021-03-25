(window.webpackJsonp=window.webpackJsonp||[]).push([[1401],{1460:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return d})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return b}));var t=n(2),c=n(6),l=(n(0),n(1808)),r=n(1809),d={sidebar_label:"change",title:"change"},o={unversionedId:"calendar/api/calendar_change_event",id:"calendar/api/calendar_change_event",isDocsHomePage:!1,title:"change",description:"@short: fires on change of date selection",source:"@site/docs/calendar/api/calendar_change_event.md",slug:"/calendar/api/calendar_change_event",permalink:"/calendar/api/calendar_change_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/calendar/api/calendar_change_event.md",version:"current",sidebar_label:"change",sidebar:"docs",previous:{title:"cancelClick",permalink:"/calendar/api/calendar_cancelclick_event"},next:{title:"dateHover",permalink:"/calendar/api/calendar_datehover_event"}},i=[],s={rightToc:i};function b(e){var a=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)(r.c,{mdxType:"Short"},"fires on change of date selection"),Object(l.b)(r.d,{mdxType:"Signature"},"change: (date: Date, oldDate: Date, byClick: boolean) => void;"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"date  \t\tDate    \tthe newly selected date"),Object(l.b)("li",{parentName:"ul"},"oldDate   \tDate    \tthe previously selected date"),Object(l.b)("li",{parentName:"ul"},"click \t\tboolean \tdefines whether the change happened because of a click on a date (true), or due to an API call (false)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'calendar.events.on("Change",function(date, oldDate, click){\n    console.log("Change selection from "+oldDate+" to "+date);\n    console.log(click);\n});\n')),Object(l.b)("p",null," api_event"),Object(l.b)(r.b,{mdxType:"Descr"}),Object(l.b)("p",null,"calendar/api/calendar_beforechange_event.md"),Object(l.b)("p",null,"calendar/handling_events.md"),Object(l.b)("a",{href:"https://snippet.dhtmlx.com/7kj7fiek",target:"_blank"},"Calendar. Events"))}b.isMDXComponent=!0}}]);