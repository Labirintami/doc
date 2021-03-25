(window.webpackJsonp=window.webpackJsonp||[]).push([[1361],{1420:function(t,e,l){"use strict";l.r(e),l.d(e,"frontMatter",(function(){return a})),l.d(e,"metadata",(function(){return c})),l.d(e,"rightToc",(function(){return d})),l.d(e,"default",(function(){return s}));var i=l(2),b=l(6),n=(l(0),l(1808)),a={sidebar_label:"Title",title:"Title"},c={unversionedId:"sidebar/title",id:"sidebar/title",isDocsHomePage:!1,title:"Title",description:"This is an item that contains some text.",source:"@site/docs/sidebar/title.md",slug:"/sidebar/title",permalink:"/sidebar/title",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/sidebar/title.md",version:"current",sidebar_label:"Title",sidebar:"docs",previous:{title:"Spacer",permalink:"/sidebar/spacer"},next:{title:"Data Loading",permalink:"/sidebar/data_loading"}},d=[{value:"Adding Title control",id:"adding-title-control",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Showing/hiding title",id:"showinghiding-title",children:[]},{value:"Adding a tooltip",id:"adding-a-tooltip",children:[]}],o={rightToc:d};function s(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(n.b)("wrapper",Object(i.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This is an item that contains some text."),Object(n.b)("p",null,Object(n.b)("img",{src:l(2082).default})),Object(n.b)("h2",{id:"adding-title-control"},"Adding Title control"),Object(n.b)("p",null,"A Title control can be added to a sidebar with the help of the ",Object(n.b)("strong",null,"add()")," method of TreeCollection:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'sidebar.data.add({\n    type: "title",\n    value: "APP NAME"\n});\n')),Object(n.b)("h3",{id:"attributes"},"Attributes"),Object(n.b)("p",null,"You can provide the following attributes in the configuration object of a Title control:"),Object(n.b)("table",{className:"webixdoc_links"},Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"type")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),') the item type, set it to "title". If not specified - the ',Object(n.b)("a",{href:"https://docs.dhtmlx.com/suite/sidebar__navitem.html"},'"navItem"')," type is applied by default.")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"id")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the id of a control, auto-generated if not set")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"parent")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the parent of the item")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"value")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") the value of the Title control. You need to set either the ",Object(n.b)("b",null,"value")," or ",Object(n.b)("b",null,"html")," property to the title")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"html")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") optional, a string with HTML that should be inserted into the title")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"css")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") adds a custom CSS class")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"tooltip")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"string"),") a tooltip for the control")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"hidden")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a control is hidden")),Object(n.b)("tr",null,Object(n.b)("td",{className:"webixdoc_links0"},Object(n.b)("b",null,"disabled")),Object(n.b)("td",null,"(",Object(n.b)("i",null,"boolean"),") defines whether a control is disabled")))),Object(n.b)("h2",{id:"showinghiding-title"},"Showing/hiding title"),Object(n.b)("p",null,"Title can be hidden and shown with the help of the related methods. Pass the id of a Title control as a parameter."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"sidebar.show(id);\nsidebar.hide(id);\n")),Object(n.b)("h2",{id:"adding-a-tooltip"},"Adding a tooltip"),Object(n.b)("p",null,"You can add a tooltip to a Title control:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},'{\n    type:"title",\n    value:"2K",\n    tooltip:"Your subscribers"\n}\n')),Object(n.b)("p",null,"check links to samples and api, add the image "))}s.isMDXComponent=!0},2082:function(t,e,l){"use strict";l.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAsCAIAAACxJlDuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AsaCSYRr8rthwAABIFJREFUeJzt229IG2ccwPFfN3GFBOHKIOucbDxSTJE9pvRY8V7MVnYrmIQ2Fo1QIlQLcyApiL6wviplhBHfKIWVsUVQZE5Z8yL6QhJqLPUplQt4B2Ppm4NhsiCU3pvkTV7tRZo/l6qJ6+ME+X3e5XmeXJ4jX5K7QM6kUilAiJ8GAGhubj7pbaBTIp1Of3DSe0CnDSaFOMOkEGeYFOIMk0KcYVKIM0wKcYZJIc4wKcQZJoU4w6QQZ5gU4gyTQpxhUoizhvqW5djMQCAmTy76pabi2OvNwJ1pVlpy3i53e719ou3DQ6cqJJfcE4uC5+EvQ47GwojxLDAYhPG5ya6PS6v08L17IRiamfGQ4pDxLDAYZEBMgwB5bf7u1IoBt4ORAXv1HgAAwDcd6W+r74zRf1VfUq+VzRgARDd3fNLXQuUMHZj0fmkFgOzf8fDPDyb+mZwZk4RaUxWM8Nzv0o8++9kDXvqVEtYBIKy88pCqGvS4qntIqal8Ulkxqp5d2kOBcL6u00Xvo64vvr2dOBOczh6BPVX2zFPWlouUUkqp5Pb7v6fGxpqSqT1loi//GtHz+79yXnu5alx2Oi8bqy818xpKHXr4eXkwl4iHgRBiWlTaQ0FLE6DjVk9SOoso5Oa3I90uIbHK9APXWa1WgF0je6Spfv+omJz/aW3fw+Y0tmLI133ebslYYVrOdEjxkmzE1OTbpnLqdlToc7k+reOE0HGqIyldjevkqoNAm+ghenzngKZyu+wFA0G2f36UKfio5bpvqC0Zmo/uvfs8ja2BLLZbBEeXDGtVTZ1zSE5jOZ7IAQBkWDQmuK7YwVwtCw66S5aStU8Wvbea11J57XlYd/juEwAgHd0k9MeW5iL07fU0sOCgO1hcK9D+sd56psyI8zsfG5sNbdAh0/X7HluPQu8PYhMAdEg98GCdeTtlW2m+iUp9wtS2OtwpZf9kCvH42nLKDkB7+RCma6lzLbVOFnFQK6l8Uo0ZYMzedc8Whww16aXFOsrvmdXW+pnNUhHNIVNVGi/cHB7YmphbaO2pGM1oLAGQmLr1pDTEtIwsly+xG+kVlzAeZf2fZCOK6B4hYCjmI1tbLlL6zi0BOk41ksol4suG6LvvsVsKA1l1JbC8pfVSsTBwyHt2lLez0X5r2LM+tbAIAFJhSH+xqghO/7hU/FjajU89Xt3W5RsVV+BtoocssN8sb3TR1W4DqL7jQ/+/w5PKqdtRcPi7Omnp68aWocuPmHpblPhu5Cz1jjrjD9eKUejqpg7XhrtKn4dgh97H0aeqfoNUdEqkHhp6tAnfTEr7/UCQ3f1L0yp+RPgCb/qO3aFJZVg0BnS03BMA2C6IBELRba/k4LwVy1fekWsssAEAkNe2wjp47tgrvi0bW9ud8CS8pTldlfuhV0XQbJ0dlv2OqS0FtKXyQ990BJM6bmdSqRT+NRTxgn8NRfxhUogzTApxhkkhzjApxBkmhTjDpBBnmBTiDJNCnGFSiDNMCnGGSSHOMCnEGSaFOMOkEGeYFOKsAQDS6fRJbwOdHv8C0Wuf6p48XFoAAAAASUVORK5CYII="}}]);