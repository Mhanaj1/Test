// ==UserScript==
// @name         XHamster User Search (Mobile+Desktop Fixed)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const addSearchButton = (element, isRetired) => {
        if (!element || element.querySelector('.search-button')) return;
        
        // Only add button if retired
        if (!isRetired) return;
        
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
        // Try to find the videoModel data
        const scriptTags = document.querySelectorAll('script');
        let isRetired = false;

        // Look for retirement status in script tags
        scriptTags.forEach(script => {
            try {
                if (script.textContent.includes('"modelName":"shortUserModel"')) {
                    const data = JSON.parse(script.textContent);
                    if (data.author && data.author.retired) {
                        isRetired = true;
                    }
                }
            } catch (e) {}
        });

        // Desktop version
        document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e')
            .forEach(el => addSearchButton(el, isRetired));

        // Mobile version
        document.querySelectorAll('.subscribe-block__name')
            .forEach(el => addSearchButton(el, isRetired));
    };

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Watch for changes
    new MutationObserver(init).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
