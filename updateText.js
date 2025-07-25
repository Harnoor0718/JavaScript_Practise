function updateText(id, newText){
    const element = document.getElementById(id)
    if(!element) return "Element not found"
    element.textContent = newText
    return undefined;

}
