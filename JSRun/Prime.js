const prime=(min,max)=>{
  for(let i=min; i<max; i++){
    let flag=true;
    for(let j=2; j<i; j++){
      if(i%j==0){
        flag=false;
        break;
      }
    }
    if(flag){
      console.log(i)
    }
  }
}

prime(2,10)