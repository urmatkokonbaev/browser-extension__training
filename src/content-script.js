const preEls = document.querySelectorAll('pre');

const buttonKeys = Object.freeze({
    innerText: 'Copy',
    type: 'button' 
});

[...preEls].forEach(preEl => {
    const root = document.createElement('div')
    root.style.position = 'relative'

    const cssUrl = chrome.runtime.getURL('content-script.css')

    const shadowRoot = root.attachShadow({mode: 'open'})
    shadowRoot.innerHTML=`<link rel="stylesheet" href="${cssUrl}"></link>`

    const button = document.createElement('button')
    button.innerText = buttonKeys.innerText
    button.type = buttonKeys.type

    shadowRoot.append(button)

    preEl.prepend(root)

    const codeEl = preEl.querySelector('code')

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.innerText)
    })
})
