
const PRINT_ID = 'print';

function setProductInfo(model, size, unit) {
  $('#model').text(`Model: ${model}`);
  $('#size').text(`Size: ${size} ${unit}`);
}
function enablePrintButton () {
  $(`#${PRINT_ID}`).prop('disabled', false)
}
function addQrCode(url) {
  const qrElement = $('#qr-code')
  qrElement.empty();
  qrElement.qrcode({
    width: 145,
    height: 145,
    render: 'canvas',
    text: url
  });
}

window.onload = function () {
  const query = new URLSearchParams(window.location.search)
  const {sku, url}  = Object.fromEntries([...query]);
  if (sku && url){
    const delimiter = sku.includes('_') ? '_' : '-';
    const [model, size, unit] = sku.split(delimiter)
    setProductInfo(model, size, unit)
    addQrCode(url);
    enablePrintButton();
  }else {
    window.alert('missing parameters')
  }
  $(`#${PRINT_ID}`).on("click", function() {
    console.log('print')
    window.document.close();
    window.focus();
    window.print();
    window.close();
  })
}