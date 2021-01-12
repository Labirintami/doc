Configuring Items
---
sidebar_label: 
title: 
---          

``` todo


Setting/getting an item's text
-----------------------------

To set the text of an item, use the [setText()]() method:

~~~js
mySidebar.items(id).setText({
	text: "new text",
    icon: "new_icon.png"
});
~~~

To get the text of an item, use the [getText()]() method:

~~~js
var text = mySidebar.items(id).getText(); // -> {text:"new text",icon:"new_icong.png", ...}
~~~

{{sample
dhtmlxSidebar/samples/02_config/05_change_text.html
}}

Showing/hiding an existing item
--------------------------


To show an item, use the [show()]() method:
 
~~~js
mySidebar.items(id).show(); 
~~~

To hide an item, use the [hide()]() method:

~~~js
mySidebar.items(id).hide(); 
~~~ 

{{sample
dhtmlxSidebar/samples/02_config/03_show_hide_items.html
}}

Adding/removing an item
-----------------------

To add an item, use the [addItem()]() method:

~~~js
mySidebar.addItem("itemId");
~~~

To remove an item from sidebar, use the [remove()]() method:

~~~js
mySidebar.items(id).remove();
~~~

{{sample
dhtmlxSidebar/samples/02_config/02_add_remove_items.html
}}

Setting/getting the active item
-------------------------------

To select an item, use the [setActive()]() method:

~~~js
mySidebar.items(id).setActive();
~~~

To get the active item, use the method [getActiveItem()]():

~~~js
// get active item
var actvId = mySidebar.getActiveItem();
~~~

``` todo