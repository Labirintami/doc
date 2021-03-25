(window.webpackJsonp=window.webpackJsonp||[]).push([[1706],{1765:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),p=a(6),r=(a(0),a(1808)),c={sidebar_label:"How to create Date picker",title:"How to create Date picker"},o={unversionedId:"calendar2/functionality_and_features/date_picker",id:"calendar2/functionality_and_features/date_picker",isDocsHomePage:!1,title:"How to create Date picker",description:"You can use DHTMLX Calendar as a date picker by putting it inside a popup.",source:"@site/docs/calendar2/functionality_and_features/date_picker.md",slug:"/calendar2/functionality_and_features/date_picker",permalink:"/calendar2/functionality_and_features/date_picker",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/calendar2/functionality_and_features/date_picker.md",version:"current",sidebar_label:"How to create Date picker",sidebar:"docs",previous:{title:"Date ranges in two calendars",permalink:"/calendar2/functionality_and_features/ranges_two_calendars"},next:{title:"Width of Calendar",permalink:"/calendar2/functionality_and_features/width"}},i=[],d={rightToc:i};function l(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can use DHTMLX Calendar as a date picker by putting it inside a popup. "),Object(r.b)("p",null,"First, you should create a popup and then attach a calendar into it. Follow the steps below:"),Object(r.b)("p",null,"1",".",' create an input to enter a date into and give it the id "date-input":'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<input type="text" id="date-input" style={{width: \'200px\'}} readonly/>\n')),Object(r.b)("p",null,"2","."," use corresponding object constructors to create a calendar and a popup objects. Note that in this case ",Object(r.b)("em",{parentName:"p"},"null")," is used instead of container for Calendar:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});\nvar popup = new dhx.Popup();\n')),Object(r.b)("p",null,"3","."," attach the calendar to the popup using the popup/api/popup_attach_method.md method of Popup:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"popup.attach(calendar);\n")),Object(r.b)("p",null,"4",".",' use the popup/api/popup_show_method.md method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'var dateInput = document.getElementById("date-input");\ndateInput.addEventListener("click", function() {\n    popup.show(dateInput);\n});\n')),Object(r.b)("p",null,"5","."," define the logic of closing the popup with calendar using the popup/api/popup_hide_method.md method of Popup. For example, on selecting a new date in the calendar:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'calendar.events.on("change", function() {\n    dateInput.value = calendar.getValue();\n    popup.hide();\n});\n')),Object(r.b)("iframe",{src:"https://snippet.dhtmlx.com/mj7jr6ro?mode=result",frameBorder:"0",className:"snippet_iframe",width:"100%",height:"550"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/mj7jr6ro"},"https://snippet.dhtmlx.com/mj7jr6ro"),"\tCalendar. Date Picker"))}l.isMDXComponent=!0}}]);