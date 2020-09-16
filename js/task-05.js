'use strict';
const ref = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

const inputContent = ref.input.addEventListener('input', () => { 
    ref.input.value === '' ? ref.span.textContent = 'незнакомец' :
    ref.span.textContent = ref.input.value
})
