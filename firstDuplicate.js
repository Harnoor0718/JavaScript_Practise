function firstDuplicate(arr) {
    const seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            return item; 
        }
        seen.add(item);
    }
    return undefined; 
}
