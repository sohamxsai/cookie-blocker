document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get("mode", (data) => {
        document.querySelector(`input[value=${data.mode || "reject"}]`).checked = true;
    });

    document.querySelectorAll("input[name=mode]").forEach((radio) => {
        radio.addEventListener("change", () => {
            chrome.storage.sync.set({ mode: radio.value });
        });
    });
});