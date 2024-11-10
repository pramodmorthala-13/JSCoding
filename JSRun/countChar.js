// input str= 'aaaaaaaaaaaaaaabbccc  kd' output=15a2b3c1k1d/

str = 'aaaaaaaaaaaaaaabbccc  kd'

let charCount =1
let res=''

for(let i=1; i<=str.length;i++){
    if( str[i] ==str[i-1]){
        charCount+=1
    }else{
        if(str[i-1]!=" "){
        res += charCount+str[i-1]
        }
        charCount=1
    }
}

console.log(res)

//decode

let decodedStr='';
let count='';
for(let i=0; i<res.length; i++){
    if(!isNaN(res[i])){
        count+=res[i]
    }else{
        decodedStr+=res[i].repeat(Number(count));
        count='';
    }
}
console.log(decodedStr)