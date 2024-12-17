import nodemailer from "nodemailer";

// Utility function for sending emails
export async function sendMail({
  fullname,
  recipient,
  planName,
  features,
  price,
}: {
  fullname: string;
  recipient: string;
  planName: string;
  features: string[];
  price: string;
}) {
  // Create the transporter for Gmail
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use your app password here
    },
  });

  try {
    // Email options
    const info = await transport.sendMail({
      from: `"CoveliteinzHub" <coveliteinshub@gmail.com>`,
      to: recipient,
      subject: "Payment Request Received",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscription Payment Details</title>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
          body {
            font-family: "Roboto", sans-serif;
            background: linear-gradient(to bottom, #e0f7ff, #ffffff);
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #778cc6;
            color: #ffffff;
            padding: 10px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
          }
          .content {
            padding: 20px;
          }
          .content h2 {
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
          .content p {
            line-height: 1.6;
          }
          .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
          }
          .footer a {
            color: #778cc6;
            text-decoration: none;
          }
          .cta {
            background-color: #778cc6;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Payment Request Received</h1>
          </div>
          <div class="content">
            <h2>Subscription Payment Details</h2>
            <p>
              Dear ${fullname}, Thank you for requesting our services! We are thrilled to have you on
              board. Here are the details of your payment plan:
            </p>
            <h3>Subscription Plan</h3>
            <p>Your subscription plan is: <strong>${planName}</strong></p>
            <h3>Plan Features</h3>
            <ul>
              ${features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <p>Amount: <strong>${price}</strong></p>
            <h3>Payment Information</h3>
            <p>
              Please contact us on WhatsApp at <strong> <a href="https://wa.me/+2348131612666" target="_blank" rel="noopener noreferrer">+234-813-161-2666</a></strong> to
              continue your payment.
            </p>
            <h3>Need Help?</h3>
            <p>
              For further assistance, contact us on WhatsApp at
              <strong>+234-813-161-2666</strong> or email us at
              <a href="mailto:coveliteinshub@gmail.com">coveliteinshub@gmail.com</a
              >.
            </p>
            <a href="https://wa.me/+2348131612666" style="color:#fff;" target="_blank" rel="noopener noreferrer" class="cta"
              >Chat with Us on WhatsApp</a
            >
          </div>
          <div class="footer">
            <p>
              Thank you for choosing our services. We look forward to serving you!
            </p>
            <p>
              If you have any questions, feel free to reach out to our support team
              at 
              <a href="mailto:coveliteinshub@gmail.com">coveliteinshub@gmail.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    });

    return info.messageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
