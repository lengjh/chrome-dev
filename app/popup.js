// chrome.extension.sendRequest({ type: "getUrl" }, function (response) {
//   console.log(response.farewell);
// });

var qrInput = document.getElementById('qrInput');
var qrcodeEle = document.getElementById('qrcode');
var url = '';
var title = '';
var qrcode = new QRCode(document.getElementById('qrcode'), {
  width: 200, //设置宽高
  height: 200
});
function setContent(text) {
  // qrcode.innerHTML = '';
  document.querySelector("h1").innerHTML = text || title;
  qrcode.makeCode(text || url);
  qrcodeEle.title = '';
}
qrInput.onchange = function () {
  setContent(this.value);
};
qrInput.onkeyup = function () {
  setContent(this.value);
};
chrome.tabs.getSelected(null, function (tab) {
  console.log(tab);

  setContent(tab.url);
  url = tab.url;
  title = tab.title;
  document.querySelector("h1").innerHTML = tab.title;
  // chrome.tabs.sendRequest(tab.id, { greeting: "hello" }, function (response) {
  //   console.log(response.farewell);
  // });
});
