const bgRate = 1;
const fgRate = 2;

let init = _ => {
    let bgLeft = 0;
    let container = document.getElementById("container");
    let bg = document.getElementById("bg");
    let flag = document.getElementById("flag");
    // let fg = document.getElementById("fg");
    moveObj(bg, bgRate);
    moveObj(flag, bgRate, 800);
    // moveObj(fg, fgRate);
}

let moveObj = (obj, rate, ingameCharacter = false) => {
    setTimeout( _ => {
        moveObj(obj, rate);
    }, 40);

    let objPos = parseInt(obj.style.left);
    let initialPosition = ingameCharacter ? ingameCharacter + "px" : "-1px";
    obj.style.left = objPos ? `${objPos - rate}px` : initialPosition;

}

if( document.readyState === 'complete' ) {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}