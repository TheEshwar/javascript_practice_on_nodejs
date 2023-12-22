let nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eshwar@angularminds.com',
        pass: 'QAZqaz@1'
    }
})

let mainOptions = {
    from: 'eshwar@angularminds.com',
    to: 'eshwar@angularminds.com',
    subject: 'Sending test email with nodemailer',
    text: 'Hello My name is Eshwar Deshmukh'
}

transporter.sendMail(mainOptions, function(error, info){
    if(error)
        console.log('ERROR occured :- ', error);
    else
        console.log('Email sent :- ', info.response);
})