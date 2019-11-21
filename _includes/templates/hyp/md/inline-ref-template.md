## Inline Referenced Hyperlinks

Inline Referenced Hyperlinks or **IRH** consist of an entangled 'upper' portion and 'lower' portion of a track and link that combine to express the enduser's inate desire for more information.

### The Upper Portion

The 'upper' portion of an **IRH** auto-assigns a `numeric identifier` or `1.`, displays a `hashtag name`, and paints a `bright color` to a 'track' that allows the enduser to click or 'Jump To' the 'lower' portion of the **IRH** consisting of a 'hyperink' expressed lower in the 'footer' area of the page.

Notice the 'upper' portion of the **IRH** is enveloped within a set of brackets `[ ]`.

**Summation**. As expressed, the 'upper' portion of the **IRH** consists of the assigned `numeric identifier` or `1.`, the `hashtag name`, and the `bright color`.

**Note**. The `numeric identifier` or `1.` is also itself enclosed in a separate set of internal brackets `[ ]`.

Further, the `hashtag name` is enclosed in a separate set of internal parenthesis `( )`.

And, the `bright color` (in this case the color "red", or dot red) is expressed as a single Liquid statement enclosed in a single set of internal braces `{ }`, as follows:

```markdown

... of the MMINAIL [[1](#MMINAIL){:.red}] to ...

```

**Note**. The colon `:` in front of the dot red in the above Liquid statement and the hashtag `#` in front of the symbol identifier ie.) `MMINAIL` are essential components of the **IRH** ensemble and cannot be omitted.

### The Lower Portion

When an enduser clicks on the shown auto-assigned `numeric identifier` or `1.`, he or she is then instantly 'Jump To' the lower portion of the page where the actual referring 'hyperlink' resides.

**Note**. The Jekyll engine will automatically assign a successive numeric to the `numeric identifier` or `1.` component.

### The Referring Hyperlink

The referring 'hyperlink' consists of a total of Six (6) connected components, as follows:

First, the auto-assigned `numeric identifier` or `1.`

The `numeric identifier` or `1.` is set at the beginning of the entire 'lower' portion of the ensemble.

Second, another Liquid statement called an `assigned receiver` is set equal to the exact same `hashtag name`, as follows:

```liquid

{:#MMINAIL}

```

Notice the colon `:` again in front of the `hashtag name` enveloped in a single set of Liquid statement braces `{ }`.

Third, the symbol identifier `MMINAIL` is re-expressed in a single set of brackets to `link` the now entangled 'lower' portion of the **IRH** with the 'upper' portion `track`.

The forth component of the 'lower' portion of the **IRH** is the actual secure hyperlink enclosed in a single set of parenthesis.

Followed by a fifth component, the `title tag` ...

And, a sixth component, the `target tag`.

## Completed IRH

The lower register of the page will consist of competed hyperlinks.

As an illustration, the following code depiction shows the multiple **IRH** bodies stored in the 'lower' portion of the page, as follows:

```markdown

1. {:#MMINAIL}The [MMINAIL](https://mminail.github.io/Donate/Learn-To-Donate-Now.htm){:title="Click to Donate To the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"} is an acronym for the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation.

2. {:#COPYRIGHT}Published © 2013 - 2020 by [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Home page of the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.

```

## Single Author Example

On most pages, only a single referring hyperlink will be displayed, as follows:

***

**Note**. The above synopsis was derived from an article written by Robert Shiller [[1](#ROBERTSHILLER){:.red}].

1. {:#ROBERTSHILLER}[Narrative Economics by Robert Shiller, Jan #2017](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:target="_blank"}

***

## Single Blank Author Example

Here is a generic example of a single referring hyperlink expressed `inline`.

Notice the `hard return` or `***` expressed at both the top and bottom of the generic example.

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:target="_blank"}

***
