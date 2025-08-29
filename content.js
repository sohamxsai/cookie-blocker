(function() {
    const rejectKeywords = ["reject", "decline", "essential only", "necessary only"];

    function tryReject() {
        const buttons = document.querySelectorAll("button, a, input[type=button]");
        for (let btn of buttons) {
            const text = btn.innerText.toLowerCase();
            if (rejectKeywords.some(k => text.includes(k))) {
                console.log("Cookie Unsubscriber: Clicking", btn.innerText);
                btn.click();
                chrome.runtime.sendMessage({ action: "bannerRejected" });
                return true;
            }
        }
        return false;
    }

    // Initial attempt
    if (!tryReject()) {
        const observer = new MutationObserver(() => tryReject());
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();