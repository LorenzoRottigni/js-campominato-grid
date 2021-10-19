
function writeGrid(GENERATION_KEY){
    let k = 0;
    let temp;
    const parent = document.getElementById('box-parent')
    const generationKeyDivider = Math.sqrt(GENERATION_KEY)
    parent.textContent = '';
    for (let i = 0; i < GENERATION_KEY; i++) {
        if((i%generationKeyDivider) === 0){
            k++;
            const boxRowx10 = document.createElement("div");
            boxRowx10.classList.add('box-row','d-flex','flex-wrap','justify-content-center');
            boxRowx10.setAttribute('id', 'row-'+ k);
            console.log('created row-'+ k);
            parent.appendChild(boxRowx10);
            console.log('appended row-'+ k);
        }
        const box = document.createElement("div");
        box.classList.add('box1x1','ratio','ratio1x1')
        box.innerHTML = '<span class="super-center text-white fs-3 d-flex justify-content-center align-items-center" >' + (i + 1) + '</span>';
        const boxImg = document.createElement("img");
        boxImg.src = "../img/wooden-box.png";
        box.appendChild(boxImg)
        temp = document.getElementById('row-' + k)
        console.log('trying to aquire row-' + k);
        temp.appendChild(box);
    }
}

function setEventListeners(){
    const boxes = document.querySelectorAll('.box1x1');
    boxes.forEach(box => {
        const ciao = 'ciao'
        box.addEventListener('click', ()=>{
            box.lastChild.src = '../img/wooden-box-alt.png'
        })
    });
}


writeGrid(100);
setEventListeners();

const choosenLevel = document.querySelector('select');

choosenLevel.addEventListener('change', () => {
    switch(choosenLevel.value){
        case '1':
            writeGrid(100);
            setEventListeners();
            break;
        case '2':
            writeGrid(81);
            setEventListeners();
            break;
        case '3':
            writeGrid(49);
            setEventListeners();
            break;
        default:
            document.write("there's a client side error")
    }
})
