import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request
    const { name, email, message } = await req.json(); // Suppression de optionalInfo
    console.log("Received data:", { name, email, message });

    // Log email credentials for debugging
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your app password from .env
      },
    });

    // Verify the transporter
    await transporter.verify();
    console.log("Server is ready to take our messages");

    // Set up the email options
    const mailOptions = {
      from: email, // Sender address
      to: process.env.EMAIL_USER, // Recipient address (your email)
      subject: `New message from ${name}`, // Email subject
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
