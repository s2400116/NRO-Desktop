const contextMenu = document.getElementById('ContextMenu')
const fileName = document.getElementById('fileName')
const ico = document.getElementById('Ico')
const icon = document.getElementById('Icon') 
const photo = document.getElementById('Photo')

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;

    contextMenu.style.display = "block"
})
document.addEventListener("click", () => {
    contextMenu.style.display = "none"
})

function Select(selection) {
    icon.style.display = "block"
    photo.style.display = "none"
    let type = selection.match(/\.(\w)/);
    if (type) {
        let extracted = '.' + type[1];
        let name = selection.replace(extracted, "").trim();
        fileName.innerHTML = name
        if (extracted == ".F") {
            ico.src = "Library/Icon/Folder.png"
        } else if (extracted == ".f") {
            ico.src = "../Library/Icon/Folder.png"
        } else if (extracted == ".P") {
            ico.src = "Library/Icon/Python.png"
        } else if (extracted == ".p") {
            ico.src = "../Library/Icon/Python.png"
        } else if (extracted == ".I") {
            photo.style.display = "block"
            icon.style.display = "none"
            photo.src = `Library/Preview/${name}`
        } else if (extracted == ".i") {
            photo.style.display = "block"
            icon.style.display = "none"
            photo.src = `../Library/Preview/${name}`
        }
    }
}