---
title: First-Gist
layout: default
excerpt: Liquid filters cannot be appended via the pipe to Liquid link statements ...
navigation_weight: 8
categories: jekyll liquid
---
# First Gist

{{ page.excerpt }}

{% comment %}{{ page.version }}{% endcomment %}

{% include toc.md %}

## Link Construction

{% for gist in site.gists %}

- [{{ page.title }}]({{ page.url }})

{% endfor %}

### Anchor This

The internal anchor path of this page is `{{ page.path }}`.

And, the internal anchor path to a *target* page is `gists/First-Gist.md`.

Thus, the internal anchor path to the *target* page may be expressed as an internal anchor link from *this* page, as follows:

- [{{ page.title }}]({% link _gists/First-Gist.md %}){:title="Click to Visit the {{ page.title }} page of the Carbon Free Footprint Project at the Concept Library of the MMINAIL"}{:target="_blank"}

### Ping Back

The external hyperlink path for a **Ping Back** to *this* page can be split between its components, as follows:

- Site Url = {{ site.url }}

- Site Base Url = {{ site.baseurl }}, and

- Page Path = {{ page.path }}

Thus, the external hyperlink path *pinging* back to *this* page may be expressed as an external hyperlink from *this* page, as well.

As follows:

- [{{ page.title }}]({{ site.url }}{{ site.baseurl }}/{{ page.path }}){:title='Click to Visit the {{ page.title }} page of the Bootstrap Lessons Project at the Concept Library of the MMINAIL'}{:target='_blank'}.

{{ site.url }}{{ site.baseurl }}/{{ page.path }}(.html)

### Liquid Link

The above external hyperlink *works*, but as seen by the color ...

*indian red*
{:.indian-red}

**Note**. To render a color in Markdown ...

- Place the referencing class within a liquid statement

- Place the liquid statement underneath or to the immediate right-side of the text you wish to colorize

As follows,

```liquid
{% raw %}
*indian red*
{:.indian-red}
{% endraw %}
```

And,

```liquid
{% raw %}
*indian red*{:.indian-red}
{% endraw %}
```

### Inline Anchors

Or, you may alternatively append the liquid statement to the text you wish to highlight by ...

1. Placing the target text within a set of parenthesis

1. Suffixing the liquid statement to the right parenthesis

1. Envelope the entire code statement in a set of brackets

As follows,

```liquid
{% raw %}
[[1](#IndianRed){:.indian-red}] *indian red*{:.indian-red}
{% endraw %}
```

**Note**. You may also optionally anchor the targeted text by prepending the text with the hash symbol `#`.

In addition, an inline reference number for the anchor instance can be rendered by placing the inline reference box `[1]` at the front of the code statement as shown above.

Here is a live example ...

