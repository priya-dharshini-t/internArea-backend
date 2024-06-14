const admin = require('../config/firebaseAdmin');
const nodemailer = require('nodemailer');
const { PhoneAuthProvider } = require('firebase-admin/auth');

exports.sendEmailOTP = async (req, res) => {
  const { email } = req.body;

  try {
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.send({ message: 'OTP sent', otp });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.sendPhoneOTP = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const provider = new PhoneAuthProvider(admin.auth());
    const verificationId = await provider.verifyPhoneNumber(phoneNumber, {
      sessionInfo: 'your-session-info',
    });

    res.send({ message: 'OTP sent', verificationId });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Other OTP-related controllers
