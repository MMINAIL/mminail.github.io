//Resume Builder Program
'use strict';
//Test for DOM readiness
jQuery(function($) {
    window.alert(`¡El DOM está listo!`);
});
//Declare and initialize the method No Conflict to the global variable jKey
var jKey = jQuery.noConflict();
//Append string to the parent tag of the id #1
jKey(function($) {
    //Append String to the parent tag of the id
    jKey('#test').append("The Author");
});
//Append string to the parent tag of the id #2
jKey(function($) {
    //Declare and initialize the String to the global variable author
    var author = "Robert Hempaz, PhD Trichometry";
    //Append author to the parent tag of the id
    jKey('#rht').append(`${author}`);
});
//Build a URL programatically
jKey(function($) {
    //Target the id, create an 'a' tag, add a 'class', initialize the 'text', initialize the 'attribute(s)', append the result to the given 'span' tag
    jKey('#mminail').createElement('a').addClass('neon-text').text('MMINAIL').attr('href', 'http://cannabuds.us').appendTo('span');
});
//Check to see if all assets have been loaded
jKey('window').load(function($) {
    alert(`All of the assets are loaded.`);
});