// ==UserScript==
// @name         הסתרת הכותרת בגלילה
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  מסתיר את כותרת הנושא באתר תחומים עם גלילת הדף.
// @author       שלום עולם
// @match        https://tchumim.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
let headerElement = document.querySelector("#content > div.row > div.topic.col-lg-12 > div.topic-header");
 
addEventListener("scroll", function() {
  if (pageYOffset > 0) {
    headerElement.style.display = "none";
  } else {
    headerElement.style.display = "block";
  }
});})();
