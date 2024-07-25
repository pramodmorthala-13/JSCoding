let arr = [1, 2, 2, 3, 3, 4, 9, 9]

const Unique = arr.filter((v, i)=> {
  return arr.indexOf(v) === arr.lastIndexOf(v)
})
console.log("unique numebers with filter method", Unique)

//Non unique with for loop
var myUnique = []
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
    myUnique.push(arr[i])
  }
}
console.log("unique with for loop", myUnique)


//return only values having duplicate

const sUnique = arr.filter((v, index)=> {
  return arr.indexOf(v) !== index;
})
console.log(" only values having duplicate ", sUnique)

const removedup = arr.filter((v, index)=> {
  return arr.indexOf(v) == index;
})
console.log("  duplicate values removed ", removedup)