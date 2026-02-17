console.log('>>>', 'Content script loaded!')
let s = document.createElement('script')
// must be listed in web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('src/xhrInterceptor.js')
s.onload = function () {
    // Original version was
    // this.remove();
    // This caused TS error, not sure why.
    s.remove()
}
;(document.head || document.documentElement).appendChild(s)
