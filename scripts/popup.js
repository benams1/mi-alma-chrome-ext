const GET_DATA_ID = 'get-data';

document.addEventListener('DOMContentLoaded',function() {
	$(`#${GET_DATA_ID}`).on("click", function() {
		console.log('click')
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, { action: 'sendPrintInfo' }).then(({sku, url}) => {
				if (sku && url){
					window.open(`label.html?sku=${sku}&url=${encodeURIComponent(url)}`, '_blank')
				}
			});
		});
	})
});
