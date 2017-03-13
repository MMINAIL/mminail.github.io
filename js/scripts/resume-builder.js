//Resume Builder Program
'use strict';
//Test for DOM readiness
jQuery(function($) {
    window.alert(`¡El DOM está listo!`);
});
//Declare a No Conflict method
var jKey = jQuery.noConflict();
//New jKey function
jKey(function($) {
    //Declare and initialize the var target id
    var test = jKey('#test');
    //Append String to the parent tag of the target id
    test.append("The Author");
});
//New jKey function
jKey(function($) {
    //Declare and initialize the String to author
    var author = "Robert Hempaz, PhD Trichometry";
    //Append author to the parent tag of the id
    jKey('#rht').append(`${author}`);
});
//New jKey Function

//Build a URL programatically
jKey(function($) {
    //Declare and initialize the var target id
    var mminail = jKey('#mminail');
    var url = 'http://cannabuds.us';
    var a = jKey('<a>', { href: url });
    //Target the id, create an 'a' tag, add a 'class', initialize the 'text', initialize the 'attribute(s)', append the result to the given 'span' tag
    mminail.a.addClass('neon-text').text('MMINAIL').attr('title', 'Click to Jump To ...').appendTo('span');
});
//Check to see if all assets have been loaded
jKey('window').load(function($) {
    alert(`All of the assets are loaded.`);
});