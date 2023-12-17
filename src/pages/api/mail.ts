require("dotenv").config();
var nodemailer = require("nodemailer");

export default function (req: any, res: any) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    const mailData = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: `Mensagem de ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
    
    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err) {
            return res.status(400).json({
                sent: false,
                error: err,
            });
        } else {
            return res.status(200).json({
                sent: true,
                error: null,
            });
        }
    });
}