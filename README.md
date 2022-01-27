# 🔥 RA Firebase Starter 🔥

At [**BlackBox Vision**](https://www.blackbox-vision.tech) we use heavily React Admin to build internal systems for our clients.

Also, we rely on firebase a lot for MVP products. After a lot of work and improvements over time, we've created this starter that includes everything you would need to work with RA and Firebase.

<!-- ## Table of contents

- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Dependency Management](#Dependency-Management)
- [Project Structure](#Project-Structure)
- [Firebase Setup](#Firebase-Setup)
- [Available Scripts](#Available-Scripts) -->

### ✨ Requirements

To use this template, you need (obviously) to have **Node.js** and **NPM** at least.

If you don't you can install them by using [**NVM**](https://github.com/nvm-sh/nvm). If you're a windows user you can install them with [**NVM for Windows**](https://github.com/coreybutler/nvm-windows).

### 🪄 Getting Started

To use this template the only thing you need to do is perform a fork from our repo, or in case you don't want to do that you can download the zip repo's version.

### 💻 Dependency Management

As you can see, this repository only has a package-lock.json which means that NPM is vastly used at BlackBox Vision for dependency management in Node.js.

You can feel free to bring your own package manager when using this starter, we don't want to limit any team wanting to use our repo as a baseline for building internal backoffice systems.

### 🏢 Project Structure

We've documented a little on our project structure decisions [**here**](/docs/project-structure.md).

### 🔨 Firebase Setup

If you're new to **Firebase**, we've a [**guide**](/docs/firebase-setup.md) prepared for you.

### 🔋 Available Scripts

Since this project is CRA (Create React App) based, you inherit all commands, that are the following ones:

- **Start**: Start will launch your application, when port 3000 is available, it will be launched on http://localhost:3000.

```bash
npm run start
```

- **Build**: Build will generate a production build of your app which then can be uploaded to any place where you want it to be hosted and served to end users.

```bash
npm run build
```

- **Eject**: Take care with this one. Eject gives you all the project configuration so you can customize to bring your own desired behaviour with the build toolchain.

```bash
npm run eject
```
