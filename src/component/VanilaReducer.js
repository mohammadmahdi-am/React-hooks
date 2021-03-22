const array1 = [1,2,3,4];
const reducer = (acc,currentValue) => {
    console.log("acc",acc)
    console.log("currentvalue",currentValue)
    return acc + currentValue
}
console.log(array1.reduce(reducer,5))