// 사용자 정의 함수를 작성
function helloWord(){
    console.log("Hello World");
}

/* 작성된 함수를 모듈로 등록(ES5버전)
 module.exports = helloWord; */

// module.export = function(){
// console.log("Hello World");
// }

//(ES6버전) 하나의 모듈에서 단 하나의 기능만을 내보낼 때
export default helloWord;