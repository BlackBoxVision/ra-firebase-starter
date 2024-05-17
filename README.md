# 🔥 RA Firebase Starter 🔥

At [**BlackBox Vision**](https://www.blackbox-vision.tech) we use heavily React Admin to build internal systems for our clients.

Also, we rely on firebase a lot for MVP products. After a lot of work and improvements over time, we've created this starter that includes everything you would need to work with RA and Firebase.

## 📖 Table of contents

- [Requirements](#-requirements)
- [Getting Started](#-getting-started)
- [Dependency Management](#-dependency-management)
- [Project Structure](#-project-structure)
- [Firebase Setup](#-firebase-setup)
- [Running the project](#-running-the-project)
- [Available Scripts](#-available-scripts)

### ✨ Requirements

To use this template, you need (obviously) to have **Node.js** and **NPM** at least.

If you don't you can install them by using [**NVM**](https://github.com/nvm-sh/nvm). If you're a windows user you can install them with [**NVM for Windows**](https://github.com/coreybutler/nvm-windows).

### 🪄 Getting Started

To use this template the only thing you need to do is perform a fork from our repo, or in case you don't want to do that you can download the zip repo's version.

### 💻 Dependency Management

As you can see, this repository only has a **package-lock.json** which means that NPM is vastly used at **BlackBox Vision** for dependency management in **Node.js**.

> You can feel free to bring your own package manager when using this starter, we don't want to limit any team wanting to use our repo as a baseline for building internal backoffice systems.

### 🏢 Project Structure

Still a WIP 😅, we'll be documenting ASAP our decisions on the project structure architecture.

### 🔨 Firebase Setup

If you're new to **Firebase**, check out this [video](https://www.youtube.com/watch?v=6juww5Lmvgo) on how to create a Firebase project.

#### 1. Authentication

All requests must contain a `Bearer Token` to access Firestore data. To enable this, you need to activate [Firebase Authentication](https://console.firebase.google.com/project/ra-firebase-starter/authentication) manually. 

1. Go to the "Sign-In method" tab.
2. Choose "Native Providers", then select "Email/Password".
3. After that, navigate to the "Users" tab.
4. Create a new admin user with the email "admin@email.com", or any other email of your preference.
   
This will allow to log in from the page `/login`.

#### 2. Read/Write data

`Important❗:`
Before you can create or read data directly from the database, make sure to activate [Firebase Firestore](https://console.firebase.google.com/project/ra-firebase-starter/firestore) manually from Firebase Console.


#### 3. Upload Images

`Important❗:`
To enable file uploads for images, you need to activate [Firebase Storage](https://console.firebase.google.com/project/ra-firebase-starter/storage) manually from Firebase Console.

### 🏃‍♂️ Running the project

To run the project you need to perform the following steps:

1. Install all the project dependencies

```
npm i
```

2. Add an `.env` file like the following one

```bash
VITE_APP_FIREBASE_APPLICATION_CREDENTIALS=your-firebase-config-object
```

3. Run the app

```bash
npm run dev
```

When finished building your app for development, it'll be available at `http://localhost:3000`.

### 🔋 Available Scripts

Since this project is [**VITE**](https://vitejs.dev/) based, you inherit all commands, that are the following ones:

- **Start**: Start dev server and launch your application.

```bash
npm run dev
```

- **Build**: Build will generate a production build of your app which then can be uploaded to any place where you want it to be hosted and served to end users.

```bash
npm run build
```

- **Preview**: Locally preview production build.

```bash
npm run preview
```
