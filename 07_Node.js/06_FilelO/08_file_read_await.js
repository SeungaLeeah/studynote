/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
var target ='./output_await.txt'  //읽어들일 파일의 경로

/** (3) 파일이 존재할 경우에 파일 삭제 */
if(fs.existsSync(target)){
    (async()=>{
        let data = null;

        try{
            data = await fs.promises.readFile(target, 'utf8');  //read 파일은 읽은 여부를 리턴 받아야 한다. --> 에러를 제외한 파라미터
            console.debug('파일읽기 완료');
        }catch{
            console.error(err);
            console.error('파일읽기 실패');
        }

        console.debug(data);// 파일이 없다면 null이 출력됨
    })();
    console.log(target + '파일을 읽도록 요청했습니다.');
}else{
    console.log(target + '파일이 존재하지 않습니다.');
}