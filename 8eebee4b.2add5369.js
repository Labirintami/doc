(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{1005:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return s})),a.d(e,"rightToc",(function(){return c})),a.d(e,"default",(function(){return h}));var t=a(2),o=a(6),d=(a(0),a(1808)),r=(a(1809),{sidebar_label:"showDate",title:"showDate"}),s={unversionedId:"calendar2/api/calendar_showdate_method",id:"calendar2/api/calendar_showdate_method",isDocsHomePage:!1,title:"showDate",description:"`todo",source:"@site/docs/calendar2/api/calendar_showdate_method.md",slug:"/calendar2/api/calendar_showdate_method",permalink:"/calendar2/api/calendar_showdate_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/calendar2/api/calendar_showdate_method.md",version:"current",sidebar_label:"showDate"},c=[],l={rightToc:c};function h(n){var e=n.components,a=Object(o.a)(n,["components"]);return Object(d.b)("wrapper",Object(t.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-todo"},'\n\n<Short>\n shows a specified date and/or opens the calendar in one of the available modes\n\n\n</Short>\n\n\n\n<Signature>\n showDate(date?: Date, mode?: ViewMode): void;\n\n\n</Signature>\n\n\n\n- date   Date       the date that should be shown in the calendar\n- mode   string     optional, the mode in which the calendar will be opened\n\n\n\n~~~js\ncalendar.showDate(new Date(2020,11,12));\n~~~\n api_method\n\n<Descr>\n\nThe <strong>modes</strong> are:\n\n<table className="webixdoc_links">\n    <tbody>\n        <tr>\n            <td className="webixdoc_links0"><b>"calendar"</b></td>\n            <td>shows the days of a month, the default mode</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>"month"</b></td>\n            <td>allows selecting a month of a year</td>\n        </tr>\n        <tr>\n            <td className="webixdoc_links0"><b>"year"</b></td>\n            <td>allows selecting a year</td>\n        </tr>\n    </tbody>\n</table>\n<br/>\n~~~js\n// shows the month of the specified date\ncalendar.showDate(new Date(2020,11,12),"month");\n\n// shows the current month\ncalendar.showDate(null,"month");\n\n// shows the current year together with previous/next years\ncalendar.showDate(new Date(2020,11,12),"year");\n\n// shows the current year\ncalendar.showDate(null,"year");\n~~~\n\n\n</Descr>\n\n\n\n<a href=\'https://snippet.dhtmlx.com/nyfzc8cl\' target=\'_blank\'>Calendar. Showing Particular Calendar Date And Mode</a>\n\n\n\n<Changelog>\n\n\n\n\n</Changelog>\n\n\n\ncalendar/operating_calendar.md#changingcalendarmode\n\n```todo\n')))}h.isMDXComponent=!0}}]);