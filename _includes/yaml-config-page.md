## How to place a Yaml directive inside of the yml Config file

{% highlight liquid linenos %}
{% raw %}
{% comment %}
a.) First, establish GitHub Flavored Markdown (GFM) as the default input when "cramming down" (Kramdown) md (Markdown) files, as follows:
From the underscore Config dot yml (_config.yml) file set `kramdown` as the preferred markdown engine using the following Yaml statement ...
markdown: kramdown
b.) Second, inside the underscore Config dot yml (_config.yml) file, set the following parameters for `kramdown` ...
kramdown:
  input: GFM
  syntax_highlighter: rouge
c.) You may now use the same type of syntax as GitHub uses when rendering GitHub pages, for example:

```html
<a href="" title="Click to review ..." target="_blank">
```

{% endcomment %}
{% endraw %}
{% endhighlight %}
