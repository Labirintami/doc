toggle
---
sidebar_label: 
title: 
---          

@short:
fires on expanding/collapsing Sidebar

@params:
- isCollapsed 		boolean			true, if Sidebar is collapsed


@example:
sidebar.events.on("Toggle",function(true){
   // your code here
});


@template: api_event
@descr:

@deprecated: instead of it, you can use the following events:

- sidebar/api/sidebar_aftercollapse_event.md

~~~js
sidebar.events.on("AfterCollapse", function() {
    // your logic here
});
~~~

- sidebar/api/sidebar_beforecollapse_event.md

~~~js
sidebar.events.on("BeforeCollapse", function() {
    // your logic here
    return false;
});
~~~

- sidebar/api/sidebar_afterexpand_event.md

~~~js
sidebar.events.on("AfterExpand", function() {
    // your logic here
});
~~~

- sidebar/api/sidebar_beforeexpand_event.md

~~~js
sidebar.events.on("BeforeExpand", function() {
    // your logic here
    return true;
});
~~~
