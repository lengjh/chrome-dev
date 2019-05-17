// // chrome.browserAction.onClicked.addListener(function (tab) {
// //   console.log(tab);
// // });

// chrome.extension.onRequest.addListener(
//   function (request, sender, sendResponse) {
//     console.log(request, sender, sendResponse);


//     console.log(sender.tab ?
//       "from a content script:" + sender.tab.url :
//       "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({ farewell: "goodbye" });
//     else
//       sendResponse({}); // snub them.
//   });