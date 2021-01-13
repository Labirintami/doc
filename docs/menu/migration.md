
---
sidebar_label: Migration
title: Migration
---          

``` todo

## Migration from 4.0 to X.0

### Removed API

- clearHref()
- clearItemImage()
- enableDynamicLoading()
- enableEffect()
- getCheckboxState()
- getCircuit()
- getContextMenuHideAllMode()
- getHotKey()
- getItemImage()
- getItemPosition()
- getItemText()
- getItemType()
- getRadioChecked()
- getTooltip()
- getUserData()
- isContextZone()
- isItemEnabled()
- isItemHidden()
- loadFromHTML()
- removeContextZone()
- setAlign()
- setAutoHideMode()
- setAutoShowMode()
- setCheckboxState()
- setContextMenuHideAllMode()
- setHotKey()
- setHref()
- setIconsPath()
- setIconset()
- setItemImage()
- setItemPosition()
- setItemText()
- setOpenMode()
- setOverflowHeight()
- setRadioChecked()
- setSkin()
- setTooltip()
- setTopText()
- setUserData()
- setVisibleArea()
- setWebModeTimeout()
- showItem()
- unload()

### Changed API

| Old method 			| New method 			|
|-----------------------|-----------------------|
| addNewChild()			|						|
| addCheckbox()	 		|						|
| addContextZone()		|						|
| addNewSeparator()		| 						|
| addNewSibling()		| 						|
| addRadioButton()		| data.add() 			|
| attachEvent() 		| events.on()			|
| clearAll() 			| data.removeAll()		|
| detachEvent() 		| events.detach()		|
| forEachItem() 		| data.map()			|
| getParentId() 		| data.getParent() 		|
| hideItem() 			| hide()				|
| loadStruct() 			| data.load()			|
| removeItem() 			| data.remove()			|
| renderAsContextMenu() | showAt() 				|
| serialize() 			| data.serialize()		|
| setItemDisabled()		| disable() 			|
| setItemEnabled()		| enable() 				|
| showContextMenu() 	| contextmenu.showAt() 	|

## Events

### Changed

- onClick -> click

### Removed

- onAfterContextMenu
- onBeforeContextMenu
- onCheckboxClick
- onContextMenu
- onHide
- onRadioClick
- onShow
- onTouch
- onXLE
- onXLS

## Migration from 3.6 to 4.0

1) In the new version of DHTMLX Library the names of some methods were changed.  We've made these changes as the previous
names of the methods under question didn't reflect their functionality precisely, which could cause ambiguity
or misunderstanding.

2) Since the release of the latest version of DHTMLX library some functionality has been removed. It was made as this functionality is 
no longer needed and therefore isn't supported. 

<style>
	table.my_table {
		width: 100%;
	}
	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.type_info {
		text-align: center;
        background-color: #E3F6FF;
	}
	table.my_table td.version_info {
		text-align: center;
        background-color: #FFDAFF;
	}
</style>
<table class="my_table">

<tr><td class="version_info">Up to version 3.6</td><td class="version_info">From version 4.0</td></tr>

<tr><td colspan="2" class="type_info">Function names changed</td></tr>

<tr><td>myMenu.loadXML(xmlFile, onLoad)</td><td>myMenu.loadStruct(xmlFile, onLoad)</td></tr>
<tr><td>myMenu.loadXMLString(xmlString, onLoad)</td><td>myMenu.loadStruct(xmlString, onLoad)</td></tr>

<tr><td colspan="2" class="type_info">Functionality was removed</td></tr>

<tr><td>myMenu.setIconPath(path)</td><td>myMenu.setIconsPath(path)</td></tr>
<tr><td>myMenu.setImagePath()</td><td>myMenu.setIconsPath(path)</td></tr>

</table>

@todo: check all old methods and unify the look of the page

``` todo
