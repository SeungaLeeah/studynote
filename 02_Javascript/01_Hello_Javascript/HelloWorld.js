"use strict"; // 엄격모드 적용 --> ES6가 등장하면서 함께 추가된 ES5의 변경사항을 활성화 시킴

// 메세지 그룹핑
console.group("MyMessage1");
console.log("안녕하세요. Javascript1");
console.log("안녕하세요. Javascript2");
console.log("안녕하세요. Javascript3");
console.groupEnd();

console.group("MyMessage2"); //출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript4");
console.group("MyMessage2-1");
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd();
console.groupEnd(); //그룸으로 묶기 끝