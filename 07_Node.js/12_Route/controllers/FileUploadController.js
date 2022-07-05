import logger from '../helper/LogHelper.js';
import express from 'express';
import { initMulter, checkUploadError, createThumbnail, createThumbnailMultiple } from '../helper/FileHelper.js';

export default () => {


const router = express.Router();

router.route('/upload/single').post((req, res, next) => {
    const upload = initMulter().single('myphoto');

    upload(req, res, (err) => {
        console.group('request');
        console.debug(req.file);
        console.groupEnd();

        let {result_code, result_msg} = checkUploadError(err);

        if (result_code == 200) {
            try {
                createThumbnail(req.file);
            } catch (error) {
                console.error(error);
                result_code = 500;
                result_msg = '썸네일 이미지 생성에 실패했습니다.';
            }
        }
 
        const result = {
            rt: result_code,
            rtmsg: result_msg,
            item: req.file,
        };

        res.status(result_code).send(result);
    });
});

router.route('/upload/multiple').post((req, res, next) => {
    req.file = [];

    const upload = initMulter().array('myphoto');

    upload(req, res, (err) => {
        console.group('request');
        console.debug(req.file);
        console.groupEnd();

        let {result_code, result_msg} = checkUploadError(err);

        if (result_code == 200) {
            try {
                createThumbnailMultiple(req.file);
            } catch (error) {
                console.error(error);
                result_code = 500;
                result_msg = '썸네일 이미지 생성에 실패했습니다.';
            }
        }
 
        const result = {
            rt: result_code,
            rtmsg: result_msg,
            item: req.file,
        };

        res.status(result_code).send(result);
    });
});

return router;
};