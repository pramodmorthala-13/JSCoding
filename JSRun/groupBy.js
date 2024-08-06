const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

const groupBy=(arr,key)=>{
    return arr.reduce((acc,curr)=>{
        if(!acc[curr[key]]){
            acc[curr[key]]=[]
        }
        acc[curr[key]].push(curr)
        return acc
    },{})
}

const res = groupBy(inventory,"type")
console.log(res)