
---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 

@params:
- value     number[]     the current value of the control


@example:
form.getItem("slider").events.on("Change", function(value) {
    console.log("Change", value);
});


@template: api_event
@descr:

@changelog: added in v7.0