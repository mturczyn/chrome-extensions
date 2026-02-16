/// <reference types="chrome" />
console.log("Extension installed! - top level statement");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

// chrome.webRequest.onBeforeRequest.addListener(
//   (details) => {
//     console.log("Intercepted request:", details);
//     return { cancel: true };
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  console.log("Rule matched:", info);
  
});