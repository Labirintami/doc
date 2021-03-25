---
sidebar_label: Skinning Popup
title: Skinning Popup
description: 
---          

```tododelete не используется?``` 

The library provides 4 predefined skins:

- "material" (default)
- "dhx_skyblue"
- "dhx_web"
- "dhx_terrace"

To set the skin for a dhtmlxPopup object, use the api/dhtmlxpopup_setskin.md method.

<br/>

~~~js
var myPop = new dhtmlXPopup();
myPop.setSkin("dhx_web"); 
~~~

<br/>

<table class="list" cellspacing="0" cellpadding="5" border="0">
	<thead>
	  <tr>
        <th style="text-align:center;">
			"material"
		</th>
		<th>
			"dhx_skyblue"
		</th>
		<th>
			"dhx_web"
		</th>
		<th>
			"dhx_terrace"
		</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
         <td style="text-align:center;"><img src="popup/material_skin.png"/></td>
		 <td style="text-align:center;"><img src="popup/skyblue_skin.png"/></td>
		 <td style="text-align:center;"><img src="popup/web_skin.png"/></td>
		 <td style="text-align:center;"><img src="popup/terrace_skin.png"/></td>
      </tr>
    </tbody>
</table>

{{sample
dhtmlxPopup/samples/02_api/01_skins.html
}}


Skin Detection
-----------------------------------------
The following priority (from higher to lower) is used to determine the skin to apply:

1. The **skin** parameter of the dhtmxlPopup object constructor
2. The **dhtmlx.skin** property
3. The form/toolbar skin (if the pop-up window is attached to a form or a toolbar)
4. dhtmlxPopup tries to detect the skin automatically (each skin css file has a corresponding record to help to detect the skin)
5. The default "material" skin is used

For example, if you include on the page the only css file - "dhxpopup_dhx_terrace" - and instantiate dhtmlxPopup without specifying the **skin** parameter, then the "dhx_terrace" skin will be detected automatically. 

``