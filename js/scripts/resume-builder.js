//Resume Builder Program
'use strict';
//Test for DOM readiness; Show current date
jQuery(function($) {
    var date = new Date();
    window.alert(`¡El DOM está listo! The current session between client and server has begun on: ${date}`);
});
//Declare a No Conflict method
var jKey = jQuery.noConflict();
//New jKey function

//Hold the dollar sign
/* var jkey2 = $.noConflict(); */

//New jKey function
jKey(function($) {
    //Declare and initialize the var target id wrapper set
    var test = jKey('#test');
    /* //Add a class to the wrapper set; 
    .addClass('neon-text') */
    //Append String to the parent tag of the target id
    test.append("The Author");
});
//New jKey function
jKey(function($) {
    //Declare and initialize the var target id wrapper set
    var rht = jKey('#rht');
    //Declare and initialize the String to author
    var author = "Robert Hempaz, PhD Trichometry";
    /* //Add a class to the wrapper set; 
    .addClass('neon-text') */
    //Append author to the parent tag of the id
    rht.append(`${author}`);
});
//Build a URL programatically #1
jKey(function($) {
    //Declare and initialize the var target id wrapper set
    var mminail = jKey('#mminail');
    //Add an element; Add a class
    mminail.add('').addClass('neon-text')
    //Add the text-label of the URL; Add the attributes of the URL
    .text('MMINAIL').attr('title', 'Click to Jump To ...')
    //Append the URL to the 'span' tag of the id
    .appendTo('');
});
//Build a URL programatically #2
/* jKey(function($) {
    //Declare and initialize the var target id
    var mminail = jKey('#mminail');
    var url = 'http://cannabuds.us';
    var a = jKey('<a>', { href: url });
    //Target the id, create an 'a' tag, add a 'class', initialize the 'text', initialize the 'attribute(s)', append the result to the given 'span' tag
    mminail.add('a').addClass('neon-text').text('MMINAIL').attr('title', 'Click to Jump To ...').appendTo('span');
}); */

//Check to see if all of the page assets have been loaded
jKey.addEventListener("click", function($) {
    //Declare and initialize the var target id wrapper set
    var document = jKey('#document');
    document.load.alert(`All of the assets are now loaded.`);
});