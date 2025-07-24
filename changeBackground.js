function changeBackground(id, color){
    const element = document.getElementById(id)
    if(!element) return "Element not found";
    element.style.backgroundColor = color
}