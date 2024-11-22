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
        if (!usernameElement || usernameElement.querySelector('.search-link')) {
            return;
        }

        const username = usernameElement.textContent.trim();
        
        // Create plain text link
        const link = document.createElement('a');
        link.textContent = ' 🔍';
        // Set direct href instead of using click handler
        link.href = `https://duckduckgo.com/?q=${encodeURIComponent(username + ' site:xhamster.com')}`;
        // Open in new tab
        link.target = '_blank';
        
        usernameElement.appendChild(link);
    };

    // Initialize
    const init = () => {
        const usernames = document.querySelectorAll('.video-page .body-8643e.label-5984a.label-96c3e');
        usernames.forEach(addSearchLink);
    };

    // Start when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```
