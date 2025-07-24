function setupToggleList(listId){
    const list = document.getElementById(listId)
    list.addEventListener("click",(event)=>{
        if(event.target.tagName === "LI"){
            event.target.classList.toggle = "highlighted"
        }
    })
}