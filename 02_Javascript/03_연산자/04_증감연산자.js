/** 1) 변수 스스로 1 증가 */ 
let selfPuls = 1;
console.log(selfPuls);

selfPuls++;
console.log(selfPuls);

++selfPuls;
console.log(selfPuls);

/** 2) 변수 스스로 1감소 */
let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

/** 3) 전위 증감 연산자 */
let preValue = 1;

// preValue를 먼저 1 증가 시키고 전체 수식을 처리한다.
//--> 앞북
let preResult = 100 + ++preValue;

console.log(preResult);
console.log(preValue);

/** 4) 후위 증감 연산자 */
let nextValue = 1;
 
// 100+nextValue를 먼저 처리하고 나중에서야  nextValue가 1 증가한다.
//--> 뒷북
let nextValue =100 + nextValue++;

console.log(nextValue);
console.log(nextValue);
