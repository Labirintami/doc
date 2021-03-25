(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{145:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return r})),l.d(t,"default",(function(){return d}));var a=l(2),n=l(6),b=(l(0),l(1808)),c={sidebar_label:"DatePicker",title:"DatePicker"},i={unversionedId:"form/calendar",id:"form/calendar",isDocsHomePage:!1,title:"DatePicker",description:"An input with a calendar attached to it for selecting a date.",source:"@site/docs/form/calendar.md",slug:"/form/calendar",permalink:"/form/calendar",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/calendar.md",version:"current",sidebar_label:"DatePicker",sidebar:"docs",previous:{title:"Button",permalink:"/form/button"},next:{title:"Checkbox",permalink:"/form/checkbox"}},r=[{value:"Adding DatePicker",id:"adding-datepicker",children:[]},{value:"Working with DatePicker",id:"working-with-datepicker",children:[{value:"Working with the dhtmlxCalendar widget",id:"working-with-the-dhtmlxcalendar-widget",children:[]}]}],o={rightToc:r};function d(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An input with a calendar attached to it for selecting a date."),Object(b.b)("p",null,Object(b.b)("img",{alt:"DatePicker",src:l(1890).default})),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/ikyyekxq"},"https://snippet.dhtmlx.com/ikyyekxq"),"\tForm. All DhxForm Inputs"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/q3yk7e6s"},"https://snippet.dhtmlx.com/q3yk7e6s"),"\tForm. DatePicker"),Object(b.b)("h2",{id:"adding-datepicker"},"Adding DatePicker"),Object(b.b)("p",null,"You can easily add a DatePicker control during initialization of a form:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'var form = new dhx.Form("form_container", {\n    rows: [\n        {\n            type: "datepicker",\n            name: "datepicker",\n            label: "date",\n            labelWidth: "50px"\n        }\n    ]\n});\n')),Object(b.b)("p",null,"###Attributes"),Object(b.b)("p",null,"You can provide the following attributes in the configuration object of a DatePicker:"),Object(b.b)("table",{className:"webixdoc_links"},Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"type")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),') the type of a control, set it to "datepicker"')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"name")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") the name of a control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"id")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"value")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"Date|string"),") the value of a datepicker")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"valueFormat")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string|Date"),') defines the format of the value that will be returned while getting the current value of the control: "string" (default) or "Date"')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"width")),Object(b.b)("td",null,"(",Object(b.b)("i",null,'string|number|"content"'),") the width of a control ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"height")),Object(b.b)("td",null,"(",Object(b.b)("i",null,'string|number|"content"'),") the height of a control ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"padding")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string|number"),") sets padding between a cell and a border of a DatePicker control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"css")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") adds style classes to a control ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"disabled")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") defines whether a control is enabled (",Object(b.b)("i",null,"false"),") or disabled (",Object(b.b)("i",null,"true"),") ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"required")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") ",Object(b.b)("a",{href:"https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform"},"defines whether a control is required")," ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"hidden")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") defines whether a control is hidden")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"helpMessage")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") adds a help message to a control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"preMessage")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") a message that contains instructions for interacting with the control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"successMessage")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") a message that appears in case of successful validation of the control value")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"errorMessage")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") a message that appears in case of error during validation of the control value")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"label")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") specifies a label for a control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"labelWidth")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string|number"),") sets the width of the label of a control")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"hiddenLabel")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") invisible label that will be used to identify the input on the server side")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"labelPosition")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),') defines the position of a label: "left"|"top"')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"validation")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"function"),") ",Object(b.b)("a",{href:"https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform"},"the validation function"),", takes as a parameter the value to validate and returns ",Object(b.b)("i",null,"true/false")," to indicate the result of validation")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"icon")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") the name of an ",Object(b.b)("a",{href:"https://docs.dhtmlx.com/suite/helpers__icon.html"},"icon")," from the used icon font")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"placeholder")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),") a tip for the input ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"editable")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") allows a user to enter the value of the control manually, false by default ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"mode")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),') specifies the mode of displaying a calendar: "calendar" (default), "month", "year" ')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"date")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"Date|string"),") defines the date that will be opened when the calendar is created, differs from the selected date (set by ",Object(b.b)("b",null,"value"),") ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"mark")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"function"),") adds a CSS class to specific days ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"disabledDates")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"function"),") allows disabling some date intervals, day labels are dimmed ")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"weekStart")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),') sets the starting day of the week: "monday" or "sunday" (default) ')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"weekNumbers")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") defines whether to show the numbers of weeks, ",Object(b.b)("i",null,"false")," by default")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"timePicker")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") adds a timepicker into a calendar, ",Object(b.b)("i",null,"false")," by default")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"timeFormat")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"number"),") defines the time format of a timepicker: 12-hour or 24-hour (12 or 24 (default), correspondingly)")),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"dateFormat")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"string"),') defines the format of dates in the calendar, "%d/%m/%y" by default')),Object(b.b)("tr",null,Object(b.b)("td",{className:"webixdoc_links0"},Object(b.b)("b",null,"thisMonthOnly")),Object(b.b)("td",null,"(",Object(b.b)("i",null,"boolean"),") hides dates of the previous/next months relative to the currently displayed one")))),Object(b.b)("h2",{id:"working-with-datepicker"},"Working with DatePicker"),Object(b.b)("p",null,"You can manipulate a DatePicker control by using methods (or ",Object(b.b)("a",{parentName:"p",href:"#eventhandling"},"events"),") of the object returned by the ",Object(b.b)("a",{parentName:"p",href:"/form/api/form_getitem_method"},"getItem()")," method."),Object(b.b)("p",null,"For example, you can get the value of the control:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'var value = form.getItem("datepicker").getValue();\n// -> "03/06/19"\n\nvar value = form.getItem("datepicker").getValue(true);\n// -> Mon Jun 03 2019 00:00:00 GMT+0300\n')),Object(b.b)("p",null,"###List of the control methods:"),Object(b.b)("p",null,"{{api"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_clear_method.md - clears a value of a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_clearvalidate_method.md - clears validation of a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_disable_method.md - disables a DatePicker control on a page"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_enable_method.md - enables a disabled DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_focus_method.md - sets focus to a control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_getproperties_method.md - returns an object with the available configuration attributes of the control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_getvalue_method.md - returns the current value of a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_getwidget_method.md - returns the dhtmlxCalendar widget attached to a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_hide_method.md - hides a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_isdisabled_method.md - checks whether a DatePicker control is disabled"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_isvisible_method.md - checks whether a DatePicker control is visible on the page"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_setproperties_method.md - allows changing available configuration attributes of the control dynamically"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_setvalue_method.md - sets a date in a DatePicker control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_show_method.md - shows a DatePicker control on the page"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_validate_method.md - validates a DatePicker control\n}}")),Object(b.b)("h3",{id:"eventhandling"},"List of the control events:"),Object(b.b)("p",null,"{{api"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_afterchangeproperties_event.md - fires after configuration attributes of the control have been changed dynamically"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_afterhide_event.md - fires after a control is hidden"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_aftershow_event.md - fires after a control is shown"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_aftervalidate_event.md - fires after the control value is validated"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_beforechangeproperties_event.md - fires before configuration attributes of the control are changed dynamically"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_beforehide_event.md - fires before a control is hidden"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_beforeshow_event.md - fires before a control is shown"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_beforevalidate_event.md - fires before the control value is validated"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_change_event.md - fires on changing the value of a control"),Object(b.b)("li",{parentName:"ul"},"form/api/calendar/calendar_input_event.md - fires when a user enters the value of a control in the input manually\n}}")),Object(b.b)("h3",{id:"working-with-the-dhtmlxcalendar-widget"},"Working with the dhtmlxCalendar widget"),Object(b.b)("p",null,"There is a possibility to use methods of dhtmlxCalendar via the ",Object(b.b)("strong",null,"getWidget()")," method of a DatePicker control."),Object(b.b)("p",null,"For example, you can show the current month in the control. To do this, you need to get the widget attached to the DatePicker control and then use the ",Object(b.b)("a",{parentName:"p",href:"/calendar/api/calendar_showdate_method"},"showDate()")," method of this widget."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'var datepicker = form.getItem("datepicker").getWidget();  // -> dhtmlxCalendar\ndatepicker.showDate(null,"month"); // shows the current month\n')),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/0aqkdsi7"},"https://snippet.dhtmlx.com/0aqkdsi7"),"\tForm. Get Widget Of Control"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"form/api/refs/calendar_methods.md"),Object(b.b)("li",{parentName:"ul"},"form/api/refs/calendar_events.md")))}d.isMDXComponent=!0},1890:function(e,t,l){"use strict";l.r(t),t.default=l.p+"assets/images/form_datepicker-c2eb943a848cd80faac466d94920e965.png"}}]);