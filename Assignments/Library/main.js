const contextMenu = document.getElementById('ContextMenu')
const FileName = document.getElementById('FileName')
const ico = document.getElementById('Ico')
const icon = document.getElementById('Icon') 
const photo = document.getElementById('Photo')
const Console = document.getElementById('Console')
const Image = document.getElementById('ImageSRC')
const ImageFS = document.getElementById('ImageFS')
const Html = document.getElementById('HTML')
let subject = document.getElementById('Subject').innerHTML
let domain = document.getElementById('Domain').innerHTML

console.log("Subject    ", subject)
console.log("Domain     ", domain)

StartUp()

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;

    contextMenu.style.display = "block"
})
document.addEventListener("click", () => {
    contextMenu.style.display = "none"
})

function StartUp() {
    console.log("   Function StartUp()")
    if (domain == "MainDomain") {
        domain = ""
    } else if (domain == "SubDomain") {
        domain = "../"
    } else {
        console.log ("Failed", domain)
    }
}
function Select(selection) {
    console.log("Selection: ", selection)
    icon.style.display = "block"
    photo.style.display = "none"
    let type = selection.match(/\.(\w)/);
    if (type) {
        let extracted = '.' + type[1];
        let name = selection.replace(extracted, "").trim();
        FileName.innerHTML = name
        if (extracted == ".F") {
            ico.src = `${domain}Library/Icon/Folder.png`
        } else if (extracted == ".f") {
            ico.src = `${domain}Library/Icon/PrevFolder.png`
        } else if (extracted == ".P") {
            Script(name)
            ico.src = `${domain}Library/Icon/Python.png`
        } else if (extracted == ".T") {
            ico.src = `${domain}Library/Icon/Text.png`
        } else if (extracted == ".H") {
            ico.src = `${domain}Library/Icon/HTML.png`
            HTML(name, domain)
        } else if (extracted == ".C") {
            ico.src = `${domain}Library/Icon/CSS.png`
        } else if (extracted == ".J") {
            ico.src = `${domain}Library/Icon/JS.png`
        } else if (extracted == ".I") {
            photo.style.display = "block"
            icon.style.display = "none"
            photo.src = `${domain}Library/Preview/${name}`
            Image.src = `${domain}Library/Preview/${name}`
        }
        console.log("   Accessed", name)
    }
}
function CloseC() {
    Console.style.display = "none"
    console.log("Closed Console")
}
function Open() {
    Console.style.display = "block"
    console.log("Opened Console")
}
function Script(name) {
    name = name.replace(".py", "").trim();
    let old = document.getElementById('Script')
    if (old) old.remove()
    let newScript = document.createElement("script")
    newScript.src = `../Library/Assignments/${subject}/${name}.js`
    newScript.id = "Script"
    document.head.appendChild(newScript)
    setTimeout(() => {
        Assignment()
    }, 10)
    console.log("Script()")
}
function Assignment() {}
function HideContextMenu () {
    let old = document.getElementById('Script')
    if (old) old.remove()
    let newScript = document.createElement("script")
    newScript.src = `../Library/Assignments/.js`
    newScript.id = "Script"
    document.head.appendChild(newScript)
    console.log("Script()")
}
function ImageFullScreen() {
    ImageFS.style.display = "block"
    console.log("Image Opened")
}
function CloseI() {
    ImageFS.style.display = "none"
    console.log("Image Closed")
}
function HTML(name, domain){
    console.log(name, domain)
    Browser()
    Html.src = `${domain}Library/Works/${subject}/${name}`
}
function Browser() {}