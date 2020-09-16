const refs = {
    inputLine: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
}

refs.inputLine.addEventListener('input', () => { 
    const fontSizeCounter =  refs.inputLine.value * 2
    refs.spanText.style.fontSize = `${fontSizeCounter}px`
    })