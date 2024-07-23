const preEls = document.querySelectorAll('pre');

const buttonKeys = Object.freeze({
    innerText: 'Copy',
    type: 'button' 
});

[...preEls].forEach(preEl => {
    const button = document.createElement('button')
    button.innerText = buttonKeys.innerText
    button.type = buttonKeys.type

    preEl.append(button)

    const codeEl = preEl.querySelector('code')

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(codeEl.innerText)
    })
})
