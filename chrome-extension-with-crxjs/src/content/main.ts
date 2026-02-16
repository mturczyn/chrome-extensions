console.log('[CRXJS] Hello world from background script to intercept requests!');

const script = document.createElement('script');
script.src = chrome.runtime.getURL('src/content/httpInterceptor.js');
script.onload = () => script.remove();
(document.head || document.documentElement).appendChild(script);

