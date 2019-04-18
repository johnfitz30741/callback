var filterUrl = undefined;

//chrome.runtime.onMessage.addListener(
//  function(request, sender, sendResponse) {
// copied from https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/webNavigation/basic/background.js    
var navEventList = ['onBeforeNavigate', 'onCreatedNavigationTarget',
    'onCommitted', 'onCompleted', 'onDOMContentLoaded',
    'onErrorOccurred', 'onReferenceFragmentUpdated', 'onTabReplaced',
    'onHistoryStateUpdated'];

navEventList.forEach(function(e) {
  chrome.webNavigation[e].addListener(function(data) {
    if (typeof data)
      console.log('inHandler', e, data);
    else
      console.error('inHandlerError', e);
  });
});

// webRequest
var reqEventList = ["onBeforeRequest", "onBeforeSendHeaders", "onSendHeaders", "onHeadersReceived", "onAuthRequired", "onResponseStarted", "onBeforeRedirect", "onCompleted", "onErrorOccurred"];

reqEventList.forEach(function(e) {
  chrome.webRequest[e].addListener(function(data) {
    if (typeof data)
      console.log('inHandler', e, data);
    else
      console.error('inHandlerError', e);
  }, {urls: ['<all_urls>']});
});

var reqEventNoFilterList = [];

chrome.webRequest["onActionIgnored"].addListener(function(data) {
    if (typeof data)
      console.log('inHandler', e, data);
    else
      console.error('inHandlerError', e);
});
