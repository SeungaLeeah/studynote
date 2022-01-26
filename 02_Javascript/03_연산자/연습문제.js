
// 문제 1
const year1 = 2022;
const myYear1 = 1995;
console.log(year1 - myYear1);

let age1 = 28;
console.log("나는 %d세 입니다.", age1);

/** 문제 1 선생님 풀이과정 */
// 현재 년도에 대한 값을 'year'라는 상수로 생성
const year2 = 2022;

// 자신의 나이를 연산한 후 'age'라는 이름의 지역변수에 할당
let age2 = year2 - 2000 +1;

// 문제 2
const age3 = 28;
const year3 = 2022;
console.log(age3 - year3);

let myYear3 = 1995;
console.log('나는 %d년도에 태어났습니다.', myYear3);


/** 문제 2 선생님 풀이과정 */
// 자신의 나이를 의미하는 상수 'age'를 정의
const age4 =28;

// 자신이 태어난 년도 'year'를 전역 변수 형식으로 산출
let year4 = 2022 - (28-1);

// 이스케이프 문자를 활용하여 출력
console.log("나는 %d년도에 태어났습니다.", year4);




// 문제 3
const numofApple =123;
const type1 = numofApple <= 120 ? "12" : "13";
console.log("",type1);


/** 문제 3 선생님 풀이과정 */
// 사과의 수
const numofApples = 123;

// 10으로 나눈 나머지를 소수점 값으로 환산
const extra = (numofApples % 10) /10;

// let basketCount = extra > 0 ? (numofApple / 10) - extra +1 : (numofApple / 10) - extra;
// console.log(basketCount);

let basketCount = (numofApples / 10) - extra;
basketCount += extra > 0 ? 1 : 0;
console.log(basketCount);



// 문제 4
/** 문제 4 선생님 풀이과정 */
const number = 467;

// 100단위에 대한 나머지 값을 소수점으로 구하기
const extra1 = (number % 100) / 100;
console.log(extra1);

const result = ((number / 100) - extra1) * 100;
console.log(result);

