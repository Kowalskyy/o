const preloader = document.querySelector(".preloader");
const button = document.querySelector(".preloader-content_button");
let animInterval;
let loadInterval;

/*MGHbdE4oMGM*/ /*B8EpCnLIa3E*/

const videoId = "B8EpCnLIa3E"
YT.ready(_=>{
    window.player = new YT.Player("player", {
        videoId: videoId,
        playerVars: { "autoplay": 0, "controls": 0, "loop": 1, "playlist": videoId},
        events: {
            "onReady": e => {
                //Autoplay disabled so fuck this
                //player.pauseVideo();
                //player.mute();
                e.target.setVolume(25);
                clearInterval(loadInterval)
                button.innerText = "press on me"
                button.classList.add("ready");
                button.addEventListener("click", () => {
                    animInterval = setInterval(preloaderAnim, 10);
                    button.classList.add("clicked");
                });
            }
        }
    });
})

const xd = ["✶","✷","✹","✷","✶"].reverse();
let i = 0;
loadInterval = setInterval( _ => {
    if (i==xd.length) i=0
    button.innerText = xd[i];
    i++
},100)

let j = 1;
function preloaderAnim() {
    j -= .01;
    preloader.style.opacity = j;

    if (j <= 0) {
        clearInterval(animInterval);
        setTimeout(() => {preloader.removeAttribute("style");}, 50);
        setTimeout(() => {preloader.style.display = "none"; preloader.remove()}, 60);
    };

    if (j <= 1) {
        player.unMute();
        player.playVideo();
    };
};

