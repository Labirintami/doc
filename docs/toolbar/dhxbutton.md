---
sidebar_label: DHXButton
title: DHXButton
---  

```tododelete не используется?``` 

```

This is a DHX-styled button that can be used in any Suite component or separately outside the dhtmlxSuite.

![DHX Button](../assets/toolbar/dhxbutton.png)

Adding buttons
-----------------

A DHX button can be easily added to a toolbar with the help of the **add()** method of DataCollection:

~~~js
myToolbar.data.add({
    type:"dhxButton", value:"Best button"
});
~~~


Attributes
----------------

The **dhxButton** object has the following properties:

- **type** - (*string*) required, the type of a control, set it to "dhxButton";
- **id** - (*string*) the id of a control, auto-generated if not set;
- **icon** - (*string*)	optional, an icon for the DHXButton;
- **hotkey** - (*string*) optional, the name of the hot key for the DHXButton;
- **value** - (*string*) optional, a value for the DHXButton;
- **tooltip** - (*string*) optional, a tooltip for the DHXButton.



Operations with a block
-----------------------

You can perform operations over the block control with the help of the available Toolbar and Data Collection API.
The details are provided in the article toolbar/common_methods.md.

@todo:
add style guide, example, front image 

```