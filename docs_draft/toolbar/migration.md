---
sidebar_label: Migration
title: Migration
---          

``` todo

5.1 -> 6.0
-----------------

### Changed API

<br/>
| Old method 					| New method	 		|
|-------------------------------|-------------------	|
| toolbar.addButton()			|toolbar.data.add		|
| toolbar.addInput()			|toolbar.data.add		|
| toolbar.addSeparator()		|toolbar.data.add		|
| toolbar.addSpacer()			|toolbar.data.add		|
| toolbar.addText()				|toolbar.data.add		|
| toolbar.attachEvent() 		|toolbar.events.on		|
| toolbar.clearAll() 			|toolbar.data.removeAll?|
| toolbar.detachEvent() 		|toolbar.events.detach	|
| toolbar.disableItem() 		|toolbar.disable		|
| toolbar.enableItem()			|toolbar.enable			|
| toolbar.getItemState() 		|toolbar.getValues  	|
| toolbar.hideItem()			|toolbar.hide			|
| toolbar.loadStruct() 			|toolbar.data.parse?	|
| toolbar.removeItem()		 	|toolbar.data.remove	|
| toolbar.setItemState()		|toolbar.setValues 		|
| toolbar.showItem()			|toolbar.show			|



### Changed events

- toolbar.attachEvent("onClick", function(id){}) -> toolbar.events.on("Click",function{id?}())
- toolbar.attachEvent("onValueChange",function(id,value){}) -> toolbar.data.events.on("Change",function(?){}) (data collection event)??


### Removed API

|										|									|									|
|---------------------------------------|-----------------------------------|-----------------------------------|
| toolbar.addButtonSelect()				| toolbar.getListOptionUserData()	| toolbar.setItemImage()			|
| toolbar.addButtonTwoState()			| toolbar.getMaxValue()				| toolbar.setItemImageDis()			|
| toolbar.addListOption()				| toolbar.getMinValue()				| toolbar.setItemText()				|
| toolbar.addSlider()					| toolbar.getParentId()				| toolbar.setItemToolTip()			|
| toolbar.clearItemImage()				| toolbar.getPosition()				| toolbar.setItemToolTipTemplate()	|
| toolbar.clearItemImageDis()			| toolbar.getType()					| toolbar.setListOptionImage()		|
| toolbar.clearListOptionImage()		| toolbar.getTypeExt()				| toolbar.setListOptionPosition()	|
| toolbar.disableListOption()			| toolbar.getUserData()				| toolbar.setListOptionSelected()	|
| toolbar.enableListOption()			| toolbar.getValue()				| toolbar.setListOptionText()		|
| toolbar.forEachItem()					| toolbar.getWidth()				| toolbar.setListOptionToolTip()	|
| toolbar.forEachListOption()			| toolbar.hideListOption()			| toolbar.setListOptionUserData()	|
| toolbar.getAllListOptions()			| toolbar.isEnabled()				| toolbar.setMaxOpen()				|
| toolbar.getInput()					| toolbar.isListOptionEnabled()		| toolbar.setMaxValue()				|
| toolbar.getItemText()					| toolbar.isListOptionVisible()		| toolbar.setMinValue()				|
| toolbar.getItemToolTip()				| toolbar.isVisible()				| toolbar.setPosition()				|
| toolbar.getItemToolTipTemplate()		| toolbar.removeListOption()		| toolbar.setSkin()					|
| toolbar.getListOptionImage()			| toolbar.removeSpacer()			| toolbar.setUserData() 			|
| toolbar.getListOptionPosition()		| toolbar.setAlign()				| toolbar.setValue()				|
| toolbar.getListOptionSelected()		| toolbar.setIconSize()				| toolbar.setWidth()				|
| toolbar.getListOptionText()			| toolbar.setIconsPath()			| toolbar.showListOption()			|
| toolbar.getListOptionToolTip()		|toolbar.setIconset()				| toolbar.unload()					|						
|										|									|									|
|										|									|									|





### Removed events

- toolbar.attachEvent("onBeforeStateChange", function(id,state){})
- toolbar.attachEvent("onButtonSelectHide",function(id){})
- toolbar.attachEvent("onButtonSelectShow",function(id){})
- toolbar.attachEvent("onEnter",function(id,value){})
- toolbar.attachEvent("onStateChange",function(id,state){})
- toolbar.attachEvent("onXLE",function(){})
- toolbar.attachEvent("onXLS",function(){})



@todo: check and update

``` todo