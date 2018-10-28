var winH = 0, winW = 0, viewSpan, pers = 700, backwall, scratch = true;

window.onload = () => {
  winH = window.innerHeight;
  winW = window.innerWidth;
  viewSpan = document.getElementById("viewSpan");
  backwall = document.getElementById("backwall");
  repositionBackface(); 
  initClock();
  initNewspaper();
};

let setupMirror = () => {
  let mirror = document.getElementById("mirror");
  mirror.addEventListener("click", () => {
    console.log("Off to next level");
  });
}

let initNewspaper = () => {
  let newspaper = document.getElementById("newspaper");
  let overlay = document.getElementById("overlay");

  overlay.addEventListener("click", configNewsPaper);
  newspaper.addEventListener("click", () => {
    configNewsPaper("overlay");
  });
}

let configNewsPaper = (size = "ord") => {
  let newspaper = document.getElementById("newspaper");
  let overlay = document.getElementById("overlay");
  let floor = document.getElementById("floor");

  if (scratch == true) {
    scratch = false;
    setupMirror();
  }

  if (size == "overlay") {
    overlay.classList.add("show");
    overlay.appendChild(newspaper);
    newspaper.style.width = "80%";
    newspaper.style.height = "80%";
  } else {
    overlay.classList.remove("show");
    floor.appendChild(newspaper);
    newspaper.style.width = "";
    newspaper.style.height = "";
  }
}

let repositionBackface = () => {
  var x = 0;
  if(winW < winH){
    x = winW;
  } else {
    x = winH;
  }
  backwall.style.transform = "translateZ(-" + (x - 1) + "px)";
  backwall.style.webkitTransform = "translateZ(-" + (x - 1) + "px)";
}

let updatePerspective = (originX,originY) => {
    let viewSpan = document.getElementById("viewSpan")
    viewSpan.style.perspectiveOrigin = originX.toFixed(4) + "% " + originY.toFixed(4) + "%";
    viewSpan.style.webkitPerspectiveOrigin = originX.toFixed(4) + "% " + originY.toFixed(4) + "%";
}

let initClock = () => {
  let secondsHand = document.getElementsByClassName("seconds-hand")[0];
  let minutesHand = document.getElementsByClassName("min-hand")[0];
  let hoursHand = document.getElementsByClassName("hour-hand")[0];
  
  setInterval( _ => {
      setDate(secondsHand, minutesHand, hoursHand);
  }, 1000);
}

let setDate = (secondsHand, minutesHand, hoursHand) => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `translateY(-2px) rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = ((mins / 60) * 360) + 90;
  minutesHand.style.transform = `translateY(-3.5px) rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `translateY(-5px) rotate(${hoursDeg}deg)`;
}