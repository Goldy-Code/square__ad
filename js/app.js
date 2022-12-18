//! Random Squares

const mainDiv = document.createElement('div');
document.body.prepend(mainDiv)

function createSquare() {
    const square = document.createElement('div');
    mainDiv.append(square)
    square.classList.add('box');
    topStyle(square)
    leftStyle(square)
    randomColor(square)
}

function topStyle(square) {
    let randomPX = Math.floor(1 + Math.random() * (75 + 1 - 1))
    square.style.top = `${randomPX}%`
}
function leftStyle(square) {
    let randomPX = Math.floor(1 + Math.random() * (75 + 1 - 1))
    square.style.left = `${randomPX}%`
}

function randomColor(square) {
    let a = '#'
    for (let i = 0; i < 6; i++) {
        let b = Math.floor(0 + Math.random() * 10)
        a += b
    }
    square.style.backgroundColor = `${a}`
}

// const myInterval = setInterval(createSquare, 1000)
setTimeout(() => {
    clearInterval(myInterval)
    setTimeout(() => pushAd(), 2000)
}, 5000)



//! Advertisement


const ad = document.createElement('div');
document.body.prepend(ad)

function pushAd() {
    ad.classList.add('ad')

    const timer = document.createElement('p')
    ad.innerText = 'здесь могла быть ваша реклама'
    ad.prepend(timer)


    timer.innerText = '5'

    let timeValue = 5
    function time() {
        timer.innerText = timeValue
        timeValue--
    }

    ad.style.animationName = 'hello';

    const stopAd = setInterval(time, 1000)
    setTimeout(() => {
        clearInterval(stopAd)
        ad.style.animationName = 'goodbye';
        ad.style.opacity = '0'
        ad.style.pointerEvents = "none";
    }, 6000)
}

pushAd()





































//? ne poluchilos
// const mainDiv = document.createElement('div');
// document.body.prepend(mainDiv)

// function createSquare() {
//     const square = document.createElement('div');
//     mainDiv.append(square)
//     square.classList.add('box');
//     const test = document.querySelectorAll('.box');

// }

// function topStyle(el) {
//     let randomPX = Math.floor(1 + Math.random() * (75 + 1 - 1))
//     el.style.top = `${randomPX}%`
// }
// function leftStyle(el) {
//     let randomPX = Math.floor(1 + Math.random() * (75 + 1 - 1))
//     el.style.left = `${randomPX}%`
// }

// function randomColor(el) {
//     let a = '#'
//     for (let i = 0; i < 6; i++) {
//         let b = Math.floor(0 + Math.random() * 10)
//         a += b
//     }
//     el.style.backgroundColor = `${a}`;
// }

// const myInterval = setInterval(createSquare, 500)
// setTimeout(() => {
//     clearInterval(myInterval)
// }, 1500)