

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (window.location.host !== 'mialmastore.com') return;
    if (request.action === 'sendPrintInfo') {
      const url = window.location.href;
      const skuElement = document.getElementsByClassName('js-variant-sku')[0];
      const sku = skuElement && skuElement.innerText || ''
      sendResponse({sku, url})
    }
  });

