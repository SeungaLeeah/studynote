/** 1) and */
// --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.groupEnd();

/** 2) and연산 여러 개 사용 */
console.group("2) and 연산 여러 개 사용");
console.log(true && true && true);
console.log(true && true && false);
console.log(false && false && true);
console.log(false && true && true);
console.groupEnd();

/** 3) or */
// --> 하나라도 참이 포함되어 있다면 결과는 참
console.group("3) or");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.groupEnd();

/** 4) or 연산 여러 개 사용*/
console.group("4) or 연산 여러 개 사용");
console.log(true || true || true);
console.log(true || true || false);
console.log(false || false || true);
console.log(false || true || true);
console.groupEnd();

/** 5) 복합사용*/
console.group("5) 복합사용");
// ANd가 OR보다 항상 우선한다.
console.log(true && true || true);
console.log(true && true || false);
console.log(false && false || true);
console.log(false && true || true);

console.log(true ||true && true);
console.log(true ||true && false);
console.log(false ||false && true);
console.log(false ||true && true);
console.groupEnd();

/** 6) not */
console.group("6) not 사용");
let success = true;
let fail = !success;
console.log(fail);

let k =1;
console.log(k);

let 1 = 0;
console.log(!1);

let str1 = "Hello";
console.log(!str1);

let str2 = "";
console.log(!str2);
console.groupEnd();