(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{521:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return d})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(6),l=(t(0),t(1808)),d={sidebar_label:"Initially selected date",title:"Initially selected date"},c={unversionedId:"calendar2/functionality_and_features/selected_date",id:"calendar2/functionality_and_features/selected_date",isDocsHomePage:!1,title:"Initially selected date",description:"If you want to create a calendar with an initially selected date, set the calendar/api/calendarvalueconfig.md property in the configuration object. The property can accept a value in several formats:",source:"@site/docs/calendar2/functionality_and_features/selected_date.md",slug:"/calendar2/functionality_and_features/selected_date",permalink:"/calendar2/functionality_and_features/selected_date",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/calendar2/functionality_and_features/selected_date.md",version:"current",sidebar_label:"Initially selected date",sidebar:"docs",previous:{title:"Initial calendar date",permalink:"/calendar2/functionality_and_features/initial_date"},next:{title:"How to set the selected date in the calendar",permalink:"/calendar2/functionality_and_features/set_selected_date"}},i=[],o={rightToc:i};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If you want to create a calendar with an initially selected date, set the calendar/api/calendar_value_config.md property in the configuration object. The property can accept a value in several formats:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"as a Date object"),Object(l.b)("li",{parentName:"ul"},"as a string"),Object(l.b)("li",{parentName:"ul"},"as an array of Date values for the range mode"),Object(l.b)("li",{parentName:"ul"},"as an array of string values for the range mode")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'// selects a date\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: new Date(2019,01,10)\n});\n\n// selects a date as an array of Date value\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: [new Date(2019,01,10)]\n});\n\n// selects a date as a string\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: ("10/02/19")\n});\n\n// selects a date as an array of string value\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: (["10/02/19"])\n});\n\n// selects dates as an array of Date values(for the range mode)\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: ([new Date(2019,05,03), new Date(2019,05,19)]),\n    range: true  \n});\n\n// selects dates as an array of string values(for the range mode)\nvar calendar = new dhx.Calendar("calendar_container", {\n    value: (["03/06/19", "15/06/19"]),\n    range: true  \n});\n')),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/epjjww3l"},"https://snippet.dhtmlx.com/epjjww3l"),"\tCalendar. Value Initialization"),Object(l.b)("p",null,"The specified date will be highlighted with a round blue marker in the calendar. By default, no date is selected initially."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},'Please note that the format of date in the Calendar is defined by the dateFormat option. So, check that you\'ve set the format of date you want to use in the calendar both in the calendar/api/calendar_value_config.md and in the calendar/api/calendar_dateformat_config.md property. Otherwise, the default format ("%d/%m/%y") will be used.1'))))}s.isMDXComponent=!0}}]);