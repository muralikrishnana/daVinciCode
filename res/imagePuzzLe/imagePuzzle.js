let begin = () => {
    // let button = document.getElementById("proceedButton");
    // let introDiv = document.getElementById("c-body");

    // button.onclick = () => {
    //     introDiv.classList.add("hidden");
        init();
    // }
}

let setTile = () => {
    let pallette = ["#2CBAA0", "#C13E6E", "#ED233C", "#D84B4B", "#C97C08"];
    let tiles = document.getElementsByClassName("photo");
    i = 0;
    for (tile of tiles) {
        tile.style.background = pallette[i++%pallette.length];
    }
}

let init = () => {
    setTile();
    let gallery = document.getElementById('gallery');
    let lightboxActive = false;

    function showLightbox(e) {
      gallery.classList.toggle('lightbox');
    }
}

document.addEventListener("DOMContentLoaded", begin);