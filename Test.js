// ==UserScript==
// @name         XHamster Retired User Search (iOS Verified)
// @version      1.0
// @description  Adds search functionality for retired users
// @match        https://xhamster.com/videos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Simple function to search for a username
    const searchUser = (username) => {
        const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(username + ' site:xhamster.com')}`;
        window.location.href = searchUrl;
    };

    // Simple function to check and add search link
    const addSearchLink = (usernameElement) => {
        if (!usernameElement || usernameElement.querySelector('.search-link')) {
            return;
        }

        const username = usernameElement.textContent.trim();
        
        // Create a simple link (no styles)
        const link = document.createElement('a');
        link.textContent = ' 🔍';  // Just an emoji, no styles
        link.href = '#';
        
        // Simple click handler
        link.addEventListener('click', (e) => {
            e.preventDefault();
            searchUser(username);
        });

        usernameElement.appendChild(link);
    };

    // Simple initialization
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
