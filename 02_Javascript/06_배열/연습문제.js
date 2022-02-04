
var check_list = [true, false, false, true, false];
console.log('before-->' + check_list);

for(var i =0; i < (check_list.length/2); i++){
    var k = check_list.length -i -1 ;
    var tmp = check_list[i];
    check_list[i]=check_list[k];
    check_list[k]= tmp
}
console.log('after -->'+ check_list) 

/*
var time=[7, 5, 5, 5, 5, 10, 7 ];
var money = 0;

for(var i = 0; i< time.length; i++){
  for(var j=0; j<time[i].length;j++)
     console.log(j);
    }    

*/
