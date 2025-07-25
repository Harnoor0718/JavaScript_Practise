function flattenArray(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item));
        } else if (typeof item == 'number'){
            result.push(item);
        }
    }
    return result;
}