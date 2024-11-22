// ==UserScript==
// @name         XHamster User Search (Original Working Version)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Desktop Elements
    var desktopElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');
    desktopElements.forEach(function(element) {
        var searchButton = document.createElement('button');
        searchButton.className = 'search-button';
        searchButton.style.background = 'green';
        searchButton.style.color = 'white';
        searchButton.style.padding = '5px 10px';
        searchButton.style.border = 'none';
        searchButton.style.borderRadius = '5px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.display = 'flex';
        searchButton.style.alignItems = 'center';
        searchButton.innerHTML = '<i class="fa fa-search" style="margin-right: 5px;"></i> <img src="https://duckduckgo.com/favicon.ico" width="16" height="16">';
        searchButton.onmousedown = function(event) {
            if (event.button === 0) { // Left click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.location.href = url;
            } else if (event.button === 1) { // Middle click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.open(url, '_blank');
            }
        };
        element.parentNode.appendChild(searchButton);
    });

    // Mobile Elements (exact same code)
    var mobileElements = document.querySelectorAll('.subscribe-block__name');
    mobileElements.forEach(function(element) {
        var searchButton = document.createElement('button');
        searchButton.className = 'search-button';
        searchButton.style.background = 'green';
        searchButton.style.color = 'white';
        searchButton.style.padding = '5px 10px';
        searchButton.style.border = 'none';
        searchButton.style.borderRadius = '5px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.display = 'flex';
        searchButton.style.alignItems = 'center';
        searchButton.innerHTML = '<i class="fa fa-search" style="margin-right: 5px;"></i> <img src="https://duckduckgo.com/favicon.ico" width="16" height="16">';
        searchButton.onmousedown = function(event) {
            if (event.button === 0) { // Left click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.location.href = url;
            } else if (event.button === 1) { // Middle click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.open(url, '_blank');
            }
        };
        element.parentNode.appendChild(searchButton);
    });

    // Original style addition
    var style = document.createElement('style');
    style.innerHTML = `
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
    `;
    document.head.appendChild(style);
})();
