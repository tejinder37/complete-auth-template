import nodemailer from "nodemailer";
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const getBaseEmailTemplate = (content: string) => `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      /* Font CDN Link */
      @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body,
      table,
      th,
      td,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      div {
        font-family: "Jost", sans-serif !important;
      }

      table,
      td {
        border: 0px solid black;
        color: black;
      }
      table td {
        width: 100%;
        padding: 0;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: 0px solid black;
        border-spacing: 0px;
        background-color: transparent;
        text-align: center;
      }
    </style>
  </head>
  <body style="background: #ffffff">
    <table role="presentation">
      <tr>
        <td align="center">
          <table
            style="width: 100%; max-width: 600px; min-width: 300px"
            role="presentation"
          >
            <tr>
              <td
                style="
                  padding: 40px 30px 40px 30px;
                  width: 100%;
                  min-height: 100dvh;
                  background-color: #ffffff;
                "
                align=" center"
              >
                <div
                  style="
                    box-shadow: 0px 0px 10px #0001 ;
                    padding: 50px;
                    width: fit-content;
                    border-radius: 10px;
                  "
                >
                  <h2 style="font-size: 1.8rem; color: black; margin-bottom: 10px;">Welcome to Auth App!</h2>
                      ${content}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`;

const getDefaultAttachment = () => [
  {
    filename: "logo.png",
    path: path.join(process.cwd(), "public", "images", "logo.png"),
    cid: "logo",
  },
];

const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html: getBaseEmailTemplate(htmlContent),
    attachments: getDefaultAttachment(),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  const htmlContent = `
    <p style="margin-top: 10px; margin-bottom: 10px; font-size: 1.1rem; color: black;>Thank you for signing up. Please confirm your email address to get started.</p>
    <p style="margin-top: 10px; margin-bottom: 10px; font-size: 0.9rem; color: gray;>
      <a href="${confirmLink}" style="border: none; display:inline-block; text-decoration:none; background-color: blue; color: white; padding: 15px 20px; border-radius: 5px;">
        Confirm Email
      </a>
    </p>
    <p style="margin-top: 10px; margin-bottom: 10px; font-size: 0.9rem; color: gray;>If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
    <p style="margin-top: 20px; margin-bottom: 10px; font-size: 0.9rem; color: gray;>${confirmLink}</p>
  `;
  await sendEmail(email, "Confirm your email", htmlContent);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  const htmlContent = `
    <p  style="font-size: 1.2rem; color: #000000; font-weight:600; margin-bottom: 15px;">Reset your password</p>
    <p>
      <a href="${resetLink}" style="border: none; display:inline-block; text-decoration:none; background-color: blue; color: white; padding: 15px 20px; border-radius: 5px;">
        Reset Password
      </a>
    </p>
    <p style="margin-top: 22px; margin-bottom: 15px; font-size: 0.9rem; color: gray;">If you're having trouble clicking the button, copy and paste this URL into your web browser:</p>
 
    <p style="margin-top: 10px; margin-bottom: 10px; font-size: 0.9rem; color: gray;">${resetLink}</p>
 
  `;
  await sendEmail(email, "Reset your password", htmlContent);
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const htmlContent = `
    <p style="font-size: 1.3rem; color: #000000; font-weight:600; margin-bottom: 15px;">2FA code</p>
    <p>your 2FA code is: <span style="border: none; display:inline-block; text-decoration:none; background-color: blue; color: white; padding: 15px 20px; border-radius: 5px;">${token}</span></p>
  `;
  await sendEmail(email, "2FA code", htmlContent);
};
