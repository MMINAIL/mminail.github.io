//Parse a URL
'use strict';
//Test for DOM readiness
jQuery(function($) {
    window.alert(`¡El DOM está listo!`);
});
//Declare a No Conflict method
var jKey = jQuery.noConflict();
//Declare a new jKey function
jKey(function($) {
    var longurl = 'http://tutorialzine.com/books/jquery-trickshots?trick=12#comments';
    var a = $('<a>',{ href: longurl });
    window.alert('Host name: ' + a.prop('hostname'));
    window.alert('Path: ' + a.prop('pathname'));
    window.alert('Query: ' + a.prop('search'));
    window.alert('Protocol: ' + a.prop('protocol'));
    window.alert('Hash: ' + a.prop('hash'));
});