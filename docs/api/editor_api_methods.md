---
sidebar_label: Editor API
title: Editor API
---

Test
## `add`

Adds a new text into the editor

`void add(string|object config, [object selection] );`

| Parameter   | Type            | Description                                                           |
|-------------|-----------------|-----------------------------------------------------------------------|
| `config`    | `string,object` | a string with a text or a text block as an object. Check the details |
| `selection` | `object`        | optional, text selection (its position relative to all other text). Check the details |

**Example**

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

**Related samples:** [RichText. Add](https://snippet.dhtmlx.com/6dmccf0l)

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
							</li>
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

**Example**

```js 
var model = rich.getEditorAPI().getModel();
```

**Related samples:**  [RichText. Get Model](https://snippet.dhtmlx.com/ef6uolvq)

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

## `getPosition`

Returns the position of text selection relative to the browser window

`object getPosition();`

**Returns:**

| Type     | Description                                                 |
|----------|-------------------------------------------------------------|
| `object` | the position of text selection relative to the browser window|

**Example**

```js 
var position = rich.getEditorAPI().getPosition();
```

**Related samples:** [RichText. Get Position](https://snippet.dhtmlx.com/nv42vsjg)

#### Details

The returned value is an object of the following type:

~~~js
{
    "xStart": 402.5,
    "yStart": 172,
    "xEnd": 461.5,
    "yEnd": 172
}
~~~

where:

- **xStart** - the X coordinate of the selection start
- **yStart** - the Y coordinate of the selection start
- **xEnd** - the X coordinate of the selection end
- **yEnd** - the Y coordinate of the selection end
___

## `getSelection`

Returns the position of text selection relative to all other text

`object getSelection();`

**Returns:**

| Type     | Description                                                 |
|----------|-------------------------------------------------------------|
| `object` | the position of text selection relative to all other text     |

**Example**

```js 
var selection = rich.getEditorAPI().getSelection();
```

**Related samples:** [RichText. Get Selection](https://snippet.dhtmlx.com/se4p4vin)

#### Details

The returned value is an object of the following type:

~~~js
{
    "left": {
        "blockIndex": 0,
        "textIndex": 0,
        "offset": 8
    },
    "right": {
        "blockIndex": 0,
        "textIndex": 0,
        "offset": 12
    },
    "range": true
}
~~~

where:

<table>
	<tbody>
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
	</tbody>
</table>

___

## `remove`

Removes a selected text

`void remove( [object selection] );`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `selection`   | `object` | optional, text selection (its position relative to all other text). Check the details |

**Example**

```js 
var api = rich.getEditorAPI();
 
rich.getEditorAPI().remove(api.getSelection());
```

**Related samples:** [RichText. Remove](https://snippet.dhtmlx.com/0vzuwyk1)

#### Details

Check the detailed description of the parameter:

<table>
	<tbody>
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

## `setModel`

Sets a structured text with styles (a data model as JSON) for the editor

`void setModel(array structure, [object selection] );`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `structure`   | `array` | an array of objects with styles and text nodes. Check the details |
| `selection`   | `object` | optional, text selection (its position relative to all other text). Check the details |

**Example**

```js 
richtext.getEditorAPI().setModel([
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
]);
```

**Related samples:** [RichText. Set Model](https://snippet.dhtmlx.com/37ffpg6t)

#### Details 

Check the detailed description of parameters:

<table>
	<tbody>
		<tr>
			<td><code>structure</code></td>
			<td><code>array</code></td>
			<td>an array of objects with styles and text nodes. Each text node includes:
				<ul>
					<li>an <i>array</i> with text nodes objects (each of them contains two <i>key:value</i> pairs for a text string and an object with style settings)</li>
					<li>a style <i>object</i></li>
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

## `setSelection`

Applies selection to the specified text position

`void setSelection(object selection);`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `selection`   | `object` | the position of text selection relative to all other text                  |


**Example**

~~~js
richtext.getEditorAPI().setSelection({
    "left": {
        "blockIndex": 0,
        "textIndex": 0,
        "offset": 0
    },
    "right": {
        "blockIndex": 0,
        "textIndex": 0,
        "offset": 9
    },
    "range": true
});
~~~

**Related samples:** [RichText. Set Selection](https://snippet.dhtmlx.com/2uvls0y9)

#### Details

Check the detailed description of the parameter:

<table>
	<tbody>
		<tr>
			<td><code>selection</code></td>
			<td><code>object</code></td>
			<td>the position of text selection relative to all other text. Includes the following attributes:
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

## `update`

Modifies the entered text

`void update(object config, [object selection] );`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `config`   | `object` | an object with details of updating. Check the details                         |
| `selection`   | `object` | optional, text selection (its position relative to all other text). Check the details |

**Example**

```js 
var api = rich.getEditorAPI();
 
rich.getEditorAPI().update({
    modifier: "color",
    value: "#BB2B1A"
  }, api.getSelection());
});
```

**Related samples:** [RichText. Update](https://snippet.dhtmlx.com/6kf43fmz)

#### Details:

Check the detailed description of parameters:

<table>
	<tbody>
		<tr>
			<td><code>config</code></td>
			<td><code>object</code></td>
			<td>an object with details of updating. It contains two parameters:
				<ul>
					<li><b>modifier</b> - (<i>object</i>) an object with a set of styling options that will be updated;</li>
					<li><b>value</b> - (<i>any</i>) the value of the modifier.</li>
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
