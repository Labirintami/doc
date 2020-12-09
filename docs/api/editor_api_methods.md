---
sidebar_label: Editor API
title: Editor API
---


## `add`

Adds a new text into the editor

`void add(string|object config, [object selection] );`

| Parameter   | Type            | Description                                                           |
|-------------|-----------------|-----------------------------------------------------------------------|
| `config`    | `string,object` | a string with a text or a text block as an object. Check the details |
| `selection` | `object`        | optional, text selection (its position relative to all other text). Check the details |

```js 
// adding simple text
richtext.getEditorAPI().add("text");
// or
rich.getEditorAPI().add({type:"text",data:"text"});
 
// adding a text node with style into the predefined position
rich.getEditorAPI().add({
    type: "textnode",
    data: {
        text: "Hello world",
        style: {
            bold: true
        }
    }
}, {
     left: {
        blockIndex: 0,
        textIndex: 0,
        offset: 0
     },
    range: false
});
 
// adding a data model
rich.getEditorAPI().add({type:"full",data:[
    {
        "style": {
            "style": "h1"
        },
        "textNodes": [
            {
                "style": {},
                "text": "Hello "
            },
            {
                "style": {
                    "italic": true
                },
                "text": "world"
            },
            {
                "style": {},
                "text": "!"
            }
        ]
    }
]});
```
**Related sample:** [RichText. Add](https://snippet.dhtmlx.com/6dmccf0l)

#### Details

The returned EditorAPI method contains a list of methods you can use to apply different operations to the editor. Check the list of editor API methods below.

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>config</code></td>
			<td><code>string|object</code></td>
			<td>a <i>string</i> with a text or a text block as an <i>object</i>. If set as an object, the parameter includes:
				<ul>
					<li><b>type</b> - (<i>string</i>) the type of a text block: "text" (a string) | "textnode" (a text node) | "full" (a data model);</li>
					<li><b>data</b> - (<i>string|object|array</i>) the content of a text block. It can be:
						<ul>
							<li>a simple <b>string</b> with text;</li>
							<li>a text node as an <b>object</b> that includes:
								<ul>
									<li>a text as a <i>string</i>;</li>
									<li>an <i>object</i> with style properties.</li>
								</ul>
							<li>a data model as an <b>array</b>. It contains objects with styles and text nodes. Each text node includes:
								<ul>
									<li>an <i>array</i> with text nodes objects (each of them contains two <i>key:value</i> values for a text string and an object with style settings, as described above)</li>
									<li>a style <i>object</i></li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><code>selection</code></td>
			<td><code>object</code></td>
			<td>optional, text selection (its position relative to all other text). Includes the following attributes:
				<ul>
					<li><b>range</b> - (<i>boolean</i>) defines whether the selection includes one character (<i>false</i>), or a range of them (<i>true</i>).</li>
					<li><b>left</b> - (<i>object</i>) the left coordinate of selection, contains the following properties:
						<ul>
							<li><b>blockIndex</b> - (<i>number</i>) the index of a text block (a text line), enumeration starts from 0;</li>
							<li><b>textIndex</b> - (<i>number</i>) the index of a text node (a text with common styling), enumeration starts from 0;</li>
							<li><b>offset</b> - (<i>number</i>) the number of the first character within a text node in the selection.</li>
						</ul>
					</li>
					<li><b>right</b> - (<i>object</i>) the right coordinate of selection, contains the following properties:
						<ul>
							<li><b>blockIndex</b> - (<i>number</i>) the index of a text block (a text line), enumeration starts from 0;</li>
							<li><b>textIndex</b> - (<i>number</i>) the index of a text node (a text with common styling), enumeration starts from 0;</li>
							<li><b>offset</b> - (<i>number</i>) the number of the last character within a text node in the selection. You can also call the <b>getSelection</b> method instead of passing the second parameter.</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

___

## `getModel`

Returns the data model of the entered text in the JSON format

`array getModel();`

**Returns:**

| Type     | Description                        |
|----------|------------------------------------|
| `array` | the data model of the entered text |



```js 
var model = rich.getEditorAPI().getModel();
```

**Related sample:** [RichText. Get Model](https://snippet.dhtmlx.com/ef6uolvq)

#### Details:

The returned value is an array of the following type:

```js
[
    {
        "style": {
            "style": "h1"
        },
        "textNodes": [
            {
                "style": {},
                "text": "Hello "
            },
            {
                "style": {
                    "italic": true
                },
                "text": "world"
            },
            {
                "style": {},
                "text": "!"
            }
        ]
    }
]
```

It contains objects with styles and text nodes. Each text node includes:

- an <i>array</i> with text nodes objects (each of them contains two <i>key:value</i> pairs for a text string and an object with style settings)
- a style <i>object</i>
___

## `getStats`

Returns statistics about the entered content

`object getStats();`

**Returns:**

| Type     | Description                                                 |
|----------|-------------------------------------------------------------|
| `object` | an object with available statistical data about edited text |


```js 
var chars = richtext.getStats(); 
// -> {chars: 467, words: 80, charsExlSpace: 393}
```

Related samples:
Getting statistics. //todo

#### Details
Getting separate statistical data fields
You can get each field of statistical data separately, as it's described below.

**Characters**

To return the count of characters typed into the editor, use the chars property of the getStats method.

```js 
var chars = richtext.getStats().chars;
```

Words
To return the count of words typed into the editor, use the words property of the getStats method.

```js 
var chars = richtext.getStats().words;
```

To return the count of characters typed into the editor excluding the number of spaces, use the charsExlSpace property of the getStats method.

```js 
var chars = richtext.getStats().charsExlSpace;
```

### Getting custom statistics
It is also possible to display custom statistics via the customStats configuration option for any other text items, e.g. the number of sentences:

```js 
var rich = new dhx.Richtext("rich", {
    customStats: [
        {
           name: "chars"
        },
        {
           name: "words"
        },
        {
           name: "sentences",
           cb: function(text) {
               var rawSentences = text.split(/[.?!]+/);
               var count = 0;
               for (var i=0; i<rawSentences.length; i++) {
                   if (rawSentences[i].length > 0) {
                       count += 1;
                   }
               }
               return count;
           }
        }
    ],
    toolbarBlocks: ["default", "stats"]
});
```
___

## `paint`

Repaints RichText

`void paint();`

```js 
richtext.paint();
```
___

## `setValue`

Adds content into the RichText editor

`void setValue(string value,string mode);`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `value`   | `string` | the context you want to add into the editor in either HTML or Markdown format |
| `mode`    | `string` | optional, the format of text parsing: "html" or "markdown"                    |

```js 
var htmlText = `<h1>Meet DHTMLX Rich Text Editor!</h1>` +
`<p>This demo will show you a customizable JavaScript rich text editor.</p>` +
`<p><i>To learn more, read </i><a href="http://docs"><i>documentation</i></a></p>.`
 
// adding HTML content
richtext.setValue(htmlText);
```

**Details**
An example of adding Markdown content is given below:

```js 
var mdText = `# Meet DHTMLX Rich Text Editor!
 
This demo will show you a customizable **JavaScript rich text editor**.
 
*To learn more, read [documentation](http://docs)*.`
 
richtext.setValue(mdText,"markdown");
```

:::caution
Please note that for a text in the Markdown format you need to define paragraphs by empty lines.
:::
