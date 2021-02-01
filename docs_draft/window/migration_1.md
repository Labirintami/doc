---
sidebar_label: Migration from 5.1 to 6.0
title: Migration from 5.1 to 6.0
---          

```todo

This article will help you to migrate from the [previous version 5.1 of dhtmlxWindow](https://docs.dhtmlx.com/api__refs__dhtmlxwindows.html) to the totally renewed version 6.0. Check the list below to explore all the changes.

5.1 -> 6.0
-------------

{{note  The [API of version 5.1](https://docs.dhtmlx.com/api__refs__dhtmlxwindows.html) is still available, but it is incompatible with the [API of version 6.0](window/temp_api_windows.md).}}


5.1 -> 6.0
--------------

### Changed API

- dhxWindow.attachContextMenu -> dhxWindow.attach
- dhxWindow.attachEvent -> dhxWindow.events.on
- dhxWindow.detachEvent -> dhxWindow.events.detach
- dhxWindow.unload -> dhxWindow.destructor

### Removed API


- dhxWindow.attachViewportTo	
- dhxWindow.createWindow	
- dhxWindow.detachContextMenu	
- dhxWindow.findByText	
- dhxWindow.forEachWindow	
- dhxWindow.getBottommostWindow	
- dhxWindow.getContextMenu	
- dhxWindow.getTopmostWindow	
- dhxWindow.isWindow	
- dhxWindow.setSkin	
- dhxWindow.setViewport
- dhxWindow.window	

### Removed events

- dhxWindow.attachEvent("onBeforeMoveStart",function(){})	
- dhxWindow.attachEvent("onBeforeResizeStart",function(){})	
- dhxWindow.attachEvent("onClose",function(){})	
- dhxWindow.attachEvent("onContentLoaded",function(){})	
- dhxWindow.attachEvent("onFocus",function(){})
- dhxWindow.attachEvent("onHelp", function(){})	
- dhxWindow.attachEvent("onHide",function(){})	
- dhxWindow.attachEvent("onMaximize",function(){})	
- dhxWindow.attachEvent("onMinimize",function(){})	
- dhxWindow.attachEvent("onMoveCancel",function(){})	
- dhxWindow.attachEvent("onMoveFinish",function(){})	
- dhxWindow.attachEvent("onParkDown",function(){})	
- dhxWindow.attachEvent("onParkUp",function(){})	
- dhxWindow.attachEvent("onResizeCancel",function(){})	
- dhxWindow.attachEvent("onResizeFinish",function(){})
- dhxWindow.attachEvent("onShow",function(){})	
- dhxWindow.attachEvent("onStick",function(){})	
- dhxWindow.attachEvent("onUnStick",function(){})	


@todo:
- check and add links to new api pages (for changed apis)<br/>
- alternatives for removed apis?

```