const {initializeApp} = require("firebase-admin/app");
const {FieldValue} = require("firebase-admin/firestore");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {defineSecret} = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

initializeApp();

const gmailAppPassword = defineSecret("GMAIL_APP_PASSWORD");
const senderEmail = "islamhalim@ieee.org";

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

exports.sendRegistrationConfirmation = onDocumentCreated(
  {
    document: "registrations-2026/{registrationId}",
    region: "europe-west1",
    secrets: [gmailAppPassword],
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;

    const registration = snapshot.data();
    const email = String(registration.email || "").trim().toLowerCase();
    const name = String(registration.name || "Participant").trim();
    const track = String(registration.track || "AI Caravan 2026").trim();

    if (!email || !email.includes("@")) {
      logger.error("Registration has no valid recipient email", {
        registrationId: event.params.registrationId,
      });
      await snapshot.ref.set({
        confirmationEmail: {
          status: "error",
          error: "Missing or invalid recipient email",
          updatedAt: FieldValue.serverTimestamp(),
        },
      }, {merge: true});
      return;
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: gmailAppPassword.value(),
      },
    });

    const safeName = escapeHtml(name);
    const safeTrack = escapeHtml(track);

    try {
      const result = await transporter.sendMail({
        from: `IEEE CS Region 8 AI Caravan <${senderEmail}>`,
        replyTo: senderEmail,
        to: email,
        subject: "AI Caravan 2026 registration received",
        text: [
          `Dear ${name},`,
          "",
          "Thank you for registering for the IEEE Computer Society Region 8 AI Caravan 2026.",
          `Selected training track: ${track}`,
          "",
          "Your registration has been received successfully. The Caravan team will contact you with the training schedule and next steps.",
          "",
          "Best regards,",
          "IEEE Computer Society Region 8 AI Caravan Team",
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#20252b;max-width:640px;margin:auto">
            <div style="border-top:6px solid #f58220;padding:28px;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;border-left:1px solid #e5e7eb">
              <p>Dear ${safeName},</p>
              <h1 style="font-size:24px;color:#111827">Registration received</h1>
              <p>Thank you for registering for the <strong>IEEE Computer Society Region 8 AI Caravan 2026</strong>.</p>
              <p style="padding:14px 16px;background:#fff7ed;border-left:4px solid #f58220">
                <strong>Selected training track:</strong> ${safeTrack}
              </p>
              <p>Your registration has been received successfully. The Caravan team will contact you with the training schedule and next steps.</p>
              <p>Best regards,<br><strong>IEEE Computer Society Region 8 AI Caravan Team</strong></p>
              <p style="font-size:12px;color:#6b7280">Questions? Reply to this email or contact ${senderEmail}.</p>
            </div>
          </div>`,
      });

      await snapshot.ref.set({
        confirmationEmail: {
          status: "sent",
          messageId: result.messageId || "",
          sentAt: FieldValue.serverTimestamp(),
        },
      }, {merge: true});

      logger.info("Registration confirmation sent", {
        registrationId: event.params.registrationId,
      });
    } catch (error) {
      logger.error("Registration confirmation failed", error);
      await snapshot.ref.set({
        confirmationEmail: {
          status: "error",
          error: error instanceof Error ? error.message : "Unknown email error",
          updatedAt: FieldValue.serverTimestamp(),
        },
      }, {merge: true});
      throw error;
    }
  },
);
