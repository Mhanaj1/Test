// ==UserScript==
// @name         XHamster User Search
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Desktop elements (original working code)
    var usernameElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e, .subscribe-block__name');
    usernameElements.forEach(function(element) {
        console.log('Found element:', element);
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
})();
```
