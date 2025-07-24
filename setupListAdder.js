function setupListAdder(buttonId, listId){
    const button = document.getElementById(buttonId)
    const list = document.getElementById(listId)
    let count = 0
    button.addEventListener("click", ()=>{
        count++
        const li = document.createElement("li")
        li.textContent = `Item ${count}`
        list.appendChild(li)
    })
    

}