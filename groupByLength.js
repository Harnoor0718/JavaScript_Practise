function groupByLength(arr){
    const result = {}
    for(let str of arr){
        const len = str.length
        if(!result[len]) result[len] = []
        result[len].push(str)
    }
    return result;
}