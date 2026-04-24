# Studio RTF Agent Builder Fellowship

Next.js App Router landing page for Studio RTF's AI Agent Builder Fellowship.

## Setup

```bash
npm install
npm run dev
npm run build
```

This project is configured with TypeScript, Tailwind CSS, the App Router, and the `@/*` import alias.

## Application Email

The application form posts to `/api/apply` and sends submissions to `miki@studiortf.com` with Resend.

Create `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
APPLICATION_FROM_EMAIL="Studio RTF <applications@your-verified-domain.com>"
APPLICATION_TO_EMAIL=miki@studiortf.com
```

`APPLICATION_FROM_EMAIL` must use a sender/domain allowed by your Resend account.
If your Resend account is in test mode, set `APPLICATION_TO_EMAIL` to the email address verified on your Resend account until your sending domain is verified.

## shadcn

The project uses a shadcn-style structure with reusable UI components in `components/ui`.

If you want to initialize the full shadcn CLI configuration, run:

```bash
npx shadcn@latest init
```
