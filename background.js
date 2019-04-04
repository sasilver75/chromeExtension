/**
 * So the content script will be able to pull a URL out of the current page,
 *  but will need to hand that URL over to the background script to do something
 *  useful with it. In order to communicate, we’ll use what Google calls message passing,
 *  which allows scripts to send and listen for messages.
 *  It is the only way for content scripts and background scripts to interact.
 */


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      "message": "clicked_browser_action"
    });
  });
});




//chrome.storage GET 
chrome.storage.sync.get(['key'], function (result) {
  console.log('Value currently is ' + result.key);
});