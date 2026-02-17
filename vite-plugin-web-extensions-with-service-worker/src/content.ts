console.log('>>>', 'Content script loaded!')

chrome.runtime.sendMessage(
    { action: 'getData', payload: 'some data' },
    (response) => {
        console.log('>>> Response from service worker:', response)
    }
)
