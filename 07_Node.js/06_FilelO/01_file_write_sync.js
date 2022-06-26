/** (1) 모듈 참조 */
// fs --> FileSystem을 줄여서 부르는 말(파일 읽기, 쓰기)
// 읽기--> 내용을 변수에 저장, 쓰기 --> 변수가 갖고 있는 내용을 외부 파일로 저장
import fs from 'fs';

/** (2) 필요한 변수 생성 */
const target = './output_sync.txt'; // 저장할(생성할) 파일의 경로()
const content = "Hello World\nNice World";      // 저장할 내용 -->파일에 줄바꿈을 넣고 싶으면 \n 작성
const isExists = fs.existsSync(target); // 파일의 존재 여부 검사 --> 파일이 실제로 존재하면 TRUE, 존재하지 않으며 FALSE를 리턴

if(!isExists){
    /** (3) 파일이 존재하지 않을 경우 새로 저장 */
    // 저장할 경로는 상대, 절대 경로 모두 가능
    // 상대 경로인 경우 vscode에 설정된 작업 디렉토리가 기준
    // 절대 경로인 경우 컴퓨터 전역에 대해서 지정 가능 -> ex) c:/hello/world, c:\\hello\\world
    // 여기서는 상대경로 지정, 뒤에 Sync가 붙어있는 파일은 동기식 파일 저장.
    // 동기식이란? 파일 순서대로 실행.
    // 이 파일을 다 저장하기 전까지는 프로그램이 대기상태임.
    // 그러므로 대용량 처리에는 적합하지 않음
    fs.writeFileSync(target, content, 'utf8');
    //(경로, 내용, 인코딩)

    // 퍼미션 설정 --> 파일에 대한 접근 권한 설정 (permission denied 퍼미션 권한이 없음 error)
    //접근권한을 설정하지 않으면 내가 생성한 파일을 지우거나, 읽지 못함(폴더에서 열지 못함)
    //0766 rwx 숫자를 의미--> 0:파일,1:폴더, 7(소유자)모든 권한을 다 줌, 6(소유그룹)rw 권한 부여, 6(기타사용자)rw권한 부여
    fs.chmodSync(target,'0766');

    // 파일 저장이 완료된 후에나 메세지가 표시된다.
    console.log(target + '파일에 데이터 쓰기 및 퍼미션 설정 완료');
} else {
    /** (4) 파일이 존재할 경우 파일 삭제 */
    fs.unlinkSync(target)
    console.log(target + '파일 삭제 완료.');
}