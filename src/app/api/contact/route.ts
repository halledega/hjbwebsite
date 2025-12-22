import {
  NextResponse
} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the transporter
    // In a real application, you should use environment variables for these values
    // Example: process.env.SMTP_HOST, process.env.SMTP_USER, etc.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'user@example.com',
        pass: process.env.SMTP_PASS || 'password',
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'no-reply@hjbeng.com'}>`, // Sender address
      to: 'admin@hjbeng.com', // List of receivers
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`, // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `, // plain text body
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
    };

    // Send email logic
    if (process.env.SMTP_HOST) {
      // If SMTP details are provided, send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } else {
      // Otherwise, log the email to the console (for development/demo)
      console.log('--- SIMULATED EMAIL SEND ---');
      console.log('To:', mailOptions.to);
      console.log('Subject:', mailOptions.subject);
      console.log('Body:', mailOptions.text);
      console.log('--- END SIMULATED EMAIL ---');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
