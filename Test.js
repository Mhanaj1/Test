// ==UserScript==
// @name         XHamster User Search (Basic)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Simple button creation - exactly as original
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
        
        // Original mouse handling
        searchButton.onmousedown = function(event) {
            if (event.button === 0) { // Left click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.location.href = url;
            } else if (event.button === 1) { // Middle click
                var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
                window.open(url, '_blank');
            }
        };

        return searchButton;
    };

    // Desktop implementation - exactly as original
    const handleDesktop = () => {
        var usernameElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');
        usernameElements.forEach(function(element) {
            if (!element.nextElementSibling?.classList.contains('search-button')) {
                element.parentNode.appendChild(createSearchButton(element));
            }
        });
    };

    // Mobile implementation
    const handleMobile = () => {
        var mobileElements = document.querySelectorAll('.subscribe-block__name');
        mobileElements.forEach(function(element) {
            if (!element.nextElementSibling?.classList.contains('search-button')) {
                element.parentNode.appendChild(createSearchButton(element));
            }
        });
    };

    // Initialize
    const init = () => {
        handleDesktop();  // Run desktop version
        handleMobile();   // Run mobile version
    };

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Watch for changes - reduced frequency
    let timeout;
    new MutationObserver(() => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(init, 500);
    }).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
