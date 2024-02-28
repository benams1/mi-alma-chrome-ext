const GET_DATA_ID = 'get-data';

document.addEventListener('DOMContentLoaded',function() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { action: 'getSKU' }).then(({sku}) => {
		$('#sku').text(`SKU: ${sku}`)
	});
});

	$(`#${GET_DATA_ID}`).on("click", function() {
		console.log('click')
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, { action: 'sendPrintInfo' }).then(({sku, url}) => {
				if (sku && url){
					window.open(`label.html?sku=${sku}&url=${encodeURIComponent(url)}`, 'popup', 'width=500,height=500')
				}
			});
		});
	})
	fetch('../manifest.json')
		.then(response => response.json())
		.then(data => $('#version').text(`Version: ${data.version}`))
		.catch(error => console.log(error));
})
