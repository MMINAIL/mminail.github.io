## How to place a Liquid comment inside of a Jekyll (.htm) file

{% highlight liquid linenos %}
{% raw %}
{% comment %}
a.) First, establish the space to place your comment in by invoking a Liquid `raw` tag ie.) `\{% raw %\}` ... `\{% endraw %\}`
b.) Second, inside the new `raw` tag, envelope the text of your comment in a Liquid `comment` tag ie.) `\{% comment %\}` ... `\{% endcomment %\}`
c.) Third, type the text of your comment inside the new `comment` tag , as follows:
You can type both text and code inside of a `comment` tag.
To type code ie.) `<a href=""></a>`, simply envelope your code statement in a single set of backticks
{% endcomment %}
{% endraw %}
{% endhighlight %}
