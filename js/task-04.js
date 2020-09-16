'use strict';
const refs = {
    span: document.querySelector('#value'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    wrapper: document.querySelector('#counter')
}   

refs.wrapper = document.addEventListener('click', doIncrement)
refs.wrapper = document.addEventListener('click', doDecrement)

function doIncrement(event) { 
    if (event.target !== refs.increment) { 
        return
    }
    refs.span.textContent = Number(refs.span.textContent) + 1
}
function doDecrement(event) { 
    if (event.target !== refs.decrement) { 
        return
    }
    refs.span.textContent = Number(refs.span.textContent) - 1
}
