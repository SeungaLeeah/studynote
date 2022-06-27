import {mkdirs} from './helper/FileHelper.js';
import path from 'path';

// 상대경로 방식으로 폴더 생성하기
// --> VSCode가 열고 있는 프로젝트 폴더 기준
var target1 = './test/dir/make';
console.log(target1);
mkdirs(target1);

//절대경로 방식으로 폴더 생성하기
// __dirname --> VSCode가 열고 있는 프로젝트 폴더
const __dirname = path.resolve();  
console.log(__dirname)               // 현재 실행중인 폴더의 위치를 알려줌
var target2 = path.join(__dirname, 'hello/node/js');
console.log(target2);
mkdirs(target2);