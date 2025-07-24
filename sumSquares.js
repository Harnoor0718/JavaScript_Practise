function sumSquares(arr){
    return arr
    .filter(num => typeof(num) === "number" && !isNaN(num))
    .map(num => num*num)
    .reduce((sum,num)=> sum+num , 0)
}