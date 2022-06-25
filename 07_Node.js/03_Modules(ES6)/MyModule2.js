/* exports의 하위 속성으로 변수, JSON, 함수 추가하기 
module.exports.name = "노드";
module.exports.property = {id: 'nodejs', type: 'javascript'};
module.exports.say = function(){
    console.log("Hello World");
};
 */
/* exports 속성으로 객체 추가(ES5버전)
module.exports.home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function(){
        console.log(this.postcode + ' ' + this.address);
    }
}; */

//(ES6버전)export default를 사용하면 한번에 많은 기능을 내보내지 못한다.
const name = "노드";
const property = {id: 'nodejs', type: 'javascript'};
const say = function(){
    console.log("Hello World");
};

const home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function(){
        console.log(this.postcode + ' ' + this.address);
    }
};

// 여러 개의 기능을 내보낼 경우 default를 적용하지 않는다.
// 내보내고자 하는 기능을 `{}`로 묶는다.
export {name,property,say,home};