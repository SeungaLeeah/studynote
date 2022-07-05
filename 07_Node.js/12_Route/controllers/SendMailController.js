import express from 'express';
import nodemailer from 'nodemailer'; 

export default () => {

const router = express.Router();

router.post('/send_mail', async (req, res, next) => {
    const writer_name = req.body.writer_name;
    let writer_email = req.body.writer_email;
    const receiver_name = req.body.receiver_name;
    let receiver_email = req.body.receiver_email;
    const subject = req.body.subject;
    const content = req.body.content;

  
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
    console.log({
        host: process.env.SMTP_HOST,        
        port: process.env.SMTP_PORT,       
        secure: true,                        
        auth: { 
            user: process.env.SMTP_USERNAME, 
            pass: process.env.SMTP_PASSWORD, 
        }
    });

    /** 5) 메일발송 요청 */
    let rt = 200;
    let rtMsg = "OK";

    try {
        await smtp.sendMail(send_info);
    } catch (err) {
        rt = 500;
        rtMsg = err.message;
    }
    
    res.status(rt).send(rtMsg);
});

return router;
};