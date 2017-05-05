# GFG

GFM is an acronym for Git Hub Flavor'd Markdown (.md)

- [ ] This is a list item bullet with an open ( space ) check box

## The Command Pallette ( Unordered List )

Note. To access the Command Palette in Visual Studio Code (VSC), press the following three keys simultaneously:

- shift, or '⇧'

- command, or '⌘'

- capital P, or 'P' ; where capital P represents the term "Palette"

**Note**. The trick is to prepend each list item with a `-` hyphen followed by a space before the start of each list item.

## Ordered Lists

To create an ordered list in (.md), begin each list item with the number `1` followed by a single period `.` followed by a space before the text of each list item, as follows:

1. List Item \#1
1. List Item \#2
1. List Item \#3

## Auto Hyperlinks

Stand alone "auto" URLs are always enclosed in angle brackets and optionally appended to a bracketed `[name]`, as follows:

- [MMINAIL] <https://mminail.github.io>

**Note**. All "auto" URLs must start with `https`.

## Inline Hyperlinks

Inline links with bracketed clickable text `[MMINAIL]` may be followed by the `URL` enclosed in a single set of parenthesis `(...)`, as follows:

[MMINAIL](https://mminail.github.io)

**Note**. Inline URLs may also be relative anchors, as follows:

[Home](/index.html)

## Reference Style Hyperlinks

`URL` may also be referenced by an inline bracketed clickable text `[MMINAIL]` followed by a bracketed index number `[1]`, as follows:

The [MMINAIL][1] link in this paragraph is anchored by a citation in the `nofooter` below.

The citation is comprised of the aforementioned bracketed index number `[1]` followed by a colon `:` followed by the raw `URL` of the targeted destination.

The citation actually sits below this third paragraph of text, hidden in the `nofooter` of this example.

[1]:https://mminail.github.io

## Single Backticks

Rule. Single Back-ticks in GFM will create an inline code block.

The VSC default colors for a code block are ...

- `gold color'd text`

- `dark grey background`

## Triple Backticks

Rule. Triple Back-ticks in GFM will create an multi-line 'Fenced' code block.

Note. After the first set of triple backticks ` ``` ` place a language qualifier ie.) html, as follows:

` ```html`

Por ejemplo, here is a block of Html

```html
<h1>Title</h2>
<p>Lots of code in here ...</p>
<span>Footer text</span>
```

## Snippet Insertion

Simply select a batch of plain text and open up the Command Palette in VSC ...

Next, type `Insert Snippet`.

## Emoji

Support for emoji in VSC on a (.md) does not exist:

`@rwebaz:+1:`

Go to Git Hub comments to render Emoji

Format ...

:musical_note:

## Italic Text

Text that you wish to be italicized go between ... *single asterisk*

## Bold Text

Text that you wish to be emboldened go between ... **Double Asterisks**

## Inline Images

Inline images may be displayed using the exclamation point `!` followed by a bracketed `[Alt Text]` followed by a relative `URL` enclosed in a single set of parenthesis `(...)`, as follows:

![Logo Badge](/ms-icon-70x70.png)

## Referenced Images

Referenced images may be displayed using the exclamation point `!` followed by a bracketed `[Alt Text]` followed by a bracketed index number `[2]`, as follows:

![ePub Badge][2]

The bracketed index number represents a citation below embedded in the `nofooter` of this example.

The citation is the bracketed index number `[2]` followed by a colon `:` followed by the raw `URL` followed by the title to the photo.

Note. The title to the photo is enveloped in a set of double `"..."` quotes.

When the mouse is hovered over the photo the title given will appear.

**Warning**. The Reference-style method for serving links and images will not work on duplicate index numbers attempting to render multiple objects on the same page.

Therefore, always use a separate index number for each set of Reference-style links or images.

As above in the *Reference Style Hyperlink* section, the citation actually sits below this paragraph of text, hidden in the `nofooter` of this example.

[2]:
https://mminail.github.io/images/png/dot-epub-button-62-x-20.png
"The Official Logo Badge of ePub"

## Blockquote

A blockquote may be started with a single right angle bracket ( greater than ) symbol:

>This is a blockquote

## Anchor Links

Internal anchor links to other pages within the repo require a bracketed [name] followed by an anchor link enclosed in a single set of parenthesis.

[Anchor](../Angular/liquid-angular)

## Hard Returns

The counterpart in Html `<hr />` may be reproduced in (.md) using triple asterisks, as follows:

***

But, not above or below subtitles.

Note. By default, the single hash `#` placed at the beginning of a line n (.md) yields the traditional Html `<h1>Title</h1>` header tag with an auto hard return below.

## Subtitles

Subtitles without a hard return below may be invoked with a set of double hash `##` placed at the beginning of a line yielding the traditional Html `<h2>Title</h2>` header tag.

## Cross Out Text

How do you cross-out text in (.md)?

Simple ... Use a double set of enveloping tildes!

As follows,

~~Cross Dis Sh't~~ ... out!

## More To Come
