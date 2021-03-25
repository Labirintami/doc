(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{363:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return b})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return l}));var r=o(2),i=o(6),c=(o(0),o(1808)),n=o(1809),a={sidebar_label:"afterHide",title:"afterHide"},b={unversionedId:"form/api/checkbox_group/checkboxgroup_afterhide_event",id:"form/api/checkbox_group/checkboxgroup_afterhide_event",isDocsHomePage:!1,title:"afterHide",description:"@short: fires after a control is hidden",source:"@site/docs/form/api/checkbox_group/checkboxgroup_afterhide_event.md",slug:"/form/api/checkbox_group/checkboxgroup_afterhide_event",permalink:"/form/api/checkbox_group/checkboxgroup_afterhide_event",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/form/api/checkbox_group/checkboxgroup_afterhide_event.md",version:"current",sidebar_label:"afterHide",sidebar:"docs",previous:{title:"afterChangeProperties",permalink:"/form/api/checkbox_group/checkboxgroup_afterchangeproperties_event"},next:{title:"afterShow",permalink:"/form/api/checkbox_group/checkboxgroup_aftershow_event"}},u=[],p={rightToc:u};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)(n.c,{mdxType:"Short"},"fires after a control is hidden"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"value     object     the current value of the control. The object contains a set of ",Object(c.b)("i",null,"key:value")," pairs where ",Object(c.b)("i",null,"key")," is the id of a checkbox and ",Object(c.b)("i",null,"value")," is the value/state of a checkbox."),Object(c.b)("li",{parentName:"ul"},"init      boolean     true, if the event is triggered on the control initialization, otherwise false")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'form.getItem("CheckboxGroup").events.on("AfterHide", function(value, init) {\n    console.log("AfterHide", value, init);\n});\n')),Object(c.b)("p",null," api_event"),Object(c.b)(n.b,{mdxType:"Descr"}))}l.isMDXComponent=!0}}]);