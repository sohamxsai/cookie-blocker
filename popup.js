document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("stats", (data) => {
        const count = data.stats?.bannersRejected || 0;
        document.getElementById("count").innerText = count;
    });
});