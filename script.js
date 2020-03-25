const pixels = document.querySelectorAll('.pixel')

for (i=0; i<pixels.length; i++) {
    pixels[i].onmouseover = function() {
        this.classList.add('active')
        setTimeout(() => {
            this.classList.remove('active')
        }, document.querySelector('#delay').value);
    }
}

document.querySelector('#color').addEventListener('change', () => {
    document.documentElement.style.setProperty('--pixel-color', document.querySelector('#color').value);
});

function gridSwitch() {
    if(document.querySelector('#grid').checked == true) {
        document.documentElement.style.setProperty('--grid', '1px solid rgba(255,255,255,0.04)');
    } else {
        document.documentElement.style.setProperty('--grid', 'none');
    }
}
