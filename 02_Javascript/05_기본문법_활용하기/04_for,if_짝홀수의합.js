let a = 0;
let b = 0;

for (let i=1; i <= 10; i++){
    if (i % 2 == 0){
        console.log("%d(은)는 짝수", i);
        b += i;
    }  else {
        console.log("%d(은)는 홀수", i);
        a += i;
    }
}

console.log("1~10 까지 홀수들의 합: %d", a);
console.log("1~10 까지 짝수들의 합: %d", b);