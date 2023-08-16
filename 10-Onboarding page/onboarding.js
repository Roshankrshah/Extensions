document.addEventListener('DOMContentLoaded',()=>{
    const input = document.getElementById('name')
    const btn = document.getElementById('btn')
    const title = document.getElementById('title')

    input.addEventListener('keyup',()=>{
        title.innerText = "Hey there " + input.value + "✋";
    });

    btn.addEventListener('click',()=>{

        chrome.storage.local.set({username: input.value});
        chrome.storage.local.set({isOnboardingDone:true});
    })
})