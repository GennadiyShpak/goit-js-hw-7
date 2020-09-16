const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('change', () => { 
    if (inputRef.value.length == inputRef.dataset.length) {
        inputRef.classList.remove('invalid'),
            inputRef.classList.add('valid'),
            console.log(inputRef);
    } else inputRef.classList.add('invalid');
    console.log(inputRef);
})