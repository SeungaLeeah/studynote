/** (1) url모듈 내에서 URL 클래스만 참조하기 */
//'url'이라는 패키지에 들어있는 {URL} 이름의 클래스
import {URL} from 'url';

/** (2) 주소 문자열을 URL 객체로 만들기 */
const myurl = 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';

// URL의 각 성분을 분해 --> javascript의 location 객체와 동일한 기능
// URL 문자열을 파라미터를 통해 객체를 만듦
const location = new URL(myurl);

console.group("URL 성분 정보 확인");
console.debug(location);
console.debug('href: ' + location.href);
console.debug('protocol: ' + location.protocol); // 통신 방식(http:, https:)
console.debug('host: ' + location.host);         // 사이트 주소
console.debug('hostname: ' + location.hostname); // 사이트 주소에서 포트번호를 제외한 값
console.debug('port: ' + location.port);         // 통신방식 + 사이트주소 + 포트번호
console.debug('origin: ' + location.origin);     // 포트번호
console.debug('pathname: ' + location.pathname); // 사이트 주소에서 변수 영역 제외한 값
console.debug('search: ' + location.search);     // "?"를 포함한 변수 영역
console.debug('hash: ' + location.hash);         // "#"과 함께 표시되는 마지막 값
console.groupEnd();