
---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated
 

@params:
- value       string    the validated value
- isValid     boolean     the result of validation


@example:
form.getItem("radiogroup").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});


@template: api_event
@descr:


@changelog: added in v7.0