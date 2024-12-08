import AWS from "aws-sdk";

export const sendMail = async (
  /** @type {string} */ body,
  /** @type {string} */ subject,
) => {
  try {
    AWS.config.update({
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      region: import.meta.env.VITE_AWS_REGION,
    });

    const ses = new AWS.SES({ apiVersion: "2010-12-01" });

    const params = {
      Source: import.meta.env.VITE_SMTP_FROM,
      Destination: {
        ToAddresses: [import.meta.env.VITE_SMTP_TO],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Text: {
            Data: body,
          },
        },
      },
    };

    await ses.sendEmail(params).promise();
  } catch (error) {
    console.log("Error while sending email", error);
    return { success: false };
  }
  return { success: true };
};
