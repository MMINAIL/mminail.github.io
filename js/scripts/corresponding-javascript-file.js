// Correspondingjavascriptfile
/// @title Corresponding Javascript File = Correspondingjavascriptfile
// - A simple program written in Javascript that tests for DOM readiness
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/DOM-Ready.html

// Include jQuery above the body tag of your html page
// <script src="../jq/min/core/331/js/jquery-v331.min.js"></script> 

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

// Execute an Anonymous jQuery function AFTER receiving a ready message from the DOM
$(document).ready(function(){
  // Get the current date from the development machine clock
  var date = new Date();
  // Set a Listener for the click event
  document.getElementById('button_one').addEventListener('click', (function(){this.innerHTML = date.getFullYear()}), false);
  // Listen for the click, turn the button border red
  var colorButtonOne = $('#button_one').addClass('red-groove');
  // Set the conditional
  if(colorButtonOne.innerHTML == 2018){
    return window.console.log('The page is now fully loaded. The Html has been parsed. The DOM has been rendered. All of the assets of the page have been uploaded to the browser. The year has been programatically updated in page Window from 1999 to present via manual click. We can now finish our work.');}
  else {
    return window.console.log('Please click the year button to update ...');}
});
