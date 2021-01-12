
---
sidebar_label: beforeChangeProperties
title: beforeChangeProperties
---          

@short: fires before configuration attributes of the control are changed dynamically

@params:
- properties     object      an object with configuration attributes of the control and their new values

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("simplevault").events.on("BeforeChangeProperties", function(properties) {
    console.log("BeforeChangeProperties", properties);
    return true;
});


@template: api_event
@descr:

@relatedapi: form/api/simplevault/simplevault_setproperties_method.md


@changelog: added in v7.0
