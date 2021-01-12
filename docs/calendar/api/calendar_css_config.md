
---
sidebar_label: css
title: css
---          

@short: 
adds style classes to Calendar




@type: string

@example: 
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>
 
var calendar = new dhx.Calendar({
    css:"my_first_class my_second_class"
});


@template:	api_config
@descr: 
The DHTMLX library provides a set of CSS classes that you can apply to change appearance of Calendar.

~~~js
var calendar = new dhx.Calendar({
    css:"dhx_widget--bg_white dhx_widget--bordered"
});
~~~

### List of CSS classes
{{api

- <b>dhx_widget--bg_white</b> - Sets white background to a widget

- <b>dhx_widget--bg_gray</b> - Sets gray background to a widget

- <b>dhx_widget--bordered</b> - Sets borders on all sides of a widget

- <b>dhx_widget--border_top</b> - Sets a border on the top side of a widget

- <b>dhx_widget--border_bottom</b> - Sets a border on the bottom side of a widget

- <b>dhx_widget--border_left</b> - Sets a border on the left side of a widget

- <b>dhx_widget--border_right</b> - Sets a border on the right side of a widget

- <b>dhx_widget--border-shadow</b> - Adds a shadow border to a widget

- <b>dhx_widget--no-border_top</b> - Removes the top border of a  widget

- <b>dhx_widget--no-border_bottom</b> - Removes the bottom border of a widget

- <b>dhx_widget--no-border_right</b> - Removes the right border of a widget

- <b>dhx_widget--no-border_left</b> - Removes the left border of a widget
}}

@relatedsample:
https://snippet.dhtmlx.com/2045cbe1	Calendar. Adding Custom Styles

@related:
calendar/customization.md#stylingcalendar
calendar/how_to_start.md#initializecalendar