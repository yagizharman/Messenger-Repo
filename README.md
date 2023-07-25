# Real-Time Messenger App: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher (2023)

This is a repository for a Real-Time Messenger App: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher.

This repository houses a comprehensive project for creating a Real-Time Messenger clone using a powerful tech stack. With Next.js 13, React, Tailwind CSS, Prisma, MongoDB, NextAuth, and Pusher at its core, this project enables you to build a feature-rich and visually appealing chat application.

Key Features:

- Real-time Messaging: Our messaging system is powered by Pusher, ensuring that you can chat with your friends and colleagues in real-time without any delays.
- Message Notifications and Alerts: Stay up-to-date with your conversations through message notifications and alerts, so you never miss an important message.
- Sleek UI with Tailwind Design: Enjoy a visually appealing and modern user interface designed with Tailwind, making your messaging experience smooth and intuitive.
- Dynamic Animations and Transitions: We've added subtle yet elegant Tailwind animations and transitions to create a delightful interaction between you and the app.
- Full Responsiveness: Whether you're using a desktop, tablet, or smartphone, our app is fully responsive, adapting seamlessly to all devices.
- Secure Credential Authentication: Your privacy is crucial to us. We've implemented NextAuth for secure and reliable credential authentication.
- Google and GitHub Authentication: Sign in conveniently with your Google or GitHub account, providing you with multiple options for a seamless login experience.
- Effortless File and Image Uploads: Share files and images effortlessly with our Cloudinary CDN integration, ensuring smooth and fast transfers.
- Enhanced Form Handling: We utilize react-hook-form to create smooth and seamless client-side form validation and handling for a hassle-free experience.
- Effective Server Error Handling: We've implemented react-toast for efficient server error handling, ensuring you receive clear and concise error messages when needed.
- Message Read Receipts: Know when your messages have been read, adding an extra layer of transparency to your conversations.
- Online/Offline User Status: Easily identify when your contacts are online or offline, providing insights into their availability.
- Group Chats and One-on-One Messaging: Whether you want to chat with a group or have private conversations, our app supports both modes.
- Message Attachments and File Sharing: Share various file types and attachments during your conversations to enhance communication.
- Customizable User Profiles: Personalize your user profile with customization options, making your presence in the app uniquely yours.

### Prerequisites

**Node version 20.x**

### Cloning the repository

```shell
git clone https://github.com/yagizharman/Messenger-Repo.git
```

### Install packages

```shell
npm i
```
### Setup .env file
```js
DATABASE_URL=

NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