[[1](#IndianRed){:.indian-red}] *indian red*{:.indian-red}

### Surety

The bottom line, however, is the link is not secure.

That is what triggers an *indian red*{:.indian-red} rendering of the link.

Nor is the external hyperlink *accountable* as the ...

[[1](#LightDodgerBlue){:.light-dodger-blue}] *light dodger blue*{:.light-dodger-blue} internal anchor is.

How can this be?

Well, the first link shown live above ... *the internal anchor* ...

Takes advantage of a **Liquid Link** statement, as follows:

```liquid
{% raw %}
- [First Gist]({% link _gists/First-Gist.md %})
{% endraw %}
```

Whereas, the second link shown live above ... *the external hyperlink*...

Utilizes the **Combo Link** statement format, as follows:

```liquid
{% raw %}
- [{{ page.title }}]({{ site.url }}{{ site.baseurl }}/{{ page.path }}{:title='Click to Visit the {{ page.title }} page of the Bootstrap Lessons Project at Concepts Library'}{:target='_blank'})
{% endraw %}
```

Hence, the identifying color of [[1](#*indian red*){:.indian-red}] for the external hyperlink of ...

[{{ page.title }}]({{ site.url }}{{ site.baseurl }}/{{ page.path }}{:title='Click to Visit the {{ page.title }} page of the Bootstrap Lessons Project at Concepts Library'}{:target='_blank'}) ...
 
And, the identifying color of [[1](#*light dodger blue*){:.light-dodger-blue}] for the internal anchor of [First-Gist]({% link _gists/First-Gist.md %}).

### Reduced Functionality

**Note**. Liquid *filters* ie.) the `| relative_url` filter ... cannot be appended via the pipe to **Liquid Link** tags.

## Test Gist

There are two methods in Jekyll for constructing links.

One method is best for internal anchor links and the other method is best for external hyperlinks.

The purpose of this exercise is to decipher which.

### Liquid Link Method

The first method of our Test Gist section deals with a Liquid `for loop`.

The Liquid `for loop` hunts through the collection of site gists and passes any found to the temporary gist variable.

Through each iteration of gist found ...

The temporary gist variable is purged and filled anew with the parameters targeted by the Liquid `for loop` statement.

Inside the boundaries of the Liquid `for loop` ...

Display statements written in html, jekyll-moustache, and liquid are rendered upon each iteration through the loop, as follows:

{% for gist in site.gists %}

- [{{ gist.title }}]({% link _gists/First-Gist.md %})

{% endfor %}

Here, we have an operable `for loop` outputting the internal anchor link for each gist found from inside an unordered list of list items.

As shown in the following highlighted pre-block ...

{% highlight liquid %}
{% raw %}{% for gist in site.gists %}{% endraw %}

- [{% raw %}{{ gist.title }}{% endraw %}]({% raw %}{% link _gists/First-Gist.md %}{% endraw %})

{% raw %}{% endfor %}{% endraw %}
{% endhighlight %}

**Note**. The Liquid `for loop` will take the format of your first gist identified ie.) 'First-Gist.md' and use that format to search the site for other gists.

Because we are using a Liquid link statement to render the internal anchor links for the found gist ...

As the page excerpt exclaims ...

"{{ page.excerpt }}"

### Combo Link Method

The second method of our Test Gist section deals with another Liquid `for loop`.

However, under this incarnation we will not be using a Liquid link statement to render the captured internal anchor links.

Rather, we will be using a common Combo Link statement filled with jekyll-moustache calls, as follows:

{% for gist in site.gists %}

- [{{ gist.title }}]({{ gist.url | relative_url }}{:title='Click to Visit the {{ gist.title }} page of the Bootstrap Lessons Project at Concepts Library'}{:target='_blank'})

{% endfor %}

Here, we have an operable `for loop` outputting the internal anchor link for each gist found from inside an unordered list of list items as before.

However, as noted above ...

We are not restricted to the limited functionality of the Liquid link statement.

As shown in the following highlighted pre-block ...

```liquid
{% raw %}
{% for gist in site.gists %}

- {{ gist.title }}]({{ gist.url | relative_url }}{:title='Click to Visit the {{ gist.title }} page of the Bootstrap Lessons Project at Concepts Library'}{:target='_blank'})

{% endfor %}
```

When using the common Combo Link statement to build our hyperlinks instead of the restrictive Liquid link statement ...

We can add a `title` and a `target` to the hyperlink, as well as our `site.url` and our `site.baseurl` yaml variables without affecting the functionality of the underlying hyperlink.

In addition, we may apply Liquid filters to the rendering of the gist url through the Unix pipe feature.

In this case, the captured gist url is piped through the Liquid `relative_url` filter.

**Note**. The  Liquid `relative_url` filter prepends the subject url with both the `site.url` and `site.baseurl` variables retrieved from the config dot yaml page of the website.

Contrasting the two methods reveals the first method best for internal anchor links and the second method best for external hyperlinks.

## Last Subtitle

Place the introducing line of text ie.) the 'tagline' here ...

### Page Author

{{ page.author }}

### Page Categories

{{ page.categories }}

### Raw Liquid

```liquid
{% raw %}
Enjoy the successful output!
{% endraw %}
```

{% include sources-and-uses.md %}

1. {:#IndianRed}The color *indian red*{:.indian-red} may be represented by the *red, green, blue* color code statement `rgb(207,103,75);`

1. {:#LightDodgerBlue}The color *light dodger blue*{:.light-dodger-blue} may be represented by the *hexadecimal* color code statement `#337ab7;`

### External Sources

- The [Project Source Links](https://mminail.github.io/Shell/Source-Shell-Links.htm){:title="Click to Visit the Source Links page of the Shell Lessons Project at GitHub pages"}{:target="_blank"} page of the Shell Lessons Project. Published by © 2017 - 2018 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
