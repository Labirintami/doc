---
sidebar_label: setView
title: setView
---          

@short: shows colopicker either in the "palette" or in the "picker" view

```tododeprecated ```

@params:
- view    string   the view to show: "palette" or "picker"



@example:
colorpicker.setView(view);


@template: api_method
@descr:



@relatedapi:
colorpicker/api/colorpicker_getview_method.md


@changelog:

@deprecated: instead of it, you can use the colorpicker/api/colorpicker_setcurrentmode_method.md method:

~~~js
colorpicker.setCurrentMode(mode);
~~~