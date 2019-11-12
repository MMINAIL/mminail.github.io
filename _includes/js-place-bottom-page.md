## How to invoke a Javascript program inside of a Jekyll (.htm) file

{% highlight html linenos %}
{% raw %}
{% comment %}
a.) Set up two script `html` tags `<script></script>` at the bottom of the page beyond the last closing `</div>` tag
b.) The 1st `<script>` tag invokes the resident or remote jquery library
c.) The 2nd `<script>` tag points to the javascript file to be rendered, as follows:
`<script src='../js/jquery.min.js'></script>`
`<script src='../js/scripts/corresponding-javascript-file.js'></script>`
{% endcomment %}
{% endraw %}
{% endhighlight %}
