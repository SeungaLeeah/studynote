import express from 'express';
import nodemailer from 'nodemailer'; 
import regexHelper from '../helper/RegexHelper.js';

export default () => {

const router = express.Router();

router.post('/send_mail', async (req, res, next) => {
    const writer_name = req.post('writer_name');
    let writer_email = req.post('writer_email');
    const receiver_name = req.post('receiver_name');
    let receiver_email = req.post('receiver_email');
    const subject = req.post('subject');
    const content = req.post('content');

    try{
        regexHelper.value(writer_email,'발신자 메일주소를 입력하세요.');
        regexHelper.email(writer_email,'발신자 메일주소가 잘못되었습니다.');

        regexHelper.value(receiver_email,'수신자 메일주소를 입력하세요.');
        regexHelper.email(receiver_email,'수신자 메일주소가 잘못되었습니다.');

        regexHelper.value(subject,'메일 제목을 입력하세요.');
        regexHelper.value(content,'본문 내용을 입력하세요.')
    }catch(e){
        return next(e);
    }

    if (writer_name) {
        writer_email = writer_name + ' <' + writer_email + '>';
    }

   
    if (receiver_name) {
        receiver_email = receiver_name + ' <' + receiver_email + '>';
    }

    const send_info = { 
        from: writer_email, 
        to: receiver_email, 
        subject: subject, 
        html: content 
    };

    const smtp = nodemailer.createTransport({
        host: process.env.SMTP_HOST,      
        port: process.env.SMTP_PORT,         
        secure: true,                        
        auth: { 
            user: process.env.SMTP_USERNAME, 
            pass: process.env.SMTP_PASSWORD, 
        }
    });

    /** 5) 메일발송 요청 */
    try {
        await smtp.sendMail(send_info);
    } catch (err) {
        return next(err)
    }
    
    res.sendResult();
});

return router;
};