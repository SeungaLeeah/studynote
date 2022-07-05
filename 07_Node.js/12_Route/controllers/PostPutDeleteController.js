import logger from '../helper/LogHelper.js';
import express from 'express';

export default () => {

const router = express.Router();

router.post('/send_post', (req, res, next) => {
    logger.debug('[프론트엔드로부터 전달받은 POST 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 이메일 주소는 <span style='color:#ff6600'>" + req.body.email + '</span> 입니다.</h1>';

    res.status(200).send(html);
});

router.put('/send_put', (req, res, next) => {
    logger.debug('[프론트엔드로부터 전달받은 PUT 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님은 <span style='color:#ff6600'>" + req.body.grade + '</span>학년 입니다.</h1>';

    res.status(200).send(html);
});

router.delete('/send_delete', (req, res, next) => {
    logger.debug('[프론트엔드로부터 전달받은 DELETE 파라미터]');
    for (let key in req.body) {
        const str = '\t >> ' + key + '=' + req.body[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 점수는 <span style='color:#ff6600'>" + req.body.point + '</span>점 입니다.</h1>';

    res.status(200).send(html);
});

router
    .get('/product/:productNumber', (req, res, next) => {
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'>조회</span>하기</h1>";
        res.status(200).send(html);
    })
    .post('/product', (req, res, next) => {
        const html = "<h1><span style='color:#0066ff'>" + req.body.productNumber + "</span> 상품 <span style='color:#ff6600'>등록</span>하기</h1>";
        res.status(200).send(html);
    })
    .put('/product/:productNumber', (req, res, next) => {
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span> 상품 <span style='color:#ff6600'>수정</span>하기</h1>";
        res.status(200).send(html);
    })
    .delete('/product/:productNumber', (req, res, next) => {
        const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span> 상품 <span style='color:#ff6600'>삭제</span>하기</h1>";
        res.status(200).send(html);
    });
return router;
};