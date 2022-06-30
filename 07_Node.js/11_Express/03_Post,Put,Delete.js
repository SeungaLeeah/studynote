/*----------------------------------------------------------
| 1) 모듈참조
-----------------------------------------------------------*/
/** 직접 구현한 모듈 */
import logger from './helper/LogHelper.js';
import {myip, urlFormat} from './helper/UtilHelper.js';
/** 내장모듈 */
import url from 'url';
import path from 'path';
/** 설치가 필요한 모듈 */
import dotenv from 'dotenv';
import express from 'express'; //Express본체
import useragent  from 'express-useragent';     // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static';     //특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';   //favicon 처리
import bodyParser from 'body-parser';   //POST 파라미터 처리
import methodOverride from 'method-override';  //PUT 파라미터 처리

/*----------------------------------------------------------
| 2) Express 객체 생성
-----------------------------------------------------------*/
// 여기서 생성한 app 객체의 use() 함수를 사용해서
// 각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.
const app = express();

// 프로젝트 폴더 위치
const __dirname = path.resolve();

// 설정 파일 내용 가져오기
dotenv.config({path: path.join(__dirname,"../config.env")});

/*----------------------------------------------------------
| 3) 클라이언트의 접속시 초기화
-----------------------------------------------------------*/
/** app 객체에 UserAgent 모듈을 탑재 */
// --> Express객체(app)에 추가되는 확장 기능들을  Express에서는 미들웨어라고 부른다.
// --> UserAgent 모듈은 초기화 콜백함수에 전달되는 req, res객체를 확장하기 때문에 다른 모듈보다 먼저 설정되어야 하낟.
app.use(useragent.express());
// 클라이언트의 접속을 감지
app.use((req, res, next)=>{
    logger.debug('클라이언트가 접속했습니다.');

    // 클라이언트가 접속한 시간
    const beginTime = Date.now();
    
    //클라이언트의 IP주소 (출처: 스택오버플로우)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    
    // 클라이언트의 디바이스 정보 기록(UserAgent 사용) => ${req.useragent.os}는 모바일
    logger.debug(`[client] ${ip} / ${req.useragent.os}/ ${req.useragent.browser} (${req.useragent.version})/ ${req.useragent.platform}`);

    // 클라이언드가 요청한 페이지 URL
    // 콜백함수에 전달되는 req 파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
    const current_url = urlFormat({
        protocol: req.protocol, //ex) http://
        host: req.get('host'), // ex) 172.16.141.1
        port: req.port, //ex) 3000
        pathname: req.originalUrl, // ex) /page1.html
    });
    logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

    //클라이언트의 접속이 종료된 경우의 이벤트 --> 모든 응답의 전송이 완료된 경우
    res.on('finish', ()=>{
        //접속 종료시간
        const endTime = Date.now();

        // 이번 접속에서 클라이언트가 머문 시간 = 백엔드가 실해하는데 걸린 시간
        const time = endTime - beginTime;
        logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
        logger.debug('----------------------------------------------------');
    });

    // 이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
    next();
});

/*----------------------------------------------------------
| 4) Express 객체의 추가 설정
-----------------------------------------------------------*/
/** POST파라미터 수신 모듈 설정. 추가되는 미들웨어 중 가장 먼저 설정해야 함 */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: true --> 지속적 사용.
// extended: false --> 한번만 사용.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text()); // TEXT 형식의 파라미터 수신 가능.
app.use(bodyParser.json()); // JSON 형식의 파라미터 수신 가능.

/** HTTP PUT, DELETE 전송 방식 확장 */
// PUT,DELETE 방식은 결국 POST 방식과 동일하다
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(methodOverride('X-HTTP-Method'));  // Microsoft
app.use(methodOverride('X-HTTP-Method-Override'));  // Google/GData
app.use(methodOverride('X-Method-Override'));  //IBM
//HTML 폼에서 PUT, DELETE로 전송할 경우 post 방식을 사용하되, action 주소에 "?_method"라고 추가.
app.use(methodOverride('_method'));  // HTML form

/** HTTP,CSS,IMG,JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http:// 아이피(혹은 도메인): 포트번호" 이후의 결고가 router에 등록되지 않은 경로라면 
// static 모듈에 연결된 폴더 안에서 해달 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();
// 라우터를 express에 등록
app.use('/', router);

/*----------------------------------------------------------
| 5) 각 URL별 백엔드 기능 정의
-----------------------------------------------------------*/
/** 01_setup.js */
// ... 생략 ...

/** 02_GetParams.js */
// ... 생략 ...

/** 03-Post, Put, Delete.js */
/** POST 파라미터를 처리하기 위한 라우터 등록 */
router.post('/send_post', (req, res, next)=>{
    //URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 POST 파라미터]');
    for (let key in req.body){
        const str ='\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }
    const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>남의 이메일 주소는 <span style='color:#ff6600'>"+ req.body.email +'</span>입니다</h1>'
    
    res.status(200).send(html);

});

/** PUT 파라미터를 처리하기 위한 라우터 등록 */
router.put('/send_put', (req, res, next)=>{
    //URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 PUT 파라미터]');
    for (let key in req.body){
        const str ='\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }
    const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>남의 이메일 주소는 <span style='color:#ff6600'>"+ req.body.email +'</span>입니다</h1>'
    
    res.status(200).send(html);

});
/** DELETE 파라미터를 처리하기 위한 라우터 등록 */
router.delete('/send_delete', (req, res, next)=>{
    //URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
    logger.debug('[프론트엔드로부터 전달받은 DELETE 파라미터]');
    for (let key in req.body){
        const str ='\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }
    const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>남의 이메일 주소는 <span style='color:#ff6600'>"+ req.body.email +'</span>입니다</h1>'
    
    res.status(200).send(html);

});

/** 상품에 대한 Restful API 정의하기 */
// 위의 형태처럼 개별적인 함수로 구현이 가능하지만 대부분 하나의 URL에서 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현
router
    .get('/product/:productNumber', (req,res,next)=>{
        //URL Params 형식으로 조회할 상품의 일련번호흘 전달받아야 한다.
        const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>번 상품<span style='color:#ff6600'>조회"+ req.body.email +'</span>하기/h1>'
        res.status(200).send(html);
    })
    .post('/product', (req, res, next)=>{
       //<form> 상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
       // 저장시에는 일련 번호는 전송하지 않으며 저장 후 자동으로 발급되는 일련번호를 프론트에게 돌려줘야 한다.
        const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>상품 <span style='color:#ff6600'>등록"+ req.body.email +'</span>하기</h1>'       
        res.status(200).send(html);
    
    })
    .put('/product/:productNumber', (req, res, next)=>{
        //<form> 상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
        // 몇번 상풍을 수정할지 식별하기 위해 상품 일련번호가 함께 전송된다.
         const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>상품 <span style='color:#ff6600'>수정"+ req.body.email +'</span>하기</h1>'
         res.status(200).send(html);
     
     })
     .delete('/product/:productNumber', (req, res, next)=>{
        //삭제할 상품의 일련번호 전송
         const html= "<h1><span style='color:#0066ff'>"+ req.body.username + "</span>상품 <span style='color:#ff6600'>삭제"+ req.body.email +'</span>하기</h1>'
         res.status(200).send(html);
     
     });

