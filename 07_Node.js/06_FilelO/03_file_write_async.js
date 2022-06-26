/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
const target = './output_async.txt' // 저장할 파일의 경로()
const content = 'Hello World'; // 저장할 내용
const isExists = fs.existsSync(target); //파일의 존재 여부 검사

/** (3) 파일을 비동기식으로 파일 쓰기, 삭제 */
if(!isExists){
    // 절대경로 지정, 비동기식 파일 저장을 요청 --> 저장이 완료되면 콜백함수로 보내준다.
    fs.writeFile(target, content, 'utf8', (err)=>{  // 1. 경로문제, 2. 용량문제가 생기면 에러가 뱔생하고, 중단.
        if(err){
            console.error(err);
            return;
        }
        console.debug(target + '에 데이터 쓰기 완료'); //에러가 없을 때 실행됨

        // 퍼미션 설정
        fs.chmod(target, '0766', (err)=>{            // 파일을 저장한 다음에 그 파일에 대한 권한을 설정해야함 
            if(err){                                 // --> 비동기 처리에 대한 후속처리가 필요하다면 후속 안에서 콜백처리를 해야함 => 콜백hell이 생김
                console.error(err);
                return;
            }
            console.debug(target + '의 퍼미션 설정 완료');
        });
        console.debug(target + '의 퍼미션 설정을 요청했습니다.');
    });
    console.debug(target + '의 파일 저장을 요청했습니다.'); // 제일 먼저 실행이 됨
}else{
    fs.unlink(target, (err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.debug(target + '의 파일 삭제 완료');
    });
    console.debug(target + '의 파일 삭제를 요청했습니다.')
}

// *실행 순서
// 1) 요청을 먼저하고, 2)결과가 떨어지고, 3)응답을 실행함