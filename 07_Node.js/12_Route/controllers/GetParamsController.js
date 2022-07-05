import logger from '../helper/LogHelper.js';
import express from 'express';

export default () => {

const router = express.Router();

router.get('/send_get', (req, res, next) => {
    logger.debug('[프론트엔드로부터 전달받은 GET 파라미터]');
    for (let key in req.query) {
        const str = '\t >> ' + key + '=' + req.query[key];
        logger.debug(str);
    }

    const answer = req.query.answer;
    let html = null;

    if (parseInt(answer) == 300) {
        html = "<h1 style='color:#0066ff'>정답입니다.</h1>";
    } else {
        html = "<h1 style='color:#ff6600'>틀렸습니다.</h1>";
    }

    res.status(200).send(html);
});

// 직접 URL로 테스트
router.get('/send_url/:username/:age', (req, res, next) => {
    logger.debug('[프론트엔드로부터 전달받은 URL 파라미터]');
    for (let key in req.params) {
        const str = '\t >> ' + key + '=' + req.params[key];
        logger.debug(str);
    }

    const html = "<h1><span style='color:#0066ff'>" + req.params.username + "</span>님은 <span style='color:#ff6600'>" + req.params.age + '</span>세 입니다.</h1>';

    res.status(200).send(html);
});
return router;
};