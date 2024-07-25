let a=[6,9]
count=10;
missing=[];
 for (let i=1; i<=count;i++){
 	if(a.indexOf(i)<0){
 		missing.push(i)
 	}
 }
 console.log(missing)