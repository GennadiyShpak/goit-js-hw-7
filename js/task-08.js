const refs = {
    inputWrapper: document.querySelector('#controls'),
    boxWrapper: document.querySelector('#boxes')
}



function squareGenerator(number) { 
    for (let i = 0; i < Numbers(number); i += 1) { 
        const square = document.createElement('div');
        square.style.width = `${squareSizeGenerator(number)}px`
        square.style.height = `${squareSizeGenerator(number)}px`
        square.style.backgroundColor = colorGenerator;
        
    }
    
}

const colorGenerator = () => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  return randomColor;
};

function squareSizeGenerator(number) { 
    let squareSize = 30;
    for (let i = 0; i < Numbers(number); i += 1) { 
        squareSize = squareSize + (10 * i);
    }
    return squareSize;
}