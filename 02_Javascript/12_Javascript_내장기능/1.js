function random(n1, n2){
    return parseInt(Math.random() * ( n2 - n1 + 1 ))+n1;
}

const balls = new Array(45);

for (let i=0; i<balls.length; i++){
    balls[i] = i+1;
}

const lotto = new Array(6);
for(let i=0; i<lotto.length; i++){
    console.log(balls)
}