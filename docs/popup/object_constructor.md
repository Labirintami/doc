---
sidebar_label: Object Constructor
title: Object Constructor
---          



Attaching to a Form's Control
-----------------------------------------------

~~~js
var myForm = new dhtmlXForm("myForm", [
    {type: "input",    name: "name",    value: "Ogiwara Masaaki", label: "Full Name"},
    {type: "password", name: "pwd",     value: "12345",           label: "Password"},
    {type: "button",   name: "proceed", value: "Proceed"}
]);
var myPop = new dhtmlXPopup({ 
    form: myForm, 
    id: ["name","pwd"] //attaches the same pop-up window to 2 inputs: "Full Name" and "Password"
});
~~~
{{sample
dhtmlxPopup/samples/01_init/06_attach_to_form.html
}}

###Available parameters


<table class="list" cellspacing="0" cellpadding="5" border="0" >
	<thead>
	<tr>
		<th>
			Parameter
		</th>
		<th>
			Description
		</th>
        <th>
			Optionality
		</th>
	</tr>
	</thead>
<tbody>
	<tr>
		<td>form</td>
		<td><span style="color:rgb(141, 122, 122);">(string, object)</span> the id or object of the dhtmlxForm instance that the pop-up window will be attached to</td>
        <td>Mandatory</td>
    </tr>
	<tr>
		<td>id</td>
		<td><span style="color:rgb(141, 122, 122);">(string, array)</span> the id of a form's control that you want to attach a pop-up to or an array of ids if you'd like to attach the same pop-up to several controls.<br/> <br/>
<i>For radio buttons you need to specify the value as an array (i.e. id: ["inp1", "inp2", ["r1","v1"] ], where ["r1","v1"] is the name and value of a radio button)</i></td>
        <td>Mandatory</td>
    </tr>
	<tr>
		<td>mode</td>
		<td><span style="color:rgb(141, 122, 122);">("top", "bottom", "right", "left")</span> the position that the pop-up window will appear at. By default for form-based init, "right".<br/><br/> <i> If available space is less than required, 
dhtmlxPopup automatically changes the mode from "top" to "bottom", from "left" to "right" and vice versa</i></td>
        <td>Optional</td>
    </tr>
	<tr>
		<td>skin</td>
		<td><span style="color:rgb(141, 122, 122);">(string)</span> the skin to apply. Read more on skins <a href="">here</a>.</td>
        <td>Optional</td>
    </tr>
</tbody>
</table>



Attaching to a Toolbar's Control
---------------------------------------------------------------
~~~js
var myToolbar = new dhtmlXToolbarObject("toolbarObj");
myToolbar.addButton("button_open", 2, "Open", "open.gif", "open_dis.gif");
myToolbar.addButton("button_save", 3, "Save", "save.gif", "save_dis.gif");
 
var myPop = new dhtmlXPopup({ 
	toolbar: myToolbar,
    id: "button_open" //attaches a pop-up window to the "Open" button
});
~~~
{{sample
dhtmlxPopup/samples/01_init/01_attach_to_toolbar.html
}}

###Available parameters


<table class="list" cellspacing="0" cellpadding="5" border="0">
	<thead>
	<tr>
		<th>
			Parameter
		</th>
		<th>
			Description
		</th>
        <th>
			Optionality
		</th>
	</tr>
	</thead>
<tbody>
	<tr>
		<td>toolbar</td>
		<td><span style="color:rgb(141, 122, 122);">(string, object)</span> the id or object of the dhtmlxToolbar instance that the pop-up window will be attached to</td>
        <td>Mandatory</td>
    </tr>
	<tr>
		<td>id</td>
		<td><span style="color:rgb(141, 122, 122);">(string, array)</span> the id of a toolbar's control that you want to attach a pop-up to or an array of ids if you'd like to attach the same pop-up to several controls.
</td>
        <td>Mandatory</td>
    </tr>
	<tr>
		<td>mode</td>
		<td><span style="color:rgb(141, 122, 122);">("top", "bottom", "right", "left")</span> the position that the pop-up window will appear at. By default, "bottom".<br/><br/> <i> If available space is less than required, 
dhtmlxPopup automatically changes the mode from "top" to "bottom", from "left" to "right" and vice versa</i></td>
        <td>Optional</td>
    </tr>
	<tr>
		<td>skin</td>
		<td><span style="color:rgb(141, 122, 122);">(string)</span> the skin to apply. Read more on skins <a href="">here</a>.</td>
        <td>Optional</td>
    </tr>
</tbody>
</table>




Attaching to an HTML Element
---------------------------
~~~js
<input type="text" onclick="showPopup(this);" onblur="hidePopup();" value="click">
 
<script>
    var myPop = new dhtmlXPopup();
    myPop.attachHTML("You can enter some text into here");
 
    function showPopup(inp) {
        myPop.show(20,20,400,300); //params are: x, y, width, height
    }
    function hidePopup() {
        myPop.hide();
    }
</script>
~~~

{{sample
dhtmlxPopup/samples/01_init/07_custom_object.html
}}


###Available parameters


<table class="list" cellspacing="0" cellpadding="5" border="0" >
	<thead>
	<tr>
		<th>
			Parameter
		</th>
		<th>
			Description
		</th>
        <th>
			Optionality
		</th>
	</tr>
	</thead>
<tbody>
	<tr>
		<td>mode</td>
		<td><span style="color:rgb(141, 122, 122);">("top", "bottom", "right", "left")</span> the position that the pop-up window will appear at. By default, "bottom".<br/><br/> <i> If available space is less than required, 
dhtmlxPopup automatically changes the mode from "top" to "bottom", from "left" to "right" and vice versa</i></td>
        <td>Optional</td>
    </tr>
	<tr>
		<td>skin</td>
		<td><span style="color:rgb(141, 122, 122);">(string)</span> the skin to apply. Read more on skins <a href="">here</a>.</td>
        <td>Optional</td>
    </tr>
</tbody>
</table>

Destructor
--------------------------------------------
To remove a dhtmlxPopup instance and clear the memory, use the api/dhtmlxpopup_unload.md method:

~~~js
myPop.unload();
myPop = null;
~~~
{{sample
dhtmlxPopup/samples/02_api/01_skins.html
}}

 Once you reload the page, the dhtmlxPopup's instances are destroyed automatically.

