# ALMATEK Website

## Environment Variables

To enable the contact form functionality, you need to set up the following environment variables:

\`\`\`bash
# Email Configuration
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-email-password
EMAIL_FROM=site-web@almatek.fr
EMAIL_TO=contact@almatek.fr
\`\`\`

Create a `.env.local` file in the root directory and add these variables with your SMTP server details.

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Production

\`\`\`bash
npm run build
npm start
