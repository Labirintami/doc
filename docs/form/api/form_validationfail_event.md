validationFail
=============

@short:
fires when validation of a form fails

@params:
- id				string			the id of a control
- component			object			the object of a control


@example:
form.events.on("ValidationFail", function(id,component){
    // your code here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/vyipsaoa	Form. Events

@deprecated: Instead of it, you can use the [afterValidate](form/api/form_aftervalidate_event.md) and [beforeValidate](form/api/form_beforevalidate_event.md) events.
