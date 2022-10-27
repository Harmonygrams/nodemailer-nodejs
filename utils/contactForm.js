const nodemailer = require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
    service : 'gmail', 
    auth : {
        user : process.env.MAIL_USERNAME,
        pass : process.env.MAIL_PASSWORD, 
        clientId : process.env.CLIENT_ID, 
        clientSecret : process.env.CLIENT_SECRET, 
        refreshToken : process.env.REFRESH_TOKEN
    }
    
})
const contactForm = async (requestBody, responseBody, next) => {
    const {email, subject, body} = requestBody.body
    const mailOptions = {
        to : email, 
        from : process.env.MAIL_USERNAME, 
        subject : subject, 
        text : body, 
    }
    try{
        await transporter.sendMail(mailOptions)
        responseBody.status(200).json({'success' : true, 'data' : 'The email was sent successfully'})
    }
    catch(err) {
        responseBody.status(200).json({'success': false, 'data' : 'invalid request', err : err})
    }
}
module.exports = contactForm