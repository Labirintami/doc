(window.webpackJsonp=window.webpackJsonp||[]).push([[1455],{1514:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return s}));var n=t(2),c=t(6),r=(t(0),t(1808)),l=t(1809),o={sidebar_label:"beforeChange",title:"beforeChange"},d={unversionedId:"calendar/api/calendar_beforechange_event",id:"calendar/api/calendar_beforechange_event",isDocsHomePage:!1,title:"beforeChange",description:"@short: fires before the change of date selection",source:"@site/docs/calendar/api/calendar_beforechange_event.md",slug:"/calendar/api/calendar_beforechange_event",permalink:"/calendar/api/calendar_beforechange_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/calendar/api/calendar_beforechange_event.md",version:"current",sidebar_label:"beforeChange",sidebar:"docs",previous:{title:"showDate",permalink:"/calendar/api/calendar_showdate_method"},next:{title:"cancelClick",permalink:"/calendar/api/calendar_cancelclick_event"}},i=[],b={rightToc:i};function s(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)(l.c,{mdxType:"Short"},"fires before the change of date selection"),Object(r.b)(l.d,{mdxType:"Signature"},"beforeChange: (date: Date, oldDate: Date, byClick: boolean) => boolean | void;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"date  \t\tDate    \tthe newly selected date"),Object(r.b)("li",{parentName:"ul"},"oldDate  \t \tDate    \tthe previously selected date"),Object(r.b)("li",{parentName:"ul"},"byClick \t\tboolean \tdefines whether the change happened because of a click on a date (true), or due to an API call (false)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"result\t\tboolean\t\ttrue - to allow changing date selection, false - to prevent changing date selection")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'calendar.events.on("BeforeChange",function(date, oldDate, click){\n    if (date > new Date())\n        return false;\n});\n')),Object(r.b)("p",null," api_event"),Object(r.b)(l.b,{mdxType:"Descr"},Object(r.b)("p",null,"You can block selection of particular dates by returning ",Object(r.b)("em",{parentName:"p"},"false")," from the event handler.")),Object(r.b)("p",null,"calendar/handling_events.md"),Object(r.b)("a",{href:"https://snippet.dhtmlx.com/7kj7fiek",target:"_blank"},"Calendar. Events"),Object(r.b)("p",null,"calendar/api/calendar_change_event.md"))}s.isMDXComponent=!0}}]);