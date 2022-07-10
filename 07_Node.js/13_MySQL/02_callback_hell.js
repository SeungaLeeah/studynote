import {join, resolve} from 'path';
import dotenv from 'dotenv';
import mysql from  'mysql2';
import config from '../'

// 설정 파일 내용 가져오기 --> resolve는 현재 NODE가 열고 있는 폴더 위치
dotenv.config({path: join(resolve(), "../config.env")});

// 접속 정보 설정
const connectionInfo = {
    host: process.env.DATABASE_HOST,       // MYSQL 서버주소(다른 PC인 경우 IP주소)
    port: process.env.DATABASE_PORT,        // MYSQL 포트번호
    user: process.env.DATABASE_USERNAME,    // MYSQL의 로그인 할 수 있는 계정이름
    password: process.env.DATABASE_PASSWORD, // 비밀번호
    database: process.env.DATABASE_SCHEMA,  // 사용하고자 하는 데이터베이스 이름
};

console.info(connectionInfo);

/** (2) mysql 접속 객체 생성 --> createConnection을 통해서 접속객체를 줌 */
// mysql은 모든 처리가 비동기이기 때문에 접속이 되었다는 
// 결과를 받은 콜백함수 안에서 이후 처리가 들어가야함
const dbcon = mysql.createConnection(connectionInfo);

/** (3) 데이터베이스 접속 */
dbcon.connect((error)=>{
    if(error){
        console.error("데이터베이스 접속에 실패했습니다.");
        console.error(error);   
        return;
    }

    const targetDeptno = 101;

    /** (4) INSERT,UPDATE DELETE 쿼리 생성하기 */
    // 1) 교수를 참조하는 학생 데이터 지우기
    dbcon.query("DELETE FROM student WHERE deptno=?", [targetDeptno], (error, result)=>{
        if(error){
            console.log('SQL문 실행에 실패했습니다.');
            console.log(error);
            dbcon.end();
            return;
        }

        
    // 2) 학과를 참조하는 교수 데이터 지우기 --> 학생을 지우고 지워야 함으로 콜백안에 콜백
    dbcon.query( "DELETE FROM professor WHERE deptno=?", [targetDeptno],(error, result)=>{
        if(error){
            console.log('SQL문 실행에 실패했습니다.');
            console.log(error);
            dbcon.end();
            return;
        }
    // 3) 교수를 지우고 지워야 함으로 콜백 안에 콜백으로 들어감
    dbcon.query( "DELETE FROM department WHERE deptno=?", [targetDeptno],(error, result)=>{
        if(error){
            console.log('SQL문 실행에 실패했습니다.');
            console.log(error);
            dbcon.end();
            return;
        }
        //저장 결과 확인
        console.log('반영된 데이터 수:' + result.affectedRows);
        //UPDATE, DELETE 쿼리의 경우 사용할 수 없는 값임
        dbcon.end();
        });
        });
    });
});

