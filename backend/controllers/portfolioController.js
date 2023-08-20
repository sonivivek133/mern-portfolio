const nodemailer = require('nodemailer')
const sendBrevoTransport = require('nodemailer-brevo-transport')

//transport
const brevoTransport = new sendBrevoTransport({
  // auth:{
    //api_key: process.env.API_BREVO
    api_key: "process.env.API_BREVO"
  // }
});

const transporter = nodemailer.createTransport(brevoTransport)

//transport

// const transporter = nodemailer.createTransport( 
//   new sendBrevoTransport({
//     api_key: process.env.API_BREVO,
//   })
// );


// const transporter = nodemailer.createTransport(
//   {
//     host:'smtp-relay.brevo.com',
//     port:587,
//     secure:true,
//     // new sendBrevoTransport({
//       auth:{
//         api_key : process.env.API_BREVO,
//       }
//     // })
//   }
// );

console.log("API KEY:", process.env.API_BREVO);

const sendEmailController = (req,res) =>{
  try {
    const {name,email,msg} = req.body

    //validation
    if(!name || !email || !msg){
      return res.status(500).send({
        success:false,
        message:'Please provide all fields',
      });
    }
   // email matter
   transporter.sendMail({
    to:"Sonivivek1337@gmail.com",
    from:"Sonivivek133@gmail.com",
    subject:"Regarding Mern Portfolio App",
    html:`
         <h5> Detail Information</h5>
         <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
         </ul>
        `,
   });

    return res.status(200).send({
        success:true,
        message:'Your Message Send successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
        success:false,
        message: 'Send Email API Error',
        error,
    });
  }
};

module.exports = {sendEmailController};