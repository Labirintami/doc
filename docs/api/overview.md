---
sidebar_label: API Overview
title: API Overview
---

### Constructor


~~~js
var richtext = new dhx.Richtext("richtext_container", {
	mode:"document"
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- an object with configuration properties (check below)


<!-- <div class='h2'>Objects</div> todo

- [config](api/refs/richtext_props.md)
- [events](api/refs/events_methods.md)
- [EditorAPI](api/refs/editor_api_methods.md)
- toolbar -->

### Methods


| Name                                             | Description                                        |
|--------------------------------------------------|----------------------------------------------------|
| [destructor](api/richtext_destructor.md)         | releases occupied resources                        |
| [exitFullScreen](api/richtext_exitfullscreen.md) | exits the full screen mode                         |
| [fullScreen](api/richtext_fullscreen.md)         | enters the full screen mode                        |
| [getEditorAPI](api/richtext_geteditorapi.md)     | returns the full list of the editor API            |
| [getValue](api/richtext_getvalue.md)             | gets the content entered into the RichText editor  |
| [getStats](api/richtext_getstats.md)             | returns statistics on the entered content          |
| [paint](api/richtext_paint.md)                   | repaints RichText                                  |
| [setValue](api/richtext_setvalue.md)             | sets the provided content into the RichText editor |                               
                                 

#### Events Bus

| Name                           | Description                                                                     |
|--------------------------------|---------------------------------------------------------------------------------|
| [detach](api/events/detach.md) | detaches a handler from an event (which was attached before by the on() method) |
| [fire](api/events/fire.md)     | triggers an inner event                                                         |
| [on](api/events/on.md)         | attaches a handler to an inner event of Vault                                   |


### Events

| Name                                                       | Description                                            |
|------------------------------------------------------------|--------------------------------------------------------|
| [Action](api/richtext_action_event.md)                     | fires on any action in the editor                      |
| [Change](api/richtext_change_event.md)                     | fires on any change in the editor                      |
| [selectionChange](api/richtext_selectionchange_event.md)   | fires on change of selection by a user                 |
| [selectionRefresh](api/richtext_selectionrefresh_event.md) | fires on automatic returning of cursor into the editor |



### Properties

| Name                                      | Description                                                            |
|-------------------------------------------|------------------------------------------------------------------------|
| [customStats](api/richtext_customstats_config.md)   | defines the logic of displaying custom statistics                      |
| [mode](api/richtext_mode_config.md)          | the working mode of the RichText editor                                |
| [toolbarBlocks](api/richtext_toolbarblocks_config.md) | specifies blocks of buttons that will be shown in the Richtext toolbar |





