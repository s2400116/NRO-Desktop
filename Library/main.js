const contextMenu = document.getElementById('ContextMenu')
const application = document.getElementById('Application')
const game = document.getElementsByClassName('Game')
const music = document.getElementById("Music")
let musicList = 7
let repeat = "false"
let changeVolume = 0.25

music.play()
music.volume = changeVolume
temp = "1L"

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

function executeCommand(command) {
    if (command.startsWith("/bg")) {
        let bgNumber = command.replace("/bg", "").trim();
        changeBackground(bgNumber);
    } else if (command.startsWith("/fnt")) {
        let varColor = command.replace("/fnt", "").trim();
        changeFont(varColor);
    } else if (command.startsWith("/msc.vol")) {
        let varVolume = command.replace("/msc.vol", "").trim();
        music.volume = parseFloat(varVolume/100);
        console.log(music.volume)
        Song()
    } else if (command.startsWith("/msc.c")) {
        let trackNumber = command.replace("/msc.c", "").trim();
        changeMusic(trackNumber);
    } else if (command.startsWith("/msc.rep")) {
        repeat = command.replace("/msc.rep", "").trim();
    } else if (command.startsWith("/msc.l")) {
        temp += "L"
        console.log (temp)
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
function onEnded() {
    setTimeout(() => {
        if (repeat == "false") {
            temp++
        }
        if (temp >= musicList) {
            temp = 1
        }
        let format = String(temp).padStart(2, '0')
        changeMusic(format)
    }, 10000)
}
function changeMusic(trackNumber) {
    let Track = `Library/Audio/bgm ${trackNumber}.mp3`;
    temp = trackNumber
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
function BGMB() {
    temp = temp.replace("L", "").trim();
    temp--
    if (temp <= 0) {
        temp = musicList - 1
    }
    let format = String(temp).padStart(2, '0')
    changeMusic(format)
}
function BGMF() {
    temp = temp.replace("L", "").trim();
    temp++
    if (temp >= musicList) {
        temp = 1
    }
    let format = String(temp).padStart(2, '0')
    changeMusic(format)
}
function Repeat() {
    repeat = repeat === "false" ? "true":"false"
}
function Volume() {
    changeVolume += 0.25
    if (changeVolume > 1) {
        changeVolume = 0
    }
    music.volume = changeVolume
    Song()
    console.log("Volume", music.volume)
}
function Song() {
    let vol = document.getElementById("Vol")
    if (music.volume > 0.5) {
        vol.src = "Library/Icon/HighVolume.png"
    } else if (music.volume > 0.0) {
        vol.src = "Library/Icon/LowVolume.png"
    } else {
        vol.src = "Library/Icon/Mute.png"
    }
}
function Exit() {
    application.style.display = "block"
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "none"
    });
    document.querySelectorAll(".Folder").forEach(el => {
        el.style.display = "none"
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
function TextDocument() {
    application.style.display = "block"
    application.style.backgroundColor = "var(--hover-clr1)"
    Exit()
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "block"
    });
}
function Browser(){
    application.style.display = "block"
    application.style.backgroundColor = "var(--hover-clr)"
    Exit()
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "block"
    });
}
function Game() {
    application.style.display = "block"
    Exit()
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "block"
    });
}
function Folder() {
    application.style.display = "block"
    Exit()
    document.querySelectorAll(".Folder").forEach(el => {
        el.style.display = "block"
    });
}
function Notif() {
    document.getElementById("MusicPlayer").style.display = "none"
    let temp = document.getElementById("Notif")
    temp.style.display = temp.style.display === "none" ? "Block":"None";
}
function Music() {
    document.getElementById("Notif").style.display = "none"
    let temp = document.getElementById("MusicPlayer")
    temp.style.display = temp.style.display === "none" ? "block":"None";
}