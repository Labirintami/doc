---
sidebar_label: getProperties
title: getProperties
---

`to do - Check - example, properties, @changelog: в конец, сейчас @example: захватывает текст в блок до @changelog:, как и @signature:`

@short: returns an object with the available configuration properties of the control and their values

@signature:

@example: const form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    padding: "40px",
    rows: [
        {
            type: "container", 
            name: "grid",
            padding: "12px 0px",
            height: "400px",
        },
    ]
});

form.getItem("container").getProperties();
//-> the returned object:
{
    "grid": {
        "width": "content",
        "height": "400px",
        "padding": 0
    },
}

@changelog: added in v7.2

The returned object of the Container control can contain the following properties:
- `hidden` - (boolean) defines whether a control is hidden
- `disabled` - (boolean) defines whether a control is enabled (false) or disabled (true)
- `width` - (string|number|"content") the width of a control 
- `height` - (string|number|"content") the height of a control 
- `padding` - (string|number) sets padding between a cell and a border of a control
- `css` - (string) adds style classes to a control string 
