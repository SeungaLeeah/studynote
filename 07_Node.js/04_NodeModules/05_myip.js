import {myip} from './helper/UtilHelper.js';
const ip = myip();
// UtilHelper의 함수를 통해, 현재 내 시스템의 주소를 배열로 담아서 리턴함
// 리턴받은 ip를 통해 백엔드가 구현할 수 있게 코드를 작성해주면 됨
console.debug(ip);