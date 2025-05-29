const contextMenu = document.getElementById('ContextMenu')
const application = document.getElementById('Application')
const game = document.getElementsByClassName('Game')
const music = document.getElementById("Music")
const HTML = document.getElementById('HTML')
let musicList = 1 + 11
let repeat = "false"
let changeVolume = 0.25

music.play()
music.volume = changeVolume
temp = "1L"

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    
    contextMenu.style.top = `${event.clientY}px`;
    console.log("Y", event.clientY)
    contextMenu.style.left = `${event.clientX}px`;
    console.log("X", event.clientX)

    contextMenu.style.display = "block"
})
document.addEventListener("click", () => {
    contextMenu.style.display = "none"
})
document.getElementById("SearchBar").addEventListener("keypress", function(event) {
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
        Song()
    } else if (command.startsWith("/msc.c")) {
        let trackNumber = command.replace("/msc.c", "").trim();
        changeMusic(trackNumber);
    } else if (command.startsWith("/msc.rep")) {
        repeat = command.replace("/msc.rep", "").trim();
    } else if (command.startsWith("/msc.l")) {
        let trackNumber = temp + "L"
        changeMusic(trackNumber);
    } else {
        alert("Unknown command: " + command);
    }
    console.log("Command Used:", command) // Console Log
}
function changeBackground(bgNumber) {
    let bgPath = `Library/Background/Background ${bgNumber}.png`
    document.body.style.backgroundImage = `url('${bgPath}')`
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    console.log(`Background Changed to "Background ${bgNumber}"`) // Console Log
}
function changeFont(varColor){
    document.body.style.color = varColor
    console.log("Font Changed to", varColor) // Console Log
}
function onEnded() {
    console.log("Music Ended") // Console Log
    if (repeat == "false") {
        temp = temp.replace("L", "").trim();
        temp = temp.replace("D", "").trim();
    } 
    setTimeout(() => {
        if (repeat == "false") {
            temp++ 
        } 
        if (temp >= musicList) {
            temp = 1
        }
        let format = String(temp).padStart(2, '0')
        changeMusic(format)
        console.log("Music Started") // Console Log
    }, 10000)
}
function changeMusic(trackNumber) {
    let Track = `Library/Audio/bgm ${trackNumber}.mp3`;
    temp = trackNumber
    music.src = Track;
    music.play();
    console.log(`Music Changed to "bgm ${trackNumber}"`) // Console Log
}
function BGM() {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
    console.log("Music Paused:", music.paused) // Console Log
}
function BGMB() {
    temp = temp.replace("L", "").trim();
    temp = temp.replace("D", "").trim();
    temp--
    if (temp <= 0) {
        temp = musicList - 1
    }
    let format = String(temp).padStart(2, '0')
    changeMusic(format)
    console.log("Music Back Skiped") // Console Log
}
function BGMF() {
    temp = temp.replace("L", "").trim();
    temp = temp.replace("D", "").trim();
    temp++
    if (temp >= musicList) {
        temp = 1
    }
    let format = String(temp).padStart(2, '0')
    changeMusic(format)
    console.log("Music Forward Skiped") // Console Log
}
function Repeat() {
    repeat = repeat === "false" ? "true":"false"
    console.log("Repeat:", repeat) // Console Log
}
function Volume() {
    changeVolume += 0.25
    if (changeVolume > 1) {
        changeVolume = 0
    }
    music.volume = changeVolume
    Song()
    console.log("Volume:", music.volume*100) // Console Log
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
function CloseA() {
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
    console.log("   Function Close()") // Console Log
}
function TextDocument() {
    application.style.display = "block"
    application.style.backgroundColor = "var(--hover-clr1)"
    Exit()
    document.querySelectorAll(".TxtDoc").forEach(el => {
        el.style.display = "block"
    });
    console.log("   Function TextDocument()") // Console Log
}
function Browser(){
    application.style.display = "block"
    application.style.backgroundColor = "var(--hover-clr)"
    HTML.src = "https://www.webcrawler.com/"
    Exit()
    document.querySelectorAll(".Bro").forEach(el => {
        el.style.display = "block"
    });
    console.log("   Function Browser()") // Console Log
}
function Game() {
    application.style.display = "block"
    Exit()
    document.querySelectorAll(".Game").forEach(el => {
        el.style.display = "block"
    });
    console.log("   Function Game()") // Console Log
}
function Folder() {
    application.style.display = "block"
    Exit()
    document.querySelectorAll(".Folder").forEach(el => {
        el.style.display = "block"
    });
    console.log("   Function Folder()") // Console Log
}
function Notif() {
    document.getElementById("MusicPlayer").style.display = "none"
    setTimeout(() => {
        let temp = document.getElementById("Notif")
        temp.style.display = temp.style.display === "none" ? "Block":"None";
        console.log("Notif Shade:", temp.style.display) // Console Log
    }, 10)
}
function Music() {
    document.getElementById("Notif").style.display = "none"
    setTimeout(() => {
        let temp = document.getElementById("MusicPlayer")
        temp.style.display = temp.style.display === "none" ? "block":"None";
        console.log("Music Shade:", temp.style.display) // Console Log
    }, 10)
}