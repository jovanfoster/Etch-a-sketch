const container = document.querySelector('.container');

for (i=0; i<16; i++){
    for (j=0; j<16; j++){
        let div = document.createElement('div');
        div.setAttribute('class', 'canvas');
        container.appendChild(div);
    }
}

const pixel = document.querySelectorAll('.canvas');

pixel.forEach(element => element.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'black';
}))

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => pixel.forEach(element => element.style.backgroundColor = 'white'));