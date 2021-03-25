(window.webpackJsonp=window.webpackJsonp||[]).push([[1242],{1301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),s=(n(0),n(1808)),l={sidebar_label:"Event Handling",title:"Event Handling"},r={unversionedId:"grid/events",id:"grid/events",isDocsHomePage:!1,title:"Event Handling",description:"Attaching event listeners",source:"@site/docs/grid/events.md",slug:"/grid/events",permalink:"/grid/events",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/grid/events.md",version:"current",sidebar_label:"Event Handling",sidebar:"docs",previous:{title:"Customization",permalink:"/grid/customization"},next:{title:"Layout overview",permalink:"/layout/index"}},c=[{value:"Attaching event listeners",id:"attaching-event-listeners",children:[]},{value:"Detaching event listeners",id:"detaching-event-listeners",children:[]},{value:"Calling events",id:"calling-events",children:[]},{value:"The list of events",id:"the-list-of-events",children:[]}],o={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"attaching-event-listeners"},"Attaching event listeners"),Object(s.b)("p",null,"You can attach event listeners with the ",Object(s.b)("strong",null,"grid.events.on()")," method:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'grid.events.on("Scroll", function({top,left}){\n    console.log("The grid is scrolled to "+top,left);\n});\n')),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"The names of events are case-insensitive."))),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://snippet.dhtmlx.com/9zeyp4ds"},"https://snippet.dhtmlx.com/9zeyp4ds"),"\tGrid. Events"),Object(s.b)("h2",{id:"detaching-event-listeners"},"Detaching event listeners"),Object(s.b)("p",null,"To detach events, use ",Object(s.b)("strong",null,"grid.events.detach()"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'grid.events.on("Scroll", function({top,left}){\n    console.log("The grid is scrolled to "+top,left);\n});\n\ngrid.events.detach("Scroll");\n')),Object(s.b)("h2",{id:"calling-events"},"Calling events"),Object(s.b)("p",null,"To call events, use ",Object(s.b)("strong",null,"grid.events.fire()"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'grid.events.fire("name",args);\n// where args is an array of arguments\n')),Object(s.b)("h2",{id:"the-list-of-events"},"The list of events"),Object(s.b)("p",null,"The full list of events is available in the related ",Object(s.b)("a",{parentName:"p",href:"/grid/api/refs/grid_events"},"API section"),"."))}d.isMDXComponent=!0}}]);