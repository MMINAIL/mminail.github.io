//Name-O-Program
'use strict';
//Test for DOM readiness; Show current date
jQuery(function($) {
    var date = new Date();
    window.alert(`¡El DOM está listo! The current session between client and server has begun on ${date}`);
});
//Declare a No Conflict method
var jKey = jQuery.noConflict();
//New jKey function
jKey(function($) {
    //Build Ur Function Programatically
});