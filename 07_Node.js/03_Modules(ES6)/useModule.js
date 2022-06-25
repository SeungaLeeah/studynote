// (ES5버전)
// const my1 = require('./MyModule1');

//(ES6버전) 확장자까지 명시를 해야한다.
import my1 from './MyModule1.js';
my1();

// -------------------------------
// (ES5버전)
// const my2 = require('./MyModule2');

// console.log(my2.name);
// console.log(my2.property.id);
// console.log(my2.property.type);
// my2.say();

// console.log(my2.home.postcode);
// console.log(my2.home.address);
// my2.home.getAddress();

//(ES6버전) `{}`로 묶인 애들은 이름변경이 안됨
import {name, property, say, home} from './MyModule2.js';

console.log(name);
console.log(property.id);
console.log(property.type);
say();

console.log(home.postcode);
console.log(home.address);
home.getAddress();
// -------------------------------

// (ES5버전)
// const my3 = require('./MyModule3');
// var module_obj = new my3();
// module_obj.say();

//(ES6버전) export default로 내보낸 애들은 이름 변경이 자유로움
import my3 from './MyModule3.js';
var module_obj = new my3();
module_obj.say();


// -------------------------------

// (ES5버전)
// const my4 = require('./MyModule4');
// my4.say();

//(ES6버전)
import my4 from './MyModule4.js';
my4.say();
