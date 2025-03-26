const contextMenu = document.getElementById('ContextMenu')

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;

    contextMenu.style.display = "block"
})
document.addEventListener("click", () => {
    contextMenu.style.display = "none"
})