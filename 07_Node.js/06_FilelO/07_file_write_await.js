/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
const target = './output_await.txt' // 저장할 파일의 경로()
const content = 'Hello World'; // 저장할 내용
const isExists = fs.existsSync(target); //파일의 존재 여부 검사 --> true나 false을 검사


/** (3) 파일이 존재할 경우에 파일 삭제 */
if(!isExists){
    (async()=>{  //async- await는 그 함수 안에서만 실행이 됨
        try{
            //성공시에 아무런 결과도 반환하지 않으므로 리턴받지 않음.
            await fs.promises.writeFile(target, content);
            console.debug("저장완료");
        }catch (err){
            console.error("에러 발생");
            console.error(err);
        }
    })(); //() 호출 함수

    console.log(target + '의 파일 저장을 요청했습니다.');
}else{
    (async() => {
        try{
            await fs.promises.unlink(target);
            console.debug("삭제완료");
        }catch(err){
            console.error("에러발생");
            console.error(err);
        }
    })();
    console.log(target + '의 파일 삭제를 요청했습니다.');
}
