// ==UserScript==
// @name         XHamster User Search (iOS Fixed)
// @version      1.0
// @description  Adds search functionality
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const addSearchLink = (usernameElement) => {
        // Check if it's actually a retired user element
        if (!usernameElement || 
            !usernameElement.textContent.includes('Retired') ||
            usernameElement.querySelector('.search-link')) {
            return;
        }

        const username = usernameElement.textContent.trim().replace('Retired', '').trim();
        
        // Create search link
        const link = document.createElement('a');
        link.textContent = ' 🔍';
        link.className = 'search-link';  // Mark as our link
        link.href = `https://duckduckgo.com/?q=${encodeURIComponent(username + ' site:xhamster.com')}`;
        link.target = '_blank';
        
        usernameElement.appendChild(link);
    };

    // Initialize
    const init = () => {
        // Look specifically for retired user elements
        const userElements = document.querySelectorAll('div.author-name span');
        userElements.forEach(addSearchLink);
    };

    // Start when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```
