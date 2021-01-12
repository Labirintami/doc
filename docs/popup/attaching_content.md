Attaching Content to Popup 
---
sidebar_label: 
title: 
---          

``` todo

dhtmlxPopup can have various content, such as:

- [DHTMLX components](popup/attaching_content.md#attachingdhtmlxcomponents)
- [an HTML object](popup/attaching_content.md#attachinghtmlobjects)
- [an HTML string](popup/attaching_content.md#attachinganhtmlstring)
- [a list](popup/attaching_content.md#attachingalist)

Attaching DHTMLX components
-----------------------------------------------------------------
The table below presents DHTMLX components you can attach to a dhtmlxPopup object and code samples of such attaching.

{{note
Each attach[NameofComponent] method returns the instance of the related component
}}

<table class="list" cellspacing="0" cellpadding="5" border="0">
	<thead>
	<tr>
		<th>
			Component
		</th>
		<th>
			Code Sample
		</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>accordion/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myAcc = myPop.attachAccordion(350, 300);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/09_attach_accordion.html
}}
,  Related API: api/dhtmlxpopup_attachaccordion.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>calendar/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myCalendar = myPop.attachCalendar();
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/05_attach_calendar.html
}}
,  Related API: api/dhtmlxpopup_attachcalendar.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>colorpicker/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myCP = myPop.attachColorPicker({ color: "#a4bed4"});
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/12_attach_colorpicker.html
}}
,  Related API: api/dhtmlxpopup_attachcolorpicker.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>editor/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myEditor = myPop.attachEditor(400, 200);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/11_attach_editor.html
}}
,  Related API: api/dhtmlxpopup_attacheditor.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>form/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myForm = myPop.attachForm([
	{type: "input",    label: "Email Address", name: "email"},
	{type: "password", label: "Password",      name: "pwd"}
]);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/04_attach_form.html
}}
,  Related API: api/dhtmlxpopup_attachform.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>grid/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myGrid = myPop.attachGrid(350,300);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/06_attach_grid.html
}}
,  Related API: api/dhtmlxpopup_attachgrid.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>layout/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myLayout = myPop.attachLayout(350, 300, "3L");
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/08_attach_layout.html
}}
,  Related API: api/dhtmlxpopup_attachlayout.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>tabbar/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myTabbar = myPop.attachTabbar(350, 300);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/10_attach_tabbar.html
}}
,  Related API: api/dhtmlxpopup_attachtabbar.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>tree/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myTree = myPop.attachTree(350,300);
~~~
<br>
{{sample
dhtmlxPopup/samples/04_attaches/07_attach_tree.html
}}
,  Related API: api/dhtmlxpopup_attachtree.md <br> <br>
       </td>
	</tr>
	<tr>
		<td>vault/index.md</td>
		<td>
~~~js
var myPop = new dhtmlXPopup(...);
var myVault = myPop.attachVault(350, 300, {
    uploadUrl:  "http://my_mega_server/upload_handler.php",
    swfUrl:     "http://my_mega_server/upload_handler.php",
    slUrl:      "http://my_mega_server/upload_handler.php",
    swfPath:    "dhxvault.swf",
    slXap:      "dhxvault.xap"
});
~~~
<br>
Related API: api/dhtmlxpopup_attachvault.md <br> <br>
       </td>
	</tr>
	</tbody>
</table>


Attaching HTML Objects
--------------------------------------------
To attach a DOM element to a dhtmlxPopup instance, use the api/dhtmlxpopup_attachobject.md method:

~~~html
<div id="myObj">any custom text here</div>

<script>
     var myPop = new dhtmlXPopup(...);
     myPop.attachObject("myObj");
</script>
~~~
{{sample
dhtmlxPopup/samples/04_attaches/02_attach_object.html
}}

Attaching an HTML string
-----------------------------------------
To add the HTML markup to a dhtmlxPopup instance you should use the api/dhtmlxpopup_attachhtml.md method:

~~~js
var myPop = new dhtmlXPopup(...);
myPop.attachHTML("any custom text here");
~~~
{{sample
dhtmlxPopup/samples/04_attaches/03_attach_html.html
}}

Attaching a list
----------------------------------

dhtmlxPopup provides a handy way to present list-like structures inside it. 

<img src="popup/list_integration.png"/>

To present data in the tabular view you should use the api/dhtmlxpopup_attachlist.md method as in:

~~~js
var  myPop = new dhtmlXPopup(...);
myPop.attachList("name,price", [
		{id: 1, name: "Audi A5 Coupe", price: "&euro; 31,550"},
		{id: 2, name: "Audi A5 Sportback", price: "&euro; 30,990"},
		myPop.separator, // use this struct for separator
		{id: 3, name: "Audi A6", price: "&euro; 30,990"},
		{id: 4, name: "Audi A6 Avant", price: "&euro; 37,450"},
		{id: 5, name: "Audi A6 Quattro", price: "&euro; 55,360"}
]);
~~~

where 

- **"name, price"** - a comma-separated list of data properties that will be rendered in the list;
- **[{id:.., name:..., price:...}]** - the data available for rendering in the list;
- api/dhtmlxpopup_separator_other.md - a special property of dhtmlxPopup that draws a single line. 

###Getting list's items

To get the list's items, use the api/dhtmlxpopup_getitemdata.md method:

~~~js
myPop.attachList("name,price", [
	{id: 1, name: "Audi A5 Coupe", price: "31550"},
	{id: 2, name: "Audi A5 Sportback", price: "30990"}
]);

var data = myPop.getItemData(1);
// data = {id: 1, name: "Audi A5 Coupe", price: "31550"}
~~~

To get all the items of the list you should call the method with no parameters:

~~~js
myPop.attachList("name,price", [
	{id: 1, name: "Audi A5 Coupe", price: "31550"},
	{id: 2, name: "Audi A5 Sportback", price: "30990"}
]);

var data = myPop.getItemData();
// data = [
//     {id: 1, name: "Audi A5 Coupe", price: "31550"},
//     {id: 2, name: "Audi A5 Sportback", price: "30990"}
// ]
~~~

{{sample
dhtmlxPopup/samples/04_attaches/01_attach_list.html
}}

Clearing the content
---------------------------------
To clear the current content of a pop-up window, use the api/dhtmlxpopup_clear.md method as in:

~~~js
var myPop = new dhtmlXPopup( ... );
myPop.clear();
~~~

If you decide to attach some content over the existing one, note that before attaching the new content dhtmlxPopup will call the clear() method automatically.

``` todo