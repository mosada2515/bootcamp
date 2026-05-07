# Studio RTF AI Agent Builder Fellowship

Next.js App Router landing page for Studio RTF's selective AI Agent Builder Fellowship.

## Setup

```bash
npm install
npm run dev
npm run build
```

This project is configured with TypeScript, Tailwind CSS, the App Router, and the `@/*` import alias.

## Application Collection

The application form posts to `/api/apply` and saves Fellowship applications to Google Sheets.

### Google Sheets setup

1. Create a Google Sheet.
2. Open `Extensions` > `Apps Script`.
3. Paste the contents of `scripts/google-sheets-apps-script.js` into the Apps Script editor.
4. In Apps Script, open `Project Settings` > `Script properties` and add:

```bash
GOOGLE_SHEETS_SECRET=use-a-long-random-secret
```

5. Deploy the script as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the web app URL.

Create `.env.local`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=your_apps_script_web_app_url
GOOGLE_SHEETS_SECRET=use-the-same-long-random-secret
```

### Optional email notification

If you still want an email notification after each application is saved, add Resend credentials too:

```bash
RESEND_API_KEY=your_resend_api_key
APPLICATION_FROM_EMAIL="Studio RTF <applications@your-verified-domain.com>"
APPLICATION_TO_EMAIL=miki@studiortf.com
```

`APPLICATION_FROM_EMAIL` must use a sender/domain allowed by your Resend account. If your Resend account is in test mode, set `APPLICATION_TO_EMAIL` to the email address verified on your Resend account until your sending domain is verified.

## shadcn

The project uses a shadcn-style structure with reusable UI components in `components/ui`.

If you want to initialize the full shadcn CLI configuration, run:

```bash
npx shadcn@latest init
```
