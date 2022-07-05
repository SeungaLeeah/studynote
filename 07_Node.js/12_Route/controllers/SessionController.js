import logger from '../helper/LogHelper.js';
import express from 'express';

export default () => {

    const router = express.Router();

    router
        .post('/session', (req, res, next) => {
            const username = req.body.username;
            const nickname = req.body.nickname;

            req.session.username = username;
            req.session.nickname = nickname;

            const json = { rt: 'ok' };
            res.status(200).send(json);
        })
        .get('/session', (req, res, next) => {
            for (let key in req.session) {
                const str = '[session] ' + key + '=' + req.session[key];
                logger.debug(str);
            }

            const my_data = {
                username: req.session.username,
                nickname: req.session.nickname,
            };

            res.status(200).send(my_data);
        })
        .delete('/session', async (req, res, next) => {
            let result = 'ok';
            let code = 200;

            try {
                await req.session.destroy();
            } catch (e) {
                logger.error(e.message);
                result = e.message;
                code = 500;
            }

            const json = { rt: result };
            res.status(code).send(json);
        });

        
        router
        .post('/session/login', (req, res, next) => {
        const id = req.body.userid;
        const pw = req.body.userpw;

        logger.debug('id=' + id);
        logger.debug('pw=' + pw);

        let login_ok = false;
        if (id == 'node' && pw == '1234') {
            logger.debug('로그인 성공');
            login_ok = true;
        }

        let result_code = null;
        let result_msg = null;

        if (login_ok) {
            req.session.userid = id;
            req.session.userpw = pw;
            result_code = 200;
            result_msg = 'ok';
        } else {
            result_code = 403;
            result_msg = 'fail';
        }

        const json = { rt: result_msg };
        res.status(result_code).send(json);
        })
        .delete('/session/login', async (req, res, next) => {
        let result = 'ok';
        let code = 200;

        try {
            await req.session.destroy();
        } catch (e) {
            logger.error(e.message);
            result = e.message;
            code = 500;
        }

        const json = { rt: result };
        res.status(code).send(json);
        })
        .get('/session/login', (req, res, next) => {
        const id = req.session.userid;
        const pw = req.session.userpw;

        let result_code = null;
        let result_msg = null;

        if (id !== undefined && pw !== undefined) {
            logger.debug('현재 로그인중이 맞습니다.');
            result_code = 200;
            result_msg = 'ok';
        } else {
            logger.debug('현재 로그인중이 아닙니다.');
            result_code = 400;
            result_msg = 'fail';
        }

        const json = { rt: result_msg };
        res.status(result_code).send(json);
    });
return router;
};