/** 구구단 7단 출력하기 */
// y가 1부터 10보다 작은 동안 1씩 증가하면서 반복하므로 반복의 범위는 1~9
// 반복문이 수행되는 동안 y값에 7을 곱해서 z값을 생성

let y = 1;

while(y < 10){
    const z = y * 7;
    console.log("7 x %d = %d", y,z);
    y++
}

let x = 1;

while (x < 10) {
    const q = x * 13;
    console.log("13 * %d = %d",x, q);
    x++;
}