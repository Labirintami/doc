---
sidebar_label: getView
title: getView
---          

@short: returns the currently set view of the colorpicker

```tododeprecated ```


@params:


@returns:
- view    string   the currently set view: "palette" or "picker"


@example:
colorpicker.setView(view);

var view = colorpicker.getView();
// -> "palette"


@template: api_method
@descr:



@relatedapi:
colorpicker/api/colorpicker_setview_method.md


@changelog:

@deprecated: instead of it, you can use the colorpicker/api/colorpicker_getcurrentmode_method.md method:

~~~js
var mode = colorpicker.getCurrentMode(); // -> "palette"
~~~