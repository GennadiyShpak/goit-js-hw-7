const refs = {
  inputWrapper: document.querySelector('#controls'),
  boxWrapper: document.querySelector('#boxes'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  input: document.querySelector('.boxValue'),
};

const colorGenerator = () => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  return randomColor;
};

const divSizeGenerator = number => {
  let size = 30;
  if (number == 1) {
    return size;
  }
  return (size = 30 + 10 * (number - 1));
};

const divGenerator = number => {
  const randomDiv = document.createElement('div');
  randomDiv.style.backgroundColor = colorGenerator();
  randomDiv.style.width = `${divSizeGenerator(number)}px`;
  randomDiv.style.height = `${divSizeGenerator(number)}px`;
  refs.boxWrapper.appendChild(randomDiv);
};

const divCreator = number => {
  for (let i = 0; i < number; i += 1) {
    divGenerator(i);
  }
};

refs.renderBtn.addEventListener('click', () => {
  divCreator(refs.input.value);
});

refs.destroy.addEventListener('click', () => {
  refs.boxWrapper.innerHTML = '';
});
