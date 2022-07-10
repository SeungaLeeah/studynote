import logger from '../helper/LogHelper.js';
import express from 'express';
import { initMulter, checkUploadError, createThumbnail, createThumbnailMultiple } from '../helper/FileHelper.js';
import MultipartException from '../exceptions/MultipartException.js';

export default () => {
const router = express.Router();

router.route('/upload/single').post((req, res, next) => {
    const upload = initMulter().single('myphoto');

    upload(req, res, (err) => {
        if (err) {
            return next(new MultipartException(err));
        }
 
        try{
            createThumbnail(req.file);
        }catch(error){
            return next(error);
        }
        
        res.sendResult(req.file);
    });
});

router.route('/upload/multiple').post((req, res, next) => {
    req.file = [];

    const upload = initMulter().array('myphoto');

    upload(req, res, (err) => {
       if(err){
        return next(new MultipartException(err));
       }

       try{
        createThumbnailMultiple(req.file);
       }catch(error){
        return next(error);
       }

        res.sendResult(req.file);
    });
});

return router;
};