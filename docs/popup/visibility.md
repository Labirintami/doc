Managing Popup's Visibility 
---
sidebar_label: 
title: 
---          

To manage visibility of a pop-up window you have 3 methods: 

- api/dhtmlxpopup_show.md - shows a dhtmlxPopup object
- api/dhtmlxpopup_hide.md - hides a dhtmlxPopup object
- api/dhtmlxpopup_isvisible.md - checks whether the pop-up window is currently hidden or shown. Returns *true* if the pop-up is visible

Let's consider an example that uses these methods -  attaching dhtmlxPopup to a custom object when you need to manually regulate showing/hiding of the pop-up window:

<img src="popup/popup_standalone_init.png"/>

~~~js
<input type="text" onclick="showPopup(this);" onblur="hidePopup();" value="click">

<script>
function showPopup(inp) {
	if (!myPop) {
		myPop = new dhtmlXPopup();
		myPop.attachHTML("You can enter some text into here");
	}
	if (myPop.isVisible()) {
		myPop.hide();
	} else {
		var x = window.dhx4.absLeft(inp); // returns left position related to window
		var y = window.dhx4.absTop(inp); // returns top position related to window
		var w = inp.offsetWidth;
		var h = inp.offsetHeight;
		myPop.show(x,y,w,h);
	}
}	
function hidePopup() {
	if (myPop) myPop.hide();
}
</script>
~~~
