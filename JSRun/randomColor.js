const randomColor=()=>{
  let color="#"
  for(let i=1;i<=6;i++){
    let num=Math.floor(Math.random()*16)
    if(num<10){
      color+=num
    }else{
      switch (num) {
        case 10:
          color+='A';
          break;
        case 11:
          color+='B';
          break;
          case 12:
            color+='C';
break;
            case 13:
              color+='D';
break;
case 14:
          color+='E';
break;
case 15:
          color+='F';
          break;
      
      }
    }
  }
  console.log(color)
}

randomColor()