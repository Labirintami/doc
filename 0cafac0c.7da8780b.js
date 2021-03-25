(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{135:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return r})),o.d(t,"default",(function(){return d}));var l=o(2),b=o(6),n=(o(0),o(1808)),a={sidebar_label:"RadioGroup",title:"RadioGroup"},i={unversionedId:"form/radiogroup",id:"form/radiogroup",isDocsHomePage:!1,title:"RadioGroup",description:"A control intended for creating groups of Radio buttons.",source:"@site/docs/form/radiogroup.md",slug:"/form/radiogroup",permalink:"/form/radiogroup",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/radiogroup.md",version:"current",sidebar_label:"RadioGroup",sidebar:"docs",previous:{title:"Input",permalink:"/form/input"},next:{title:"Select",permalink:"/form/select"}},r=[{value:"Adding RadioGroup",id:"adding-radiogroup",children:[{value:"Attributes of RadioGroup",id:"attributes-of-radiogroup",children:[]},{value:"Attributes of RadioButton",id:"attributes-of-radiobutton",children:[]}]},{value:"Working with RadioGroup",id:"working-with-radiogroup",children:[]}],c={rightToc:r};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A control intended for creating groups of Radio buttons."),Object(n.b)("p",null,Object(n.b)("img",{alt:"RadioGroup control",src:o(1889).default})),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/ikyyekxq"},"https://snippet.dhtmlx.com/ikyyekxq"),"\tForm. All DhxForm Inputs"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/ycp1cbct"},"https://snippet.dhtmlx.com/ycp1cbct"),"\tForm. Radio Buttons"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/1pzybtja"},"https://snippet.dhtmlx.com/1pzybtja"),"\tForm. Blocks"),Object(n.b)("h2",{id:"adding-radiogroup"},"Adding RadioGroup"),Object(n.b)("p",null,"You can easily add a RadioGroup control during initialization of a form:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'var form = new dhx.Form("form_container", { \n    rows: [\n        {\n            id: "radiogroup",\n            name: "radiogroup",\n            type: "radioGroup",\n            required: true,\n            label: "Radio Group",\n            labelWidth: 140,\n            labelPosition: "left",\n            helpMessage: " Help information",\n            value: "1",\n            options: {\n                rows: [\n                    {\n                        type: "radioButton",\n                        text: "Select 1",\n                        value: "1",\n                    },\n                    {\n                        type: "radioButton",\n                        text: "Select 2",\n                        value: "2"\n                    },\n                ]\n            }\n        }\n     ]\n});\n')),Object(n.b)("h3",{id:"attributes-of-radiogroup"},"Attributes of RadioGroup"),Object(n.b)("p",null,"You can provide the following attributes in the configuration object of a RadioGroup:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"type")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') the type of a control, set it to "radioGroup"')),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"name")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the name of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"options")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"object"),") an object with options of a RadioGroup. The object can contain the following attributes:",Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("b",null,"width")," - (",Object(n.b)("i",null,'string|number|"content"'),") the width of a RadioGroup"),Object(n.b)("li",null,Object(n.b)("b",null,"height")," - (",Object(n.b)("i",null,'string|number|"content"'),") the height of a RadioGroup "),Object(n.b)("li",null,Object(n.b)("b",null,"padding")," - (",Object(n.b)("i",null,"string|number"),") sets padding between a cell and a border of a RadioGroup"),Object(n.b)("li",null,Object(n.b)("b",null,"css")," - (",Object(n.b)("i",null,"string"),") adds style classes to a RadioGroup"),Object(n.b)("li",null,Object(n.b)("b",null,"rows")," - (",Object(n.b)("i",null,"array"),") arranges radio buttons inside the RadioGroup control vertically"),Object(n.b)("li",null,Object(n.b)("b",null,"cols")," - (",Object(n.b)("i",null,"array"),") arranges radio buttons inside the RadioGroup control horizontally")))),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"value")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the initial value of a RadioGroup. The option has a higher priority than the ",Object(n.b)("b",null,"checked")," attribute of a RadioButton")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"width")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the width of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"height")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the height of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"padding")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string|number"),") sets padding between a cell and a border of a RadioGroup control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"css")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds style classes to a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"disabled")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a control is enabled (",Object(n.b)("i",null,"false"),") or disabled (",Object(n.b)("i",null,"true"),")")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"hidden")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a RadioGroup is hidden")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"required")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") ",Object(n.b)("a",{href:"https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform"},"defines whether a control is required"))),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"label")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") specifies a label for a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"hiddenLabel")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") invisible label that will be used to identify the input on the server side")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"labelPosition")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') defines the position of a label: "left"|"top"')),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"labelWidth")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string|number"),") sets the width of the label of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"helpMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds a help message to a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"preMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that contains instructions for interacting with the control, applied for all radio buttons in a group")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"successMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that appears in case of successful validation of the control value, applied for all radio buttons in a group")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"errorMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that appears in case of error during validation of the control value, applied for all radio buttons in a group")))),Object(n.b)("h3",{id:"attributes-of-radiobutton"},"Attributes of RadioButton"),Object(n.b)("p",null,"You can provide the following attributes in the configuration object of a radio button:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"type")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') the type of a control, set it to "radioButton"')),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"checked")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines the initial state of a radio button, only one radio button can be checked at a time")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"hidden")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a radio button is hidden")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"value")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") mandatory, the value of a radioButton")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"text")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the text label of a radio button")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"width")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the width of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"height")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the height of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"padding")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string|number"),") sets padding between a cell and a border of a radio button")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"css")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds style classes to a control")))),Object(n.b)("h2",{id:"working-with-radiogroup"},"Working with RadioGroup"),Object(n.b)("p",null,"You can manipulate a RadioGroup control by using methods (or ",Object(n.b)("a",{parentName:"p",href:"#eventhandling"},"events"),") of the object returned by the ",Object(n.b)("a",{parentName:"p",href:"/form/api/form_getitem_method"},"getItem()")," method."),Object(n.b)("p",null,"For example, you can get the value of the control:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'var value = form.getItem("radiogroup").getValue();\n')),Object(n.b)("p",null,"###List of the control methods:"),Object(n.b)("p",null,"{{api"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_clear_method.md - clears a value of a RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_clearvalidate_method.md - clears validation of a RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_disable_method.md - disables a RadioGroup control on a page"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_enable_method.md - enables a disabled RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_focus_method.md - sets focus to the radio button of the RadioGroup control by its id"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_getproperties_method.md - returns an object with the available configuration attributes of the control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_getvalue_method.md - returns the current value of a RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_hide_method.md - hides a RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_isdisabled_method.md - checks whether a RadioGroup control is disabled"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_isvisible_method.md - checks whether a RadioGroup control is visible on the page"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_setproperties_method.md - allows changing available configuration attributes of the control dynamically"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_setvalue_method.md - sets the value for a RadioGroup control"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_show_method.md - shows a RadioGroup control on the page"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_validate_method.md - validates a RadioGroup control\n}}")),Object(n.b)("h3",{id:"eventhandling"},"List of the control events:"),Object(n.b)("p",null,"{{api"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_afterchangeproperties_event.md - fires after configuration attributes of the control have been changed dynamically"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_afterhide_event.md - fires after a control is hidden"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_aftershow_event.md - fires after a control is shown"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_aftervalidate_event.md - fires after the control value is validated"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_beforechangeproperties_event.md - fires before configuration attributes of the control are changed dynamically"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_beforehide_event.md - fires before a control is hidden"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_beforeshow_event.md - fires before a control is shown"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_beforevalidate_event.md - fires before the control value is validated"),Object(n.b)("li",{parentName:"ul"},"form/api/radiogroup/radiogroup_change_event.md - fires on changing the value of a control\n}}")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"form/api/refs/radiogroup_methods.md"),Object(n.b)("li",{parentName:"ul"},"form/api/refs/radiogroup_events.md")))}d.isMDXComponent=!0},1889:function(e,t,o){"use strict";o.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAB8CAYAAABDsqPQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wUDDjAdMI+UMgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAARk0lEQVR4nO2de3AUVb6AP3nMJk4eDKIdItHZBOMgGiKmEgNsTFlEg3h7gbJgXR56UyKIdTEl0fJBuRsXzRYCFaV8xFs7rgiyyfWuMUuEGGoryQq5SUUdAiyTCONcgyGtkckkmcrsSOL9Y5gwQ6ZDMpKeXDlfFX/Q0+d3znS+Pqf7nO7fXDUwMPAjAkEQJoS7AYLxi5BDoIqQQ6CKkEOgipBDoIqQQ6CKkEOgipBDoIqQQ6CKkEOgipBDoIqQQ6CKkEOgyqRwNwDAYrHQ2tpKe3s7PT09AERHRxMfH09ycjKpqalhbuGVyVXhXLK3WCzU1NTgdDqH3S82Npbs7GwhicaETY79+/fT2NgIgCRJmEwmjEYjcXFxAHR0dGC327FarSiKAkB6ejqLFi0KR3OvSMIih78YGRkZ5Obmqu7rdrupqamhoaEBCJcgHpQWG9xoQorQuOowovkFqcViGRRjxYoVw4oBEBERQW5uLitWrACgsbERi8UybBnP6VrMWzawRpaR12xge2k9be5RNLKzliK5iNpO34bT1O94mfLjrlEEGQVuBdtntZS/WcTTr9XiGJtaRo3mctTU1ADeHsNkMo24nMlkIiMjIyBGUGzlbN5QyQ9ZBby6dy97Xy0gzfkhz++oRgm51YksKdnFujv0IUdQx0rZo4V8eNSDPsaFtW8MqggRTeWwWCw4nU4kSbpkjxGM7OxsJEnC6XSq9B4u6veZ0T++iXVZiRj0evSGRO56dD3LlJ2UN54/8ztrKZJ3U9topnCdjCyvpbC0GRfgqCtCzttOPfVsz5MpqnMAVspkmbIWv5pOVlNSuBZZlllbWEK1zTP4maOuCHlPE7Z929mwRkZeV4i5UU1NE8t3vcGmh3NISxgL+UJHUzlaW1sBRtVj+BMRETFY1hcrANcJmg+mMC9FuuiDRFLuTqTyyza/bZ/Q5MimYGcFH5jXkdS0mW0HFQxZz1Jh3kQmmWwyV/BslmFoPWeq2fbiYaTfFFNRUUHxMgPV+UVUn/Hbp7SMw9PzKH7nA/Y+lkTzlnKaxmhUGis0laO9vR0Ao9EYcgxfWV+sAPpcnEWPbvLQjwwGCU4rfuP5PSy+NxG9DnTT0li6LIfP6ppHNPRY697DsWQ1S272nun625az/mEH79VZL+y0bBXL7zCgm6hDn5rGPA5hO6MScJyiqRy+CS7f7Woo+Mr6YoWOLuB/+qQUMi2OEVwMOlDsXaQkzgjYKs2YRZfdT75I3UU1dEH/T2mv9vy8ps8j9UzFheeHoR85HArMkAgySHjp9/BTen3PD70/ofT4RFM5oqOjAe8EV6j4yvpiBaCfRcrCZg43Xzw4KJyy2Fh8U4JqXI/SRnOqQV2eQQxIxik0204HbHUobUwxDiPf/0M0lSM+Ph4Au90ecgxfWV+sQPRk3p+H6/XtlNTZcLhcuBw2at/ezs7ePHLS/e8G9lFZZcPVD3Q3U76nnMyFaUgA0yQSUFC6PHg8Q2sxZa3GUP4h1TZvX+NqKee9PxtYnRXahfZ4RVM5kpOTAWhpacHtHs2slBe3282RI0cCYg0hcQlb3ljM5LptPPHggzz4xDaaYpfy+h+WkBiw43xMkTVs2yAjr9rJqcytbBy8M0lk3mMS1U8+wCMf2YbWMT2HghdMWN/MR5Zl8v+iMG9HATnTR/2VxjWaT58XFxfjdDovOW0ejAMHDtDQ0EBsbCz5+fmhN6KzlqI8haUVy/l5neuXF80vSLOzswFoaGjAarUOv7MfVqt1cH3FF0MwtmguR2pqKunp6QCUlpZSVVU17BDjdrupqqqitLQU8C68iaV7bRgXS/ZxcXGDS/aS5J3dVBQFu92OxWKhq6sLEEv2WiMe9hGoElY5fIjHBMcn40IOwfjk5zV9LrisCDkEqgg5BKoIOQSqCDkEqgg5BKoIOQSqCDkEqgg5BKoIOQSqCDkEqgg5BKoIOQSqCDkEqgg5BKoIOQSqCDkEqgg5BKoIOQSqjIs8pLuPnWX/yW4+7+ijvdf7inx81GTmxkWyaGYMq26dGuYWXpmE9QHjPcfOsuVThbbuIG8r+5EQo+P5BZKQRGPCJkfBwW9463Nvur4o3QTumxnLytkG5p/Pi3WozcWe4w4+Pumk1zMAwPq509i28PpwNPeKJCxy+Iux/BYD5vtvGHb/vH1fU/ZPb86c8Ajiwn7UCYnxGMdXTrcxRfML0t3Hzg6K8btfTb+kGADm+2/gd7/y5jd46/NO9hw7O+z+7pNf8dzrR0jaeoSobUfIK7PTMpq0PR1f8dutxygbzDHTQ0XVd7x2dGyy9wS2t5nH/9aBc2BMqhoVmsvx0qferDvLbzHwVOZ1Iy73VOZ1LL/Fmz9jy6fDpHVr+ZLFf+3BfXMch9cl8c2aOHLd3dy36xT2kA94HBsL5rDjzqhQA6jTYWdDeQ8RdyRwvGAOvWsMSDaF5z7tvvx1jRJNh5Xdx86y/uM2onQT6Mi/LeCzL5Q+/niog7/bvWfn3cYonpkfx+1SZMB+ccVH6fUM8NZ9CUEuULup+NNXvBsfz38vuvbC5oEOXntNwZ6WxI4FUd6eYZeHJfOg9H/cVA3AvcapmB9IwP33YyR9fiGzmzz3Bt5f2MfWrd/BvXN4eg5AP87jdgprennbBUa9jqfuvoGHZnnHHOXgMZI6Yzik7yGv5RwtTGTjnfG8vGDoBbVSc5ykL/WcWmvElyDTvr+ZW3um0bs8WPYi7dC059h/0ns23DczNmD7F0of9+w5SeXJbvrODdB3boDKk93cs+ckXyiBKX19ZX2xAnB2UfP9Vcizrg3cPiGOu355FW+f9n9h282BnimY/2M2naumMufMWfKqO5EW3krvmhhkJmJeM4f3FwbJ8mW3k7e/D2PWL+l9ejaHMiey629f8a7dL13g1118dO10Dm28mW+yJ1N7WKEqyPviUvZsev3EgH6Unh+5KzpIvkyN0VSOzzu8f+iVswMP+B8PddB3bmif33dugD8eCkwu5yvrixVYoJ8OJhAZJHl9nH4COD1+eUYjWHevROwvJhERn8ATt0+iqtWJ/ZLfop+Gxl46kqax8bYYYBKxc5PYcdMAL/pnKY438PSdU4nQRRCbFs2v8XDktGrQC9jtbP1ax8b0ay+97xijbZLa8xNc8y9K4+wbSoJx8We+sr5YoXNVwLePnXk1cl//CJLUdvO/Drjr+il+2yZivHYyiuNfF8rrJjLE0XOXCN3+NU9+5CIj5wbuveaSDRlzxsUM6WUjciJxDNAXJFFQh2sAYnVcnPh6EM8Aw2cJGR53kJ5vVLja2fpfDrpmJ7Bjzvi4X9Y21WSUdxw91BZ4X3m3Uf0u4OLPfGV9sQKInUL2NT9SceK7wO0D32E5/SOPzogdWuY87m891EZOVJdnkBhuNEDtN11+2/rpcPQjGX4xgvJB8HRS9v53WG+5HvPC8TMLrKkcc+O8dx57jgcmkX5mfhyRk4Y2JXLSBJ6ZH5gK21fWFyuQGOQFV9N19AxPHlRQnL04v1Uo232Gx89dzUPz/EXro2S/gtMDOL7htXoP8qypGAGu02FiAPv3btz/ungsmEhGehRxp77n3ZZu4BzOozZe/HICL6SHoMbAWcre/YaS2Gt5I2fa6MuPIZrKsWhmDAAfnwzswG+XIvlk5UwWz4whctIEIidNYPHMGD5ZOXPIrayvrC/WEG6+icpl0US0dDCv5BTX7+rgQEQMnz1yE3MCvq2OOyd3kffaEaL+sxNLwjTevPv8hfKEa/j17AnsqmxhduW3Q+swGjEv0tG4/yuith5nft055MVGHjJOHP1BOdpJngMa7N8xbesRogb/+U/ChQfNp89nvXWCtm7PiKbNL8Y3jZ4Qo+PE+lmhN6LjK3676weeeDqZjNCj/OzRfIZ08wJv11v2Twev1Ac5K1V4pf7bwfWV5xeENLILRonmcqy8dSrr53rH1sJ/nCFv39eXLJO372sK/+H9sZL1c6eJpXuNEEv2AlXC+rDP7mNneWmED/tsXiCxUvQYmjIuUk2KxwTHJ+NCDsH4RDx9LlBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVBlXLxlb7FYaG1tpb29nZ6eHgCio6OJj48nOTmZ1NTUMLfwyiSsDxhbLBZqampwOodPfhAbG0t2draQRGPCJsf+/ftpbGwEQJIkTCYTRqORuDjvW/UdHR3Y7XasViuK4k2Jkp6ezqJFi8LR3CuSsMjhL0ZGRga5ubmq+7rdbmpqamhoaADCJYgHpcUGN5qQgqSU+rmi+QWpxWIZFGPFihXDigEQERFBbm4uK1asAKCxsRGLxTJsGc/pWsxbNrBGlpHXbGB7aT1tQbL9qNJZS5FcRG2nb8Np6ne8TPnx0SQzHTme07WYC9ciyzLyukJKDtoY/h1AbdBcjpqaGsDbY5hMphGXM5lMZGRkBMQIiq2czRsq+SGrgFf37mXvqwWkOT/k+R3VI8j3pUYiS0p2se6OMUjH1N3EO89VErWsmIqKCipeWYqh6ve889nYiDgaNJXDYrHgdDqRJOmSPUYwsrOzkSQJp9Op0nu4qN9nRv/4JtZlJWLQ69EbErnr0fUsU3ZS3nj+gHfWUiTvprbRTOE6GVleS2FpMy7AUVeEnLedeurZnidTVOcArJTJMmUtfjWdrKbk/Nm+trCEatuFc91RV4S8pwnbvu1sWOPtDcyNwdX02Ky0ZS4l57bz4sWkkJLWReXJtlEfn8uNpnK0trYCjKrH8CciImKwrC9WAK4TNB9MYV7Kxfk7Ekm5O5HKL/0P+Cc0ObIp2FnBB+Z1JDVtZttBBUPWs1SYN5FJJpvMFTybFSQP6Zlqtr14GOk33rO9eJmB6vwiqs/47VNaxuHpeRS/8wF7H0uieUs5TUE6A13qKrY8lomvFk9nE01NJlbdkTiKIzM2aJtqsr0dAKPRGHIMX1lfrAD6XJxFjy5ILjmDQYLTCheykd3D4nsT0etANy2Npcty+KyueURDj7XuPRxLVrPkZu/Zrr9tOesfdvBenfXCTstWsfwOA7qJOvSpaczjELYzKgE539vIMg/kmXEs2cTymboRtGRs0VQO3wSX73Y1FHxlfbFCJ/Dg65NSyLQ4cKjsfQEHir2LlMQZAVulGbPosvvJF6m7qIYu6EcVQ9azVFRU8IE5D0P5U5Q0XmHXHGNOpJ6puPAEyV/rcCgwQyLIIOGl38NP+XN4frg8v6igm5ZGzn2zqPzsxE9qz+VAUzmio6MB7wRXqPjK+mIFoJ9FysJmDjdfPDgonLLYWHxTgmpcj9JGc6pBXZ5BDEjGKTTbAnNVO5Q2phiHkU8FR6OZzX9qGtpjReoId/ZzbZPUxnt/BcBut4ccw1fWFysQPZn35+F6fTsldTYcLhcuh43at7ezszePnHT/W9F9VFbZcPUD3c2U7yknc2GaN8nsNIkEFJQuD54gEw6mrNUYyj+k2uY9t10t5bz3ZwOrs0Z/oW1ISGDyR2VUH/XG8nQ2Uf3xCRbfkkS4rzo0lSM5ORmAlpYW3O7RzEp5cbvdHDlyJCDWEBKXsOWNxUyu28YTDz7Ig09soyl2Ka//YQmB1//zMUXWsG2DjLxqJ6cyt7Jx8M4kkXmPSVQ/+QCPfGQbWsf0HApeMGF9Mx9Zlsn/i8K8HQXkTB/1V/LG2pGD46/eWI/8vhLPv73Ev6eHP8W15tPnxcXFOJ3OS06bB+PAgQM0NDQQGxtLfn5+6I3orKUoT2FpxXJCu6m+MtD8gjQ7OxuAhoYGrFbr8Dv7YbVaB9dXfDEEY4vmcqSmppKeng5AaWkpVVVVww4xbrebqqoqSktLAe/Cm1i614ZxsWQfFxc3uGQvSd7ZTUVRsNvtWCwWurq8v1Agluy1RTzsI1BlXKSaFI8Jjk/GhRyC8cnPa/pccFkRcghUEXIIVBFyCFQRcghUEXIIVBFyCFQRcghUEXIIVPk/o0rlMoAzlAUAAAAASUVORK5CYII="}}]);