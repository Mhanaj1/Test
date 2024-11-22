// ==UserScript==
// @name         XHamster User Search (Mobile Compatible)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const addSearchButton = (element) => {
        if (!element || element.querySelector('.search-button')) return;
        
        var searchButton = document.createElement('button');
        
        searchButton.style.background = 'green';
        searchButton.style.color = 'white';
        searchButton.style.padding = '5px 10px';
        searchButton.style.border = 'none';
        searchButton.style.borderRadius = '5px';
        searchButton.style.cursor = 'pointer';
        searchButton.style.marginLeft = '5px';
        searchButton.className = 'search-button';
        
        searchButton.textContent = '🔍';
        
        searchButton.onclick = function(event) {
            event.preventDefault();
            var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(element.textContent.trim() + ' site:xhamster.com') + '&ia=web';
            window.location.href = url;
        };

        element.parentNode.appendChild(searchButton);
    };

    const init = () => {
        // Desktop selector
        const desktopElements = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');
        desktopElements.forEach(addSearchButton);

        // Mobile selector based on the structure
        const mobileElements = document.querySelectorAll('.subscribe-block__name');
        mobileElements.forEach(addSearchButton);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    new MutationObserver(init).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
