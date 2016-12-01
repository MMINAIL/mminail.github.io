Angular2 Http Request

// Here the Spotify API ( application programming interface ) is targeted
// As a Web Service, the Spotify API uses XML to communicate as an application
// To communicate effectively over the Internet via XML the API invokes the use of SOAP
// ( Single Object - Access Protocol ) to encode its XML messages properly
// Businesses ( like Spotify ) and their API's may be listed in the UDDI directory
// ( Universal Description - Discovery and Integration )
// To communicate effectively when targeting the UDDI directory, the protocol WSDL
// ( Web Services - Description Language ) encodes and decodes sent and received XML messages
// between the end-user ( consumer ) of the service and the UDDI directory listed provider of the service.

import { Http } from '@angular/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

	constructor(private http: Http) {}

	search(term: string) {
		return this.http
			.get('https://api.spotify.com/v1/earch?q=' + term + '&type=artist')
			.map((response) => response.json());
	}
}

Sources: Website Magazine, Pg. 21, Sept 2015 Issue and Rangle's Angular 2 Training Book, Pg. 152

<h4>Http Transmission function types</h4>

<ul>
<li>Http.get()</li>
<li>Http.post()</li>
<li>Http.put()</li>
<li>Http.delete()</li>
</ul>

<h4>Angular2 Test</h4>
<p>
	<span>More to come ...</span>
</p>

<!--
<pre>
<span>Highlighting Angular2 code w Rouge via liquid</span>
<code> -->
{% highlight javascript linenos %}
//Type the following function
>;
//Back to the 'chevron'
>;
{% endhighlight %}
<!--
</code>
</pre>
-->

<h5>For Example ( <span lang="es" title="For Example">Por Ejemplo</span> ) ...</h5>
<p>
	<span>More to come ...</span>
</p>

<!--
<pre>
<span>Highlighting Angular2 code w Rouge via liquid</span>
<code> -->
{% highlight javascript linenos %}
//Type the following function
>;
//Back to the 'chevron'
>;
{% endhighlight %}
<!--
</code>
<hr class="green-groove" />
</pre>
-->