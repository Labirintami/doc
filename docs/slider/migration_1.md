 
---
sidebar_label: Migration
title: Migration
---          

5.1 -> 6.0 
---------------

### Changed API

- slider.unload -> slider.destructor

### Changed events

- slider.attachEvent("onChange", function(){}) -> slider.events.on("Change", function(){})
- slider.attachEvent("onMouseDown", function(){}) -> slider.events.on("MouseDown", function(){})
- slider.attachEvent("onMouseUp", function(){}) -> slider.events.on("MouseUp", function(){})

### Removed API

- slider.attachEvent	
- slider.detachEvent
- slider.disableTooltip	
- slider.enableTooltip	
- slider.getMax	
- slider.getMin
- slider.getRunnerIndex	
- slider.getStep	
- slider.hide	
- slider.isEnabled	
- slider.isVisible	
- slider.linkTo
- slider.setImagePath	
- slider.setMax	
- slider.setMin	
- slider.setOnChangeHandler	
- slider.setSize	
- slider.setSkin	
- slider.setStep	
- slider.show	

### Removed events

- slider.attachEvent("onSlideEnd", function(){})


@todo: 
- improve the page style and add links to new api pages