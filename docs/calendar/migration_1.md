 
---
sidebar_label: Migration
title: Migration
---          
5.1 -> 6.0 
---------------

### Changed API

- calendar.attachEvent() -> calendar.events.on()
- calendar.callEvent() -> calendar.events.fire()
- calendar.detachEvent() -> calendar.events.detach()
- calendar.disableDays() -> calendar.config.block ??
- calendar.getDate() -> calendar.getValue()
- calendar.loadUserLanguage() -> dhx.i18n.setLocale()
- calendar.setDate() -> calendar.setValue()

### Changed events

- calendar.attachEvent("onChange",function(date, state){}) -> calendar.events.on("Change",function(date, oldDate, click){})
- calendar.attachEvent("onClick", function(date){}) -> calendar.events.on("DateClick",function(date?){})
- calendar.attachEvent("onBeforeChange", function(date){}) -> calendar.events.on("BeforeChange",function(date, oldDate, click){})
- calendar.attachEvent("onMouseOver", function(date, e){}() -> calendar.events.on("HoverDate", function(e, date){})

### Removed API

- calendar.attachObj()
- calendar.clearInsensitiveDays()
- calendar.clearSensitiveRange()
- calendar.clearTooltip()
- calendar.detachObj()
- calendar.enableDays()
- calendar.enableIframe()
- calendar.getCellDimension()
- calendar.getFormatedDate()
- calendar.getPopup()
- calendar.getWeekNumber()
- calendar.hide()
- calendar.hideTime()
- calendar.hideToday()
- calendar.hideWeekNumbers()
- calendar.isVisible()
- calendar.setDateFormat()
- calendar.setFormatedDate()
- calendar.setHolidays()
- calendar.setInsensitiveDays()
- calendar.setInsensitiveRange()
- calendar.setMinutesInterval()	
- calendar.setParent()	
- calendar.setPosition()
- calendar.setSensitiveRange()	
- calendar.setSkin()	
- calendar.setTooltip()	
- calendar.setWeekStartDay()	
- calendar.show()
- calendar.showMonth()	
- calendar.showTime()	
- calendar.showToday()	
- calendar.showWeekNumbers()	
- calendar.unload()


### Removed events

- calendar.attachEvent("onArrowClick", function(date, nextdate){})
- calendar.attachEvent("onButtonClick", function(date){})
- calendar.attachEvent("onHide", function(){})
- calendar.attachEvent("onMouseOut", function(date, e){})
- calendar.attachEvent("onPopupHide", function(date){})
- calendar.attachEvent("onPopupShow", function(date){})
- calendar.attachEvent("onShow", function(){})
- calendar.attachEvent("onTimeChange", function(date){})


### Removed other

- calendar.prototype.lang
- calendar.prototype.langData
