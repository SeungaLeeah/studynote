/**
 * @FileName : FileHelper.js
 * @Description : 파일, 폴더 처리 관련 유틸리티 함수 구현
 * @Author : 이승아(leeah0913@gmail.com) 
 */

import fs from 'fs';
import { join, extname } from 'path';
import multer from 'multer';    // 업로드 모듈
import thumbnail from 'node-thumbnail'  // 썸네일 이미지 생성 모듈

const mkdirs = (target, permission='0755')=>{       // 파라미터가 없으면 0755를 기본 값으로 설정
    // 경로가 없다면 수행하지 않는다.
    if (target == undefined || target == null) {return}

    // 윈도우의 경우 '\'를 '/'로 변환.
    target = target.replace(/\\/gi, "/");   // window는 이걸 사용
    // node.js 17버전 이상 가능.
    // --> target = "a/b/c"
    // target =target.replace("\\", "/");   //mac은 17버전 이상일 경우 이걸 사용

    // 주어진 경로값을 "/" 단위로 자른다.
    // --> target_list = ["a", "b", "c"]
    const target_list = target.split("/");

    // 한 단계씩 생성되는 폴더 깊이를 누적할 변수
    let dir = '';

    //주어진 경로가 절대경로 형식이라면 경로를 누적할 변수를 "/"부터 시작한다.
    if(target.substring(0,1) == "/"){
        dir = "/";
    }
    // 윈도우의 경우 하드디스크 문자열을 구분하기 위해 ":"이 포함 되어있다.
    if(target_list[0].indexOf(":")> -1){
        target_list[0] += "/"
    }
    // 잘라낸 배열만큼 순환하면서 디렉토리를 생성
    target_list.map((v,i)=>{
        dir = join(dir, v);
        // 현재 폴더를 의미한다면 이번 턴은 중단
        if (v == "."){
            return;
        }

        // console.debug(dir);
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            fs.chmodSync(dir, permission);
        }
    });
};

const initMulter = () =>{
    /** multer 객체 생성 --> 파일 제한 : 5개, 20M */
    const multipart = multer({
        /**저장될 디렉토리 경로 및 파일 이름 */
        storage: multer.diskStorage({
            /** 업로드 된 파일이 저장될 디렉토리 설정 */
            //req는 요청 정보, file은 최종적으로 업로드된 결과 데이터가 저장되어 있을 객체
            destination: (req, file, callback)=>{
                /**
                 * file 파라미터는 앞 과정을 통해 정보가 확장된 상태
                 * 
                 * file ={
                 * filedname: 'myphoto',
                 * originalname: '원본파일명.jpg',
                 * encoding: '7bit',
                 * mimetype: 'image/jpeg',
                 * upload_dir: '업로드 된 파일이 저장될 경로',
                 * thumb_dir: '썸네일 이미지가 생성될 경로'
                 * }
                 */
                console.group('filename');
                console.debug(file);
                console.groupEnd();

                console.error(parseInt(eval(process.env.UPLOAD_MAX_SIZE)));
                
                // 파일의 원본 이름에서 확장자만 추출 --> ex) .png
                const extName = extname(file.originalname).toLowerCase();
                // 파일이 저장될 이름 (현재 시각의 timestamp + 확장자)
                const saveName = new Date().getTime().toString() + extName;
                
                //업로드 정보에 백엔드에 업로드 되어 저장된 파일 이름을 추가한다.
                file.savename = saveName;
                //업로드된 파일이 저장된 최종 경로를 추가한다.
                file.path = join(file.upload_dir, saveName);
                // 업로드 된 정보에 파일이 접근할 수 있는 URL 값 추가
                file.url = join(process.env.UPLOAD_URL, saveName).replace(/\\/gi,'/');
                // 구성된 최종 업로드 정보를 클라이언트에게 응답결과로 돌려주기 위해 req 객체에 추가
                req.file = file;

                // 다음 단계로 백엔드 상에 저장할 파일 이름을 전달
                callback(null, saveName);
            }
        });
        /** 용량, 최대 업로드 파일 수 제한 */
        limits:{
            
        }
    })
}

export {mkdirs, initMulter, checkUploadError}