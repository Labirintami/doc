---
sidebar_label: How to create Date picker
title: How to create Date picker
---

You can use DHTMLX Calendar as a date picker by putting it inside a popup. 



First, you should create a popup and then attach a calendar into it. Follow the steps below:

1\. create an input to enter a date into and give it the id "date-input":

~~~html
<input type="text" id="date-input" style="width: 200px;" readonly/>
~~~

2\. use corresponding object constructors to create a calendar and a popup objects. Note that in this case *null* is used instead of container for Calendar:

~~~js
var calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});
var popup = new dhx.Popup();
~~~

3\. attach the calendar to the popup using the popup/api/popup_attach_method.md method of Popup:

~~~js
popup.attach(calendar);
~~~

4\. use the popup/api/popup_show_method.md method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input:

~~~js
var dateInput = document.getElementById("date-input");
dateInput.addEventListener("click", function() {
	popup.show(dateInput);
});
~~~

5\. define the logic of closing the popup with calendar using the popup/api/popup_hide_method.md method of Popup. For example, on selecting a new date in the calendar:

~~~js
calendar.events.on("change", function() {
	dateInput.value = calendar.getValue();
	popup.hide();
});
~~~

<iframe src="https://snippet.dhtmlx.com/mj7jr6ro?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

{{editor    https://snippet.dhtmlx.com/mj7jr6ro	Calendar. Date Picker}}
