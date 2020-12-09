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
			<td rowspan="2"><code>config</code></td>
			<td rowspan="2"><code>object</code></td>
			<td>an object with available statistical data about edited text:
			<ul><li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li>
            <li>as a <i>function</i> takes several parameters:
            <ol>- <b>cell</b> - (<i>string</i>) the value of a cell</ol>
            <ol>- <b>columnCells</b> - (<i>array</i>) an array of all cell values in the specified column</ol>
            <ol>- <b>row</b> - (<i>object</i>) an object with all cells in a row</ol>
            <ol>- <b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</ol>
            </li></ul>
			</td>
		</tr>
	</tbody>
</table>
___

## `getValue`

Returns the content of the RichText editor in the chosen format

`string getValue( [string mode] );`


| Parameter | Type     | Description                                                           |
|-----------|----------|-----------------------------------------------------------------------|
| `mode`    | `string` | the format of returned content:"html" (default), "markdown" or "text" |

**Returns:**

| Type     | Description                        |
|----------|------------------------------------|
| `string` | the content of the RichText editor |



```js 
// getting content in the markdown format
var content = richtext.getValue("markdown");
```
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
