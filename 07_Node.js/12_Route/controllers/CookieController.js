import logger from '../helper/LogHelper.js';
import express from 'express';

export default () => {
    const router = express.Router();
    router
        .post('/cookie', (req, res, next) => {
            const msg = req.body.msg;

            res.cookie('my_msg', msg, {
                maxAge: 30*1000,
                path: '/'
            });

            res.cookie('my_msg_signed', msg, {
                maxAge: 30*1000,
                path: '/',
                signed: true
            });
            
            res.status(200).send('ok');
        })
        .get('/cookie', (req, res, next) => {
            for (let key in req.cookies) {
                const str = '[cookies] ' + key + '=' + req.cookies[key];
                logger.debug(str);
            }

            for (let key in req.signedCookies) {
                const str = '[signedCookies] ' + key + '=' + req.signedCookies[key];
                logger.debug(str);
            }

            const my_msg = req.cookies.my_msg;
            const my_msg_signed = req.signedCookies.my_msg_signed;

            const result_data = {
                my_msg: my_msg,
                my_msg_signed: my_msg_signed,
            };

            res.status(200).send(result_data);
        })
        .delete('/cookie', (req, res, next) => {
            res.clearCookie('my_msg', { path: '/' });
            res.clearCookie('my_msg_signed', { path: '/' });
            res.status(200).send('clear');
        });

return router;
};