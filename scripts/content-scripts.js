

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (window.location.host !== 'mialmastore.com') return;
    const skuElement = document.getElementsByClassName('js-variant-sku')[0];
    const sku = skuElement && skuElement.innerText || ''
    switch (request.action) {
      case 'sendPrintInfo':
        const url = window.location.href;
        sendResponse({sku, url})
        break;
      case 'getSKU':
        console.log('getSKU')
        sendResponse({sku})
        break;

    }
  });

