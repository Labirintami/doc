---
sidebar_label: Migration from 5.1 to 6.0
title: Migration from 5.1 to 6.0
---          

5.1 -> 6.0
-----------

### Changed API

- colorpicker.attachEvent -> colorpicker.events.on	
- colorpicker.detachEvent -> colorpicker.events.detach
- colorpicker.getSelectedColor -> colorpicker.getValue 
- colorpicker.setColor -> colorpicker.setValue
- colorpicker.setCustomColors(string|array)	-> colorpicker.setCustomColors(array)
- colopicker.unload -> colorpicker.destructor


### Changed events

- cp.attachEvent("onChange", function(color){}) -> cp.events.on("ColorChange",function(color){});
- cp.attachEvent("onCancel",function((node){}); -> cp.events.on("CancelClick",function(){});
- cp.attachEvent("onSelect",function((color,node){});	-> cp.events.on("SelectClick",function(){});

### Removed API

- colorpicker.hide		
- colorpicker.hideMemory	
- colorpicker.hideOnSelect	
- colorpicker.isVisible	
- colorpicker.linkTo
- colorpicker.loadUserLanguage	
- colorpicker.setPosition	
- colorpicker.setSkin	
- colorpicker.show
- colorpicker.showMemory	
	

### Removed events

- colorpicker.attachEvent("onHide",function((){});	
- colorpicker.attachEvent("onSaveColor",function((){});	
- colorpicker.attachEvent("onShow",function((){});	
	


@todo:
check, add links to new api