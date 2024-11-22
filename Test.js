// ==UserScript==
// @name         XHamster User Search (Fixed)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Use exact same selector from original script
    var usernameElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');

    usernameElements.forEach(function(element) {
        // Create button (following original script)
        var searchButton = document.createElement('button');
        
        // Use same styling from original
        searchButton.style.background = 'green';
        searchButton.style.color = 'white';
        searchButton.style.padding = '5px 10px';
        searchButton.style.border = 'none';
        searchButton.style.borderRadius = '5px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.marginLeft = '5px';
        
        // Simple text instead of HTML
        searchButton.textContent = '🔍';
        
        // Use same click handling from original
        searchButton.onmousedown = function(event) {
            if (event.button === 0) { // Left click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.location.href = url;
            } else if (event.button === 1) { // Middle click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.open(url, '_blank');
            }
        };

        // Same append method from original
        element.parentNode.appendChild(searchButton);
    });
})();
