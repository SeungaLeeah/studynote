const number = 1;
for(let i=2; i<10; i++){
    if(number == 1){
        if(i%2!=0){
            for(let j=1; j<10; j++){
            console.log("%d x %d=%d",i,j,i*j)

        }
    }
 } else{
     if(i%2==0){
         for(let j=1;j<10;j++){
             console.log("%d x %d=%d", i,j,i*j)
         }
     }
 }
}