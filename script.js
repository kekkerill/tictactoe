area = document.getElementById('area')
reload = document.getElementById('reload')
let arrO = []
let arrX = []
let arrWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]
reload.onclick = () => {
    location.reload()
}
for (let i = 1; i <= 9; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.id = i;
    area.appendChild(block);
}

for (i = 0; i < area.children.length; i++) {
    const elem = area.children[i]
    elem.addEventListener('click', (data) => {
        onclick(data);
    })
}

let count = 1
function onclick(data) {
    count += 1
    if (!data.target.innerText) {
        if (count % 2 == 1) {
            data.target.innerText = 'O'
            arrO.push(data.target.id)
        }
        else {
            data.target.innerText = 'X'
            arrX.push(data.target.id)
        }
        checkWin()
    }
}
function checkWin() {
    let allBlock = document.getElementsByClassName('block')
    console.log(allBlock);
    if (allBlock[0].innerHTML == "X" && allBlock[1].innerHTML == "X" && allBlock[2].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[3].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[5].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[6].innerHTML == "X" && allBlock[7].innerHTML == "X" && allBlock[8].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[0].innerHTML == "X" && allBlock[3].innerHTML == "X" && allBlock[6].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[1].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[7].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[2].innerHTML == "X" && allBlock[5].innerHTML == "X" && allBlock[8].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[0].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[8].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[2].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[6].innerHTML == "X") {
        alert('Крестики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[0].innerHTML == "O" && allBlock[1].innerHTML == "O" && allBlock[2].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[3].innerHTML == "O" && allBlock[4].innerHTML == "O" && allBlock[5].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[6].innerHTML == "O" && allBlock[7].innerHTML == "O" && allBlock[8].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[0].innerHTML == "O" && allBlock[3].innerHTML == "O" && allBlock[6].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[1].innerHTML == "O" && allBlock[4].innerHTML == "O" && allBlock[7].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[2].innerHTML == "O" && allBlock[5].innerHTML == "O" && allBlock[8].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[0].innerHTML == "O" && allBlock[4].innerHTML == "O" && allBlock[8].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
    if (allBlock[2].innerHTML == "O" && allBlock[4].innerHTML == "O" && allBlock[6].innerHTML == "O") {
        alert('Нолики победили'); setTimeout(() => {
            location.reload()
        }, 500);
    }
}
