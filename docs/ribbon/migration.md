
---
sidebar_label: Migration
title: Migration
---          

## Removed API

- check()
- getInput()
- getItemOptionText()
- getItemState()
- getItemText()
- getItemType()
- getValue()
- isChecked()
- isEnabled()
- isVisible()
- removeItem()
- setIconPath()
- setIconset()
- setItemImage()
- setItemImageDis()
- setItemOptionText()
- setItemState()
- setItemText()
- setSizes()
- setSkin()
- setValue()
- tabs()
- uncheck()
- unload()

## Changed API

- attachEvent() -> events.on()
- detachEvent() -> events.detach()
- loadStruct() -> data.parse() / data.load()

## Events

### Changed

- onClick -> click

### Removed

- onCheck
- onEnter
- onSelect
- onSelectOption
- onStateChange
- onTabClick
- onTabClose
- onValueChange
- onXLE
- onXLS
