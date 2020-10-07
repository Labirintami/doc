API Reference
===================

Constructor
-----------

~~~js
var richtext = new dhx.Richtext("richtext_container", {
	mode:"document"
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- an object with configuration properties (check below)


<div class='h2'>Objects</div>

- [config](api/refs/richtext_props.md)
- [events](api/refs/events_methods.md)
- [EditorAPI](api/refs/editor_api_methods.md)
- toolbar

<div class='h2' id="methods">Methods</div>

{{api
- api/richtext_destructor.md - releases occupied resources
- api/richtext_exitfullscreen.md - exits the full screen mode
- api/richtext_fullscreen.md - enters the full screen mode
- api/richtext_geteditorapi.md - returns the full list of the editor API
- api/richtext_getvalue.md - gets the content entered into the RichText editor 
- api/richtext_getstats.md - returns statistics on the entered content
- api/richtext_paint.md - repaints RichText
- api/richtext_setvalue.md - sets the provided content into the RichText editor
}}

{{block Events Bus}}
{{api
    - api/events/detach.md - detaches a handler from an event (which was attached before by the on() method)
	- api/events/fire.md - triggers an inner event
    - api/events/on.md - attaches a handler to an inner event of Vault
}}
{{end}}


<div class='h2' id="events">Events</div>

{{api
- api/richtext_action_event.md - fires on any action in the editor
- api/richtext_change_event.md - fires on any change in the editor
- api/richtext_selectionchange_event.md - fires on change of selection by a user
- api/richtext_selectionrefresh_event.md - fires on automatic returning of cursor into the editor
}}


<div class='h2' id="config">Properties</div>

{{api
- api/richtext_customstats_config.md - defines the logic of displaying custom statistics
- api/richtext_mode_config.md - the working mode of the RichText editor
- api/richtext_toolbarblocks_config.md - specifies blocks of buttons that will be shown in the Richtext toolbar
}}


@index:
- api/refs/richtext_methods.md
- api/refs/richtext_events.md
- api/refs/richtext_props.md
- api/refs/events_methods.md
- api/refs/editor_api_methods.md

