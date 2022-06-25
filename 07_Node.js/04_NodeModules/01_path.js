/** (1) 모듈참조  */
/** ES5 스타일 모듈 참조 */
//require('path') 기능을 const path로 가져온다.
// const path = require('path');
/** ES6 스타일 모듈 참조 */
// --> 'path'라는 모듈의 모든 기능을 import path 객체에 부여
// 'path'라는 모듈에 있는 기능을 path 라는 이름으로 가져와라.
import path from 'path';

/** (2) 경로 합치기 */
// 파라미터의 제한이 없다. 
// 조합된 경로 문자열에 해당하는 Path가 실제로 존재하는지는 상관 없다.
const currentPath = path.join('C:/Users/hello/world', 'myphoto', '../photo.jpg');
console.group("path.join");
console.debug(currentPath);
console.groupEnd();

/** (3) 경로에서 디렉토리, 파일명, 확장자 구분하기 */
// --> C:/Users/hello/world/photo.jpg
const dirname = path.dirname(currentPath);
// C:/Users/hello/world 을 잘라서 dirname으로 반환

const basename = path.basename(currentPath);
// photo.jpg 를 잘라서 basename으로 반환

const extname = path.extname(currentPath);
// .jpg 를 잘라서 extname으로 반환

console.group("경로 분할하기");
console.debug('디렉토리 : %s', dirname);
console.debug('파일 이름 : %s', basename);
console.debug('확장자 : %s', extname);
console.groupEnd();

/** (4) 경로정보 파싱 */
// 경로의 성분을 JSON형태로 한번에 분할
// --> C:/Users/hello/world/photo.jpg 을 (currentPath)파라미터로 주면,
// 경로를 조각 내서 리턴되는 객체에 JSON형태로 넣어준다.
const parse = path.parse(currentPath);
console.group("경로정보 파싱");
console.debug("%o", parse);
console.debug("root: " + parse.root);
console.debug("dir: " + parse.dir);
console.debug("name: " + parse.name);
console.debug("ext: " + parse.ext);
console.groupEnd();