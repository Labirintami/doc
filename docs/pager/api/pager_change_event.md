---
sidebar_label: change
title: change
---          

@short:
fires on changing the active page

@params:
- index     number  the index of a newly active page
- previousIndex     number  the index of a previously active page


@example:
pager.events.on("Change", function(index, previousIndex) {
  // your logic here
});


@template: api_event
@descr:


@relatedsample:
pager/05_events/01_pager_events.html

