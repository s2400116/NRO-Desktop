const contextMenu = document.getElementById('ContextMenu')
const application = document.getElementById('Application')
const game = document.getElementsByClassName('Game')
const music = document.getElementById("Music")

music.play()
music.volume = 0.3

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    
    contextMenu.style.top = `${event.clientY}px`;
    console.log(event.clientY)
    contextMenu.style.left = `${event.clientX}px`;
    console.log(event.clientX)

    contextMenu.style.display = "block"
})
document.addEventListener("click", () => {
    contextMenu.style.display = "none"
})
document.getElementById("searchBar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        executeCommand(this.value.trim())
        this.value = ""
    }
});
setInterval (() => {
    if (music.ended) {
        setTimeout(() => {
            music.play()
        }, 9000)
    }
}, 1000)

function executeCommand(command) {
    if (command.startsWith("/bg")) {
        let bgNumber = command.replace("/bg", "").trim();
        changeBackground(bgNumber);
    } else if (command.startsWith("/fnt")) {
        let varColor = command.replace("/fnt", "").trim();
        changeFont(varColor);
    } else if (command.startsWith("/msc.vol")) {
        let varVolume = command.replace("/msc.vol", "").trim();
        music.volume = parseFloat(varVolume);
    } else if (command.startsWith("/msc.c")) {
        let trackNumber = command.replace("/msc.c", "").trim();
        changeMusic(trackNumber);
    } else {
        alert("Unknown command: " + command);
    }
}
function changeBackground(bgNumber) {
    let bgPath = `Library/Background/Background ${bgNumber}.png`
    document.body.style.backgroundImage = `url('${bgPath}')`
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
}
function changeFont(varColor){
    document.body.style.color = varColor
}
function changeMusic(trackNumber) {
    let Track = `Library/Audio/bgm ${trackNumber}.mp3`;
    music.src = Track;
    music.play();
}
function BGM() {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
}
function TextDocument() {
    application.style.display = "block"
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "block"
    });
}
function Browser(){
    application.style.display = "block"
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "block"
    });
}
function Close() {
    application.style.display = "none"
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "none"
    });
}
function Game() {
    application.style.display = "block"
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "block"
    });
}