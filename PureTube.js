// ==UserScript==
// @name         PureTube
// @version      1.0
// @run-at       document-start
// @grant        none
// @updateURL https://raw.githubusercontent.com/reneederer/TampermonkeyScripts/master/PureTube.js
// @downloadURL https://raw.githubusercontent.com/reneederer/TampermonkeyScripts/master/PureTube.js
// @match        *://*.youtube.com/*
// @match        *://*.youtube.de/*
// ==/UserScript==

(function () {
  const GENERAL_HIDE = [
    'ytd-searchbox', 'yt-searchbox', '#search-form',
    'ytd-rich-item-renderer', 'ytd-grid-video-renderer', 'ytd-rich-grid-row',
    'ytd-video-renderer', 'ytd-compact-video-renderer',
    'ytd-reel-shelf-renderer', 'ytd-reel-video-renderer',
    'ytd-playlist-video-renderer',
    '#related', 'ytd-watch-next-secondary-results-renderer',
    'ytd-browse', 'ytd-two-column-browse-results-renderer',
    'ytd-mini-guide-renderer', '#guide', '#header', 'ytd-mini-guide-renderer'
  ];

  const USER_HIDE = [
    'ytd-searchbox', 'yt-searchbox', '#search-form',
    //'ytd-rich-item-renderer', 'ytd-grid-video-renderer', 'ytd-rich-grid-row',
    //'ytd-video-renderer', 'ytd-compact-video-renderer',
    //'ytd-reel-shelf-renderer', 'ytd-reel-video-renderer',
    //'ytd-playlist-video-renderer',
    //'#related', 'ytd-watch-next-secondary-results-renderer',
    //'ytd-browse', 'ytd-two-column-browse-results-renderer',
    'ytd-mini-guide-renderer', '#guide',
    //'#header'
  ];

  const WATCH_HIDE = [
    'ytd-searchbox', 'yt-searchbox', '#search-form',
    '#related', 'ytd-watch-next-secondary-results-renderer',
    //'#comments', '#masthead-container',
    'ytd-mini-guide-renderer', '#guide', '#header',
    'ytd-merch-shelf-renderer', 'ytd-reel-shelf-renderer',
    'ytd-video-secondary-info-renderer', 'ytd-expander',
    //'ytd-watch-metadata', 'ytd-sentiment-bar-renderer',
    'ytd-browse', 'ytd-two-column-browse-results-renderer',
    '.shortsLockupViewModelHostEndpoint', 'ytd-item-section-renderer',
    'ytd-item-section-renderer', 'ytd-mini-guide-renderer'
  ];

  const style = document.createElement('style');
  style.setAttribute('data-userscript', 'hide-yt');
  document.documentElement.appendChild(style);

  function updateCSS() {
    if (location.href.includes("watch?v=")) {
      style.textContent = `${WATCH_HIDE.join(',\n')} { display: none !important; }`;
    } else if (location.href.includes("/@")) {
      style.textContent = `${USER_HIDE.join(',\n')} { display: none !important; }`;
    } else {
      style.textContent = `${GENERAL_HIDE.join(',\n')} { display: none !important; }`;
    }
  }

  updateCSS();

  window.addEventListener('yt-navigate-finish', updateCSS, true);
})();
