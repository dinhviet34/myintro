function loadefect(){
    const myTimeout = setTimeout(function(){
        const bubblesContainer = document.querySelector('.bubbles');

        // Create bubbles
        for (let i = 0; i < 128; i++) {
          const bubble = document.createElement('div');
          bubble.classList.add('bubble');
          bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
          bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
          bubble.style.setProperty('--position', `${-5 + Math.random() * 100}%`);
          bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
          bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
          bubblesContainer.appendChild(bubble);
        }
    }, 3000);

}

function loadintroduce() {
    var intro = introduce;
    if(intro !== ""){
        var lines = intro.split(".");
        return lines;
    }
    else{
        return null;
    }
   
}
function setavatar(){
    var imgavatar = avatar;
    if(imgavatar !== ""){
        var image = document.getElementById('avatar');
        image.src = imgavatar;
    }
    else{
        var image = document.getElementById('avatar');
        image.src = "https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png";
    }
  
}
function loadstory(){
    var storys = story;
    var lines = storys.split(".");
    return lines;
}

function loadpluslink(){
    var pluslinks = pluslink;
    var lines = pluslinks.split("|");
    return lines;
}

function isMobile() {
    var match = window.matchMedia || window.msMatchMedia;
    if(match) {
        var mq = match("(pointer:coarse)");
        return mq.matches;
    }
    return false;
}