
---
sidebar_label: Form API
title: Form API
---          

Constructor
----------------

~~~js
var form = new dhx.Form("form_container");
~~~

Parameters:

- the HTML container of dhtmlxForm
- configuration settings (check below)

Methods
-------------

###getValue

- short:gets current values/states of controls
- params:
	- asFormData	boolean		optional, defines whether values of Form controls should be returned as Form Data
- returns:
	- state - (object) - an object with IDs of controls and their values/states
- example:
~~~js
var state = form.getValue();//->{"name":"John Doe","email":"jd@mail.com", "agree":true}
~~~

###validate

- short: validates form fields
- returns:
	- result	boolean 	the result of validation: true, if a form is valid, otherwise - false
- example:
~~~js
var result = form.validate();
~~~

### destructor

- short: releases occupied resources
- example:
~~~js
form.destructor();
~~~

Events
---------------

###Change 

- short: fires on changing a value of a control
- params:
	- id			string		the id of a control
    - new_value		any			a new value set for the control
- example:
~~~js
form.events.on("Change",function(id, new_value){
	// your code here
});
~~~
	
###ButtonClick 

- short:fires after a click on a button in a form
- params:
	- id 	string	 	the ID of a clicked button
    - e 	Event 		a native event object
- example:
~~~js
form.events.on("ButtonClick", function(id,e){
    console.log(id);
});
~~~

###ValidationFail 

- short:fires when validation of a form fails
- params:
	- id				string		the id of a control
    - component			any			?
- example:
~~~js
form.events.on("ValidationFail", function(id,component){
    // your code here
});
~~~

@todo:
2nd param of validationFail