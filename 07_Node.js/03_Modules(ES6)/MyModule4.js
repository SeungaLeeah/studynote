/** 객체를 모듈화 하기 --> 가장 일반적인 방법 (ES5버전)
class HelloWord {
    constructor(){
        console.log("----HelloWorld의 객체가 생성되었습니다. ----");
    }
    say(){
        console.log("Hello World");
    }
}

// 클래스에 대한 객체를 모듈에 추가
module.exports = new HelloWord(); */

//(ES6버전)
class HelloWord {
    constructor(){
        console.log("----HelloWorld의 객체가 생성되었습니다. ----");
    }
    say(){
        console.log("Hello World");
    }
}
export default new HelloWord();