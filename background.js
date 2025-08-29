chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === "complete") {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"]
        });
    }
});

let stats = { bannersRejected: 0 };

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "bannerRejected") {
        stats.bannersRejected++;
        chrome.storage.local.set({ stats });
    }
});
