var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;
var max = 0;
for (let i =0; i<price.length; i++){
    money += price[i]*qty[i];
}
for (let b=1; b<price.length; b++){
    
}
       console.log('전체 결제 금액:' + money +'원');
    



/*

var student = ['둘리','도우너','또치','희동'];
var grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];

var sum= 0, avg =0;
for (var p = 0; p<student.length; p++){
    var s = student[p]
}
for(var i=0; i<grade.length; i++){
    var personal_sum = 0;
    for(var j=0; j<grade[i].length; j++){
        sum += grade[i][j];
        personal_sum += grade[i][j];
             
    }
    var personal_avg = personal_sum / (grade[i].length);
    personal_avg = personal_avg.toFixed(2);
    console.log("%s 총점은 %d이고 평균은 %d입니다.", s, personal_sum, personal_avg);
}
console.log("반평균: %d", sum/3/4);
*/