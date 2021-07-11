// Correspondingetherjavascriptfile
/// @title Corresponding Ether Javascript File = Correspondingetherjavascriptfile
// - A simple program written in Javascript that tests for DOM readiness
// Copyright (c) 2000 - 2018 Robert Weber FBO Javascript Lessons Project
// C=> https://rwebaz.github.io/Javascript-Lessons-Project/pages/DOM-Ready.html

// Include jQuery above the body tag of your html page
// <script src="../jq/min/core/331/js/jquery-v331.min.js"></script> 

"use strict";
// JsHint: As of ES7 the Global use of the strict string pragma is recommended

// Execute an Anonymous jQuery function AFTER receiving a ready message from the DOM
$(document).ready(function(){
  // Set the enhanced button function from jQuery UI
  $('button').button();
  // Set the id, title, rel attributes
  $('div.hyperlinks a[href*="Ether"]').attr({
    id: function(index, oldValue){
      return 'ether-' + index;
    },
    title: function(){
      'Click to Visit the ' + $(this).text() + ' page of the Ether Lessons Project at GitHub Pages';
    },
    rel: 'external'
  });
});
