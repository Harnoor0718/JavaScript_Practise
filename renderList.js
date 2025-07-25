function renderList(id, items){
    const list = document.getElementById(id)
    if(!list) return "Element not found";
    list.innerHTML = ""
    items.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item
        list.appendChild(li);
    });
    return undefined;
}