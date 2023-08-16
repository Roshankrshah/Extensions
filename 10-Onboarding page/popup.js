document.addEventListener('DOMContentLoaded',()=>{
    const title = document.getElementById('title');

    chrome.storage.local.get(['isOnboardingDone'],(value)=>{
        if(value.isOnboardingDone === true){
            chrome.storage.local.get(['username'],(name)=>{
                title.innerText= 'Your name is: '+ name.username;
            })
        }
        
    })
})