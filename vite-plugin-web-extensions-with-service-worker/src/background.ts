console.log('>>> Background service worker loaded')

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('>>> Message from content script:', message)
    sendResponse({ reply: 'Background received your message' })
})

// Example: Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('>>> Tab updated:', tab.url)
})
