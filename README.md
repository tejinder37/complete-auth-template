# Next.js Authentication Template

This is a [Next.js](https://nextjs.org) project that provides a complete authentication system using [Auth.js](https://authjs.dev/). The template includes multiple authentication methods (social login, credentials login), two-factor authentication, role-based access control (RBAC), and a user settings page for managing account information.

## Features

- **Social Login**: Supports login through popular social providers such as Google, Facebook, GitHub, etc.
- **Credentials Login**: Standard email and password login.
- **Verification Code**: Email-based verification code for account confirmation and recovery.
- **Two-Factor Authentication (2FA)**: Adds an extra layer of security using 2FA during the login process.
- **Settings Page**: Manage account settings, including password updates, personal details, and enabling/disabling 2FA.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) v14 or higher
- [Next.js](https://nextjs.org) v13 or higher

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/nextjs-auth-template.git
cd nextjs-auth-template
npm install
```

### Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```bash
# NextAuth secret key for signing JWTs
NEXTAUTH_SECRET=your-secret-key

# Database connection (Postgres, MongoDB, or another supported database)
DATABASE_URL=your-database-url

# Social provider credentials (Example for Google)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email provider for sending verification codes
EMAIL_SERVER=smtp://user:password@smtp.example.com
EMAIL_FROM=noreply@example.com
```

For other social providers (e.g., Facebook, GitHub), add their respective client ID and secret keys as needed.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Authentication Setup

The project integrates [Auth.js](https://authjs.dev/) for handling authentication. You can configure the available login methods by modifying the `pages/api/auth/[...nextauth].ts` file.

The template supports:

- **Social Login**: Configure providers in the `authOptions` object.
- **Credentials Login**: Default email/password flow.
- **2FA**: Managed via a third-party service (e.g., Google Authenticator).
- **Verification Code**: Sent via email during sign-up or account recovery.


### Settings Page

Users can manage their account settings by navigating to `/settings`. Here, they can:

- Change passwords
- Enable or disable 2FA
- Update personal information (e.g., name, email)
  
## Deployment

The easiest way to deploy your Next.js app is via the [Vercel Platform](https://vercel.com/new). You can deploy the project directly by linking your GitHub repository to Vercel.

Alternatively, check out the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other deployment options.

---

### License

This project is licensed under the MIT License.

---
