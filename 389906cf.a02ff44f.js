(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),o=n(6),d=(n(0),n(1808)),a={sidebar_label:"Step 2. Bind Window to Grid",title:"Step 2. Bind Window to Grid"},r={unversionedId:"tutorial/binding_components/step2",id:"tutorial/binding_components/step2",isDocsHomePage:!1,title:"Step 2. Bind Window to Grid",description:'To apply changes made in a grid row through the form in the window we need to process clicking on the "Apply" or "Cancel" buttons.',source:"@site/docs/tutorial/binding_components/step2.md",slug:"/tutorial/binding_components/step2",permalink:"/tutorial/binding_components/step2",editUrl:"https://github.com/Labirintami/doc/edit/master/docs/tutorial/binding_components/step2.md",version:"current",sidebar_label:"Step 2. Bind Window to Grid"},c=[],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(d.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("p",null,'To apply changes made in a grid row through the form in the window we need to process clicking on the "Apply" or "Cancel" buttons.'),Object(d.b)("p",null,"##Checking the clicked button"),Object(d.b)("p",null,"First we need to check which one of the footer buttons was clicked. We can use the ",Object(d.b)("b",null,"\u0421lick")," event handler of the window footer to do this."),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-js"},'dhxWindow.footer.events.on("Click", function(id, e){\n    // we call the getValue() method of the Form \n    // to get the current value of the item\n    item = form.getValue(); \n    \n    switch(id) {\n        // if the clicked button is "Cancel", \n        // the window is hiding\n        case \'cancel\': {\n            dhxWindow.hide();\n            break;          \n        }\n        case \'apply\': {\n            if (form.validate()){\n                if (item.id == ""){\n                    item.id = grid.data.getLength() + 1;\n                    grid.data.add(item, 0);\n                } else {                       \n                    grid.data.update(item.id, item);    \n                }\n            }\n            dhxWindow.hide();        \n            break;\n        }\n    }\n});\n')),Object(d.b)("p",null,"##Adding functionality to the Apply button"),Object(d.b)("p",null,'Now let\'s describe the steps we need to take to provide the possibility to edit grid rows or add new ones after pressing the "Apply" button:'),Object(d.b)("p",null,"1","."," Check whether the form is filled out correctly by using the ",Object(d.b)("b",null,"validate()")," method of the Form component:"),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-js"},"case 'apply': {\n    if (form.validate()){\n    }                \n    break;\n}\n")),Object(d.b)("p",null,"2","."," Define what to do with a grid row - either to add or edit it - check whether its id is empty:"),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},"if the item Id is empty, we will add a new item into the grid:")),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-js"},'if (item.id == ""){\n    item.id = grid.data.getLength() + 1; // assigning an id to a new item\n    item.modified = getFormatDate();  \n    // adding a new item through the add() method of Data Collection. \n    // It takes 2 parameters: the object of a new item and the index \n    // of the position starting from which new items will be added\n    grid.data.add(item, 0);     \n    dhxWindow.hide(); // the window is hiding\n}\n')),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},"If the Id isn't empty, we will update the current row in the grid via the ",Object(d.b)("b",null,"update()")," method of Data Collection:")),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-js"},"else {                       \n    item.modified = getFormatDate(); \n    // It takes 2 parameters: the id of the item \n    // which needs to be updated and the item to be updated\n    grid.data.update(item.id, item);     \n    dhxWindow.hide();\n}\n")),Object(d.b)("div",{id:"tutorial_step"},Object(d.b)("a",{id:"next_step",href:"tutorial/binding_components/step3.md"})))}s.isMDXComponent=!0}}]);