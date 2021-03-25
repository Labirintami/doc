(window.webpackJsonp=window.webpackJsonp||[]).push([[1537],{1596:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return i})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return a})),l.d(t,"default",(function(){return d}));var b=l(2),c=l(6),n=(l(0),l(1808)),o=l(1809),i={sidebar_label:"setProperties",title:"setProperties"},r={unversionedId:"form/api/colorpicker/colorpicker_setproperties_method",id:"form/api/colorpicker/colorpicker_setproperties_method",isDocsHomePage:!1,title:"setProperties",description:"@short: allows changing available configuration attributes of the control dynamically",source:"@site/docs/form/api/colorpicker/colorpicker_setproperties_method.md",slug:"/form/api/colorpicker/colorpicker_setproperties_method",permalink:"/form/api/colorpicker/colorpicker_setproperties_method",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/colorpicker/colorpicker_setproperties_method.md",version:"current",sidebar_label:"setProperties",sidebar:"docs",previous:{title:"isVisible",permalink:"/form/api/colorpicker/colorpicker_isvisible_method"},next:{title:"setValue",permalink:"/form/api/colorpicker/colorpicker_setvalue_method"}},a=[],s={rightToc:a};function d(e){var t=e.components,l=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o.c,{mdxType:"Short"},"allows changing available configuration attributes of the control dynamically"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"properties   object      an object with the available attributes of the control and their new values")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("colorpicker").setProperties({\n    editable: true, \n    labelWidth: "300px",\n    label: "New label"\n});\n \n')),Object(n.b)("p",null," api_method"),Object(n.b)(o.b,{mdxType:"Descr"},Object(n.b)("p",null,"The method invokes the form/api/colorpicker/colorpicker_afterchangeproperties_event.md and form/api/colorpicker/colorpicker_beforechangeproperties_event.md events."),Object(n.b)("p",null,"It is possible to change values of the following configuration attributes of the ",Object(n.b)("strong",null,"ColorPicker")," control:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"validation")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"function"),") the validation function, takes as a parameter the value to validate and returns ",Object(n.b)("i",null,"true/false")," to indicate the result of validation")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"width")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the width of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"height")),Object(n.b)("td",null,"(",Object(n.b)("i",null,'string|number|"content"'),") the height of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"padding")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string|number"),") sets padding between a cell and a border of the ColorPicker control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"css")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds style classes to a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"icon")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the name of an ",Object(n.b)("a",{href:"https://docs.dhtmlx.com/suite/helpers__icon.html"},"icon")," from the used icon font")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"placeholder")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a tip for the input")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"editable")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") allows a user to enter the value of the control manually")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"required")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a control is required")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"label")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") specifies a label for a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"labelWidth")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string|number"),") sets the width of the label of a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"hiddenLabel")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") invisible label that will be used to identify the input on the server side")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"labelPosition")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') defines the position of a label: "left"|"top"')),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"helpMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds a help message to a control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"preMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that contains instructions for interacting with the control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"successMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that appears in case of successful validation of the control value")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"errorMessage")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a message that appears in case of error during validation of the control value")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"mode")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') the mode of a control: "palette" (default), "picker"')),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"palette")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"array"),") contains arrays of colors you want to be shown in a colorpicker")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"customColors")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"array"),") shows a section with custom colors in the bottom part of the ColorPicker")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"grayShades")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether the section with gray shades is displayed in the palette"))))),Object(n.b)(o.a,{mdxType:"Changelog"},"added in v7.0"))}d.isMDXComponent=!0}}]);