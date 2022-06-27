/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
var target = './docs';    

if(!fs.existsSync(target)){
    (async () =>{
        try{
            await fs.promises.mkdir(target);
            await fs.promises.chmod(target, '0777');    //퍼미션 설정
            console.debug("디렉토리 생성 완료");
        }catch(e){
            console.error("디렉토리 생성 에러");
            console.error(e);
        }
    })();
    console.log('%s 폴더의 생성을 요청했습니다.', target);
}else{
    (async()=>{
      try {
        await fs.promises.rmdir(target);
        console.debug("디렉토리 삭제완료");
      }catch(e){
        console.error("디렉토리 삭제에러");
        console.error(e);
      }
    })();
    console.log('%s폴더의 삭제를 요청했습니다.', target);
}
