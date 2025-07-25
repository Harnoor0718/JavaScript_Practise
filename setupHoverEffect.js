function setupHoverEffect(id){
    const element = document.getElementById(id)
    if(!element) return "Element not found";
    element.addEventListener("mouseover",()=> element.classList.add("hover"));
    element.addEventListener("mouseout",()=> element.classList.remove("hover"));
    return undefined;
}