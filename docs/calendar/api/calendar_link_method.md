---
sidebar_label: link
title: link
---          

@short: links a calendar to another calendar for selecting a date range

```todoapi
void link(object calendar2); //todo old
link(calendar: ICalendar): void; //todo new
```

@params:
- calendar2 		object		an object of a calendar to link to

@example:
calendar.link(calendar2);

@template: api_method
@descr:

See the code and result in the live example below:
<iframe src="https://snippet.dhtmlx.com/dxo54017?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

####  See also
@related:calendar/operating_calendar.md#linkingtwocalendars //todo