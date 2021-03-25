(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{809:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return r})),n.d(e,"default",(function(){return s}));var a=n(2),o=n(6),b=(n(0),n(1808)),i={sidebar_label:"ImageButton",title:"ImageButton"},l={unversionedId:"sidebar/image_button",id:"sidebar/image_button",isDocsHomePage:!1,title:"ImageButton",description:"`tododelete \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f?`",source:"@site/docs/sidebar/image_button.md",slug:"/sidebar/image_button",permalink:"/sidebar/image_button",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/sidebar/image_button.md",version:"current",sidebar_label:"ImageButton"},r=[{value:"Adding ImageButton",id:"adding-imagebutton",children:[]},{value:"Working with ImageButton",id:"working-with-imagebutton",children:[]}],u={rightToc:r};function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(b.b)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"tododelete \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f?")," "),Object(b.b)("p",null,"This is a button with an image. Unlike sidebar/button.md, it does not have a text label, but cal also have a badge with a number and can be two state."),Object(b.b)("h2",{id:"adding-imagebutton"},"Adding ImageButton"),Object(b.b)("p",null,"ImageButton can be easily added to a sidebar with the help of the ",Object(b.b)("strong",null,"add()")," method of Tree Collection:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},'sidebar.data.add({\n    type: "imageButton",\n    count: 10,\n    src: "../img/avatar.png"\n});\n')),Object(b.b)("p",null,"###Attributes"),Object(b.b)("p",null,"You can provide the following ",Object(b.b)("strong",null,"attributes")," in the configuration object of an imageButton:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"type"),' - (*string*) the type of a control, set it to "imageButton"'),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"src")," - (*string*) the path to the image"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"html")," - (*string*) optional, a string with HTML that should be inserted into the button"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"value")," - (*string*) a value of the button. You need to set either the ",Object(b.b)("strong",null,"html")," or ",Object(b.b)("strong",null,"value")," property to the button"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"id")," - (*string*) the id of a control, auto-generated if not set"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"twoState")," - (*boolean*) adds two states to the button: active (pressed) and inactive  (unpressed)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"active"),"  - (*boolean*) sets the state of a twoState button"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"group")," - (*string*) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"hotkey")," - (*string*) the name of the hot key for the button"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"count")," - (*number*) a badge with a number"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"countColor"),' - (*string*) the color of a badge with number: "danger" | "secondary" | "primary" | "success"'),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"size"),' - (*string*) defines the size of a button: "small"|"medium"|"auto"'),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",null,"tooltip")," - (*string*) a tooltip for the button")),Object(b.b)("h2",{id:"working-with-imagebutton"},"Working with ImageButton"),Object(b.b)("p",null,"Just like sidebar/button.md, imageButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a two state imageButton."),Object(b.b)("p",null,"Check the full list of available operations in the ",Object(b.b)("a",{parentName:"p",href:"/sidebar/api/refs/sidebar"},"Sidebar API")," and ",Object(b.b)("a",{parentName:"p",href:"/helpers/tree_collection"},"Tree Collection API"),"."),Object(b.b)("p",null,"check link to sample, and the image "))}s.isMDXComponent=!0}}]);