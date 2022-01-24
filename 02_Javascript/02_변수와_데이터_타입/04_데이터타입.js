"use strict"

/** 1) 지금 바로 익혀야 하는 데이터 타입 */
// Number
let sampleValue1 =123;
console.log(typeof sampleValue1);

// Boolean, 논리값 (true(참).false(거짓)만 표현 가능)
let sampleValue2 = true;
console.log(typeof sampleValue2);

// 쌍,홀 따옴표로 감싼 경우 문자열(문자,글자의 집합)로  인식
let sampleValue3 = "hello world";
console.log(typeof sampleValue3);

/** 2) 시간을 두고 천천히 익혀야 하는 데이터 타입 */
// 객체 (Object)
let sampleValue4 = new Date();
console.log(typeof sampleValue4);

// null --> 비어있는(=아무런 기능이 없는 상태) 객체 (Object)
let sampleValue5 = null;
console.log(typeof sampleValue5);

// 선언만 하고 값이 정의되지 않은 상태 (undfined)
let sampleValue6;
console.log(typeof sampleValue6);