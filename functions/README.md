# Registration confirmation email

`sendRegistrationConfirmation` runs when a document is created in
`registrations-2026`. It sends a confirmation through Gmail and records the
delivery result in the registration document under `confirmationEmail`.

## Private setup

1. Enable 2-Step Verification for `islamhalim@ieee.org` and create a Google App
   Password named `AI Caravan Firebase`.
2. Sign in to Firebase locally and store the app password without adding it to
   source control:

   ```text
   npx firebase-tools login
   npx firebase-tools functions:secrets:set GMAIL_APP_PASSWORD --project ai-caravan-registration
   ```

3. Deploy the function:

   ```text
   npx firebase-tools deploy --only functions:sendRegistrationConfirmation --project ai-caravan-registration
   ```

Never put the Google account password or app password in this repository.
