app/main.ts

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector 'my-app',
	template '<h1>Ultra Racing</h1>'
})
class AppComponent

@NgModule({
	declarations [ AppComponent ],
	imports [ BrowserModule ],
	bootstrap [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic()
	.bootstrapModule(AppModule);

=============================
//This component uses '`' backticks ( See: `<h1> to establish a multi-line template string ( See: final </p>`
@Component({
	selector 'my-app',
	template: `<h1>{{title}}</h1>
	<h2>{{carport.name}}</h2>
	<p>{{carport.description}}</p>
	<p>{{carport.inStock}} in Stock</p>`
	
class AppComponent {
	title='Ultra Racing';
	carPort = {
		"id" : 1,
		"name" : "Super Tires",
		"description" : "There tires are the very best",
		"inStock" : 5
	};
}

=============================

