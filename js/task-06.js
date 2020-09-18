const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', () => {
  if (inputRef.value.length == inputRef.dataset.length) {
    inputRef.classList.remove('invalid'), inputRef.classList.add('valid');
  } else inputRef.classList.add('invalid');
});
