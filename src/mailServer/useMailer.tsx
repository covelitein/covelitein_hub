import nodemailer from "nodemailer";

export default () => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "coveliteinshub@gmail.com",
      pass: "bnwrhqgcztzhbykn", // Use app password
    },
  });

  async function sendMail(content: string) {
    const info = await transport.sendMail({
      from: '"Covenant abraham" <abrahamcovenant2004@gmail.com>',
      to: "coveliteinshub@gmail.com",
      subject: "Payment request received",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coveliteinz Hub Email</title>
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" type="text/css">
        <style>
          /* Ensure proper rendering */
          body, p, a, h1, h2, h3 {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', Arial, sans-serif !important;
          }
          body {
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #4c68b6, #f5f5f5, #4c68b6);
            color: #000;
            text-align: center;
            padding: 20px;
            font-size: 28px;
            font-weight: 700;
            font-family: 'Montserrat', Arial, sans-serif !important;
          }
          .content {
            padding: 20px;
            line-height: 1.6;
            font-family: 'Montserrat', Arial, sans-serif !important;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            color: #ffffff;
            background-color: #5f5df7;
            border-radius: 5px;
            text-align: center;
            font-family: 'Montserrat', Arial, sans-serif !important;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #999999;
            padding: 10px;
            background-color: #e9e9e9;
            font-family: 'Montserrat', Arial, sans-serif !important;
          }
          img {
            border-radius: 50%;
            margin: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            Innovative Strategies for Modern Businesses
          </div>
          <div class="content">
            <p style="color:#000; font-size: 16px;">
              We specialize in working with digital products and brands, regardless of their size or lifecycle stage. From startups to established businesses, we strive to achieve significant tech leverage and create value for you.
            </p>
            <p style="color:#000; font-size: 16px;">
              ${content || "Become a client now and enjoy exceptional works!"}
            </p>
            <div style="text-align: center;">
              <a href="https://covelitein-hub.vercel.app/" style="color:#fff" class="button">Get in Touch</a>
            </div>
            <div style="text-align: center;">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Team Member 1" width="50" height="50">
              <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="Team Member 2" width="50" height="50">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Team Member 3" width="50" height="50">
            </div>
          </div>
          <div class="footer">
            © 2024 Coveliteinz Hub. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `,
    });

    return info.messageId;
  }

  return {
    sendMail,
  };
};
