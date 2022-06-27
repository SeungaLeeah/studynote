/** (1) 모듈참조 */
import axios from "axios";

/** (2) 접속할 서버의 호스트 이름과 요청정보(path) 설정 */
const url = 'http://itpaper.co.kr/data/simple_text.txt';

/** (3) async/await 방식을 즉시 실행 함수 형태로 정의 */
axios
    .get(url)
    //성공했을 때 then
    .then(function (response){
        // 지정된 url의 컨텐츠를 성공적으로 가져온 경우 호출된다.
        // --> 응답을 성공적으로 수신했다고 표현함.
        console.log('Promise방식 - ' + response.data);
    })
    // 에러났을 때 catch
    .catch(function(error){
        //지정된 usl로의 요청에 실패한 경우 호출된다.
        // 에러 내용에서 상태코드(숫자)와 에러 메세지만 추출
        // [HTTP 상태코드] 200(OK), 404(Page Not Found), 401(권한없음, 로그인 필요), 403(접근금지, 폴더에 접속한 경우)
        //                50x(접속 대상에서 에러가 나고 있는 경우)
        const errorMsg = '['+error.response.status + ']' + error.response.statusText;
        console.log('Promise방식 - ' + errorMsg);
    })
    // 성공, 실패 여부와 상관없이 finally
    .finally(function (){
        //필요없다면 이 부분은 구현하지 않아도 된다.
        console.log('Promise방식 - fin:)');
    });

console.log('promise 방식으로 HTTP 요청');