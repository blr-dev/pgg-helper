const filter = {
  urls: ["*://*/*"]
};

let pageLoaded = false;

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  pageLoaded = false;
}, filter);

chrome.webRequest.onErrorOccurred.addListener(function(details) {
  if (details.type === "main_frame" && details.tabId !== -1) {
    if (!pageLoaded) {
      console.log("Refreshing..");
      setTimeout(function() {
        chrome.tabs.reload(details.tabId, { bypassCache: false });
        pageLoaded = false;
      }, randomRange(2000, 6000));
    }
  }
}, filter);

chrome.webRequest.onCompleted.addListener(function(details) {
  pageLoaded = true;
}, filter);
