
---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a control is hidden
 

@params:
- value     Date|string     the current value of the control
- init      boolean     true, if the event is triggered on the datepicker control initialization, otherwise false

@returns:
param   boolean     false - to prevent a control from being hidden, otherwise - true


@example:
form.getItem("datepicker").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});


@template: api_event
@descr:

@changelog: added in v7.0