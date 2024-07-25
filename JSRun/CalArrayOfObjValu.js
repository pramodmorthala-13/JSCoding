const cars=[
  {
    name:"car1",
    price:1200
  },
   {
    name:"car2",
    price:1400
  },
  {
    name:"car3",
    price:200
  }, 
  {
    name:"car4",
    price:100
  }, 
  {
    name:"car5",
    price:2000
  }
  ]
  
  const cartotal=cars.reduce((total,item)=>{
    return total=total+item.price;
  
  },0)//if you want to calculate then pass 0 0 is initial value i.e total=0
  console.log("using reduce",cartotal)
  
  
  
  // using foreach

let total=0;
cars.forEach(item=>{
 // total=total+item.price
 total+=item.price
})
console.log("using foreach",total)

const carname=cars.map((car)=>{
  return console.log(car,car.name)
})
