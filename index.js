const input = document.querySelector('.field-input')
const counter = document.querySelector('.field-counter')

const maxLength = input.getAttribute('maxlength')

counter.innerHTML = maxLength

input.addEventListener('input', event => {
    const valueLength = event.target.value.length;
    const charLeftLength = maxLength - valueLength

    if(charLeftLength <0) return

    counter.innerText = charLeftLength
})