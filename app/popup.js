// chrome.extension.sendRequest({ type: "getUrl" }, function (response) {
//   console.log(response.farewell);
// });

chrome.tabs.getSelected(null, function (tab) {
  console.log(tab);

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,//设置宽高
    height: 200
  });
  qrcode.makeCode(tab.url);
  // chrome.tabs.sendRequest(tab.id, { greeting: "hello" }, function (response) {
  //   console.log(response.farewell);
  // });
});
