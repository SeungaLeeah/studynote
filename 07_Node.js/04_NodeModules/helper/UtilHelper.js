/**
 * @FileName: UtilHelper.js
 * @Description: 백엔드 개발시 자주 사용되는 독립 함수들 모음
 * @Author: 이승아
 */

import {networkInterfaces} from 'os';

const myip = () =>{
    const ipAddress = [];

    // nets 함수가 networkInterfaces 호출해서 반복문 실행
    const nets = networkInterfaces();

    for(const attr in nets){
        const item = nets[attr];

        item.map((v,i)=>{
            //if (v.family == 'IPv4' && v.address != '127.0.0.1') {
            // 가상주소가 아니고 나 스스로를 가르키는 주소가 아니라고 하면 외부에서 접속할 수 있는 주소.
            // 그걸 배열에 push해서 리턴을 한다.
            if (v.family == 'IPv4' && v.address != '127.0.0.1') {
                ipAddress.push(v.address);
            }
        });
    }
    return ipAddress;
};

// 가상의 인터넷 주소 형태를 갖춘 URL 주소 형태를 만들고(new URL("http://a.com"))
// 파라미터로 전달된 urlObject을 같이 묶어서 (Object.assign(new URL("http://a.com"), urlObject))으로 돌리고,
// String으로 반환하면 조립해서 리턴해주는 함수이다.
const urlFormat = (urlObject) => String(Object.assign(new URL("http://a.com"), urlObject));

export {myip, urlFormat};