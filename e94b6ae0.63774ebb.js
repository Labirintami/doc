(window.webpackJsonp=window.webpackJsonp||[]).push([[1590],{1649:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var a=i(2),n=i(6),r=(i(0),i(1808)),l={sidebar_label:"Serializing and Caching Tree",title:"Serializing and Caching Tree"},s={unversionedId:"tree/serialization_caching_and_removing_tree",id:"tree/serialization_caching_and_removing_tree",isDocsHomePage:!1,title:"Serializing and Caching Tree",description:"`tododelete \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f?`",source:"@site/docs/tree/serialization_caching_and_removing_tree.md",slug:"/tree/serialization_caching_and_removing_tree",permalink:"/tree/serialization_caching_and_removing_tree",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/tree/serialization_caching_and_removing_tree.md",version:"current",sidebar_label:"Serializing and Caching Tree"},c=[{value:"Serializing Tree",id:"serializing-tree",children:[]},{value:"Setting Serialization Level",id:"setting-serialization-level",children:[]},{value:"Preventing Caching in IE",id:"preventing-caching-in-ie",children:[]},{value:"Registering XML Entity",id:"registering-xml-entity",children:[]},{value:"Removing Tree",id:"removing-tree",children:[]}],o={rightToc:c};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tododelete \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f?")," "),Object(r.b)("h2",{id:"serializing-tree"},"Serializing Tree"),Object(r.b)("p",null,"The user can get an XML representation (as a string) of the tree using the method serializeTree():"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.serializeTree();  \n")),Object(r.b)("p",null,"Also there is a possibility to return the tree as a JSON string like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.serializeTreeToJSON(); \n")),Object(r.b)("p",null,"{{sample\ndhtmlxTree/samples/08_getting_tree_data/02_pro_user_data.html\n}}"),Object(r.b)("h2",{id:"setting-serialization-level"},"Setting Serialization Level"),Object(r.b)("p",null,"XML serialization can be easily configured in the following way:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.setSerializationLevel(userData,fullXML,escapeEntities,userDataAsCData,DTD); \n")),Object(r.b)("p",null,"The parameters are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"userData - enable/disable user data serialization;"),Object(r.b)("li",{parentName:"ul"},"fullXML - enable/disable full XML serialization;"),Object(r.b)("li",{parentName:"ul"},"escapeEntities - convert tag brackets into related HTML entities;"),Object(r.b)("li",{parentName:"ul"},"userDataAsCData - output user data in CDATA sections;"),Object(r.b)("li",{parentName:"ul"},"DTD - if specified set as XML's DTD.")),Object(r.b)("h2",{id:"preventing-caching-in-ie"},"Preventing Caching in IE"),Object(r.b)("p",null,"The user can prevent caching in IE by adding random value to URL string with the help of the preventIECaching() method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.preventIECaching(true/false); // false by default\n")),Object(r.b)("h2",{id:"registering-xml-entity"},"Registering XML Entity"),Object(r.b)("p",null,'There is a possibility in dhtmlxTree to register an XML entity for replacement of special symbols during the initialization of the tree (the default ones are: ampersand, "less then" and "greater then" symbols):'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.registerXMLEntity(rChar,rEntity);\n")),Object(r.b)("p",null,"The parameters are the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rChar - source char;"),Object(r.b)("li",{parentName:"ul"},"rEntity - target entity.")),Object(r.b)("h2",{id:"removing-tree"},"Removing Tree"),Object(r.b)("p",null,"There is a simple method that allows the user to remove the tree completely and to clear memory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"tree.destructor();  \n")))}b.isMDXComponent=!0}}]);