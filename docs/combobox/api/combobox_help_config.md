---
sidebar_label: help
title: help
---          

@short: adds an icon with a question mark next to the Combo input

```tododeprecated
help?: string;
```

@example: 
var combobox = new dhx.Combobox("combo_container",{
	help:"Some text"
});

@template:	api_config
@descr: 
The property is useful while using Combobox in form.


@deprecated: instead of it, you can use the combo/api/combobox_helpmessage_config.md property:

~~~js
var combobox = new dhx.Combobox("combo_container",{
	helpMessage:"Some text"
});
~~~