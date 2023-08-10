let scrapeBtn = document.getElementById('scrapeEmails');
let list = document.getElementById('emailList');

scrapeBtn.addEventListener('click', async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeEmails,
    });
});

chrome.runtime.onMessage.addListener((reques, sender, sendResponse) => {

    let emails = reques.emails;

    if (emails == null || emails.length == 0) {
        let li = document.createElement('li');
        li.innerHTML = 'No emails found';
        list.appendChild(li);
    }
    else {
        emails.forEach((email) => {
            let li = document.createElement('li');
            li.innerHTML = email;
            list.appendChild(li);
        })
    }
})

function scrapeEmails() {
    const emailRegEx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/gim;
    let emails = document.body.innerHTML.match(emailRegEx);
    chrome.runtime.sendMessage({ emails });
}