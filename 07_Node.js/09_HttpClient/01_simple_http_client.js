/** (1) 모듈참조 */
import http from "http";

/** (2) 접속할 서버의 호스트 이름과 요청정보(path) 설정 */
const url = 'http://itpaper.co.kr/data/simple_text.txt';

/** (3) async/await 방식을 즉시 실행 함수 형태로 정의 */
var req = http.get(url, function(res){
    //응답이 수신되는 경우 (수신 데이터의 용량에 따라서 여러번 호출될 수 있다.)
    var resData = '';
    //data는 앞부분을 가져오기 위함이기에 빈 변수에 가져온 내용을 덧붙여준다.(여러번 실행이 됨)
    res.on('data', function(chunk){
        resData += chunk;
    });

    //응답수신이 종료된 경우 (읽은 데이터를 처리한다.)
    //end는 뒷부분의 조각을 의미함으로 data에 뒤에 덧붙여주고 출력해준다.(마지막 한번만 실행이 됨)
    res.on('end', function(){
        console.debug(resData);
    });
});

/** (4) 접속객체에 error 이벤트 리스너 설정 */
req.on ('error', function(err){
    console.error(err);
    console.error('에러발생 : ' + err.message);
});