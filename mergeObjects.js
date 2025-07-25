function mergeObjects(obj1, obj2){
    if(typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) return {}
        const result = {}
        for(let key in obj1){
            result[key] = obj1[key];
        }
        for(let key in obj2){
            result[key] = obj2[key];
        }
    return result;
}