cell
=============

@short: returns the config object of a cell


@params:
- id	string		the id of a cell

@returns:
- config		object		the config object of a cell


@example:
layout.cell("1");


@template: api_method
@descr:
A returned object looks like this:

~~~js
{gravity: true, header: "Cell 1", id: "1"}
~~~

@deprecated: instead of it, you can use the layout/api/layout_getcell_method.md method:
~~~js
layout.getcell("toolbar");
~~~


@changelog:


