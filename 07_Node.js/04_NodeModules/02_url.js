/** (1) url모듈 내에서 URL 클래스만 참조하기 */
import {URL} from 'url';

/** (2) 주소 문자열을 URL 객체로 만들기 */
const myurl = 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';

// URL의 각 성분을 분해 --> javascript의 location 객체와 동일한 기능
const location = new URL(myurl);