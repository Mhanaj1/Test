// ==UserScript==
// @name         XHamster User Search (Click Fixed)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const createSearchButton = (element) => {
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
        searchButton.style.marginLeft = '5px';
        
        searchButton.textContent = '🔍';
        
        // Original click handling that worked
        searchButton.onmousedown = function(event) {
            var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
            window.location.href = url;
        };

        return searchButton;
    };

    const addSearchButtons = () => {
        // Desktop version
        var desktopElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');
        desktopElements.forEach(function(element) {
            if (!element.nextElementSibling?.classList.contains('search-button')) {
                element.parentNode.appendChild(createSearchButton(element));
            }
        });

        // Mobile version
        var mobileElements = document.querySelectorAll('.subscribe-block__name');
        mobileElements.forEach(function(element) {
            if (!element.nextElementSibling?.classList.contains('search-button')) {
                element.parentNode.appendChild(createSearchButton(element));
            }
        });
    };

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addSearchButtons);
    } else {
        addSearchButtons();
    }

    // Watch for changes
    new MutationObserver(addSearchButtons).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
