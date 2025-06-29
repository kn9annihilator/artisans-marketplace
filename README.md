![GitHub repo size](https://img.shields.io/github/repo-size/kn9annihilator/artisans-marketplace)
![GitHub stars](https://img.shields.io/github/stars/kn9annihilator/artisans-marketplace?style=social)
![Last Commit](https://img.shields.io/github/last-commit/kn9annihilator/artisans-marketplace)
![Issues](https://img.shields.io/github/issues/kn9annihilator/artisans-marketplace)
![LICENSE](https://img.shields.io/github/license/kn9annihilator/artisans-marketplace)

# Artisan Marketplace – Empowering Local Artisans

**Artisan Marketplace** is a bilingual e-commerce platform designed to connect rural artisans directly with customers, enabling them to register, manage products, and reach a wider audience. This initiative aligns with **SDG 9 (Industry, Innovation and Infrastructure)** and aims to digitally uplift local talent through an intuitive, mobile-friendly experience.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Cloning and Installation](#cloning--installation)
- [Navigate into the project directory](#navigate-into-the-project-directory)
- [Install dependencies](#install-dependencies)
- [Setting up Firebase](#firebase-setup-instructions)
- [Running the Project Locally](#️-running-the-project-locally)
- [⚠️OTP Limit Warning](#️-firebase-otp-limit-warning)
- [Project Structure](#project-structure-overview)
- [License](#license)


## Features
-  **Vendor Registration with Mobile OTP (Firebase)**
-  **Bilingual Labels (English + Hindi)**
-  **Dynamic City Selection Based on Selected State**
-  **Captcha-style Human Verification**
-  **Modern UI with Tailwind CSS & Framer Motion**
-  **Firebase Integration for Authentication and Hosting**

---
##  Tech Stack

| Technology         | Purpose                                                                    |
|--------------------|----------------------------------------------------------------------------|
| **React.js**       | Frontend framework                                                         |
| **Tailwind CSS**   | Styling and responsive UI                                                  |
| **Framer Motion**  | Animations and transitions                                                 |
| **Firebase Auth**  | Phone-based OTP authentication                                             |
| **Vite**           | Lightning-fast development server(not used in this project but can be used)|
                        

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18 or above)
- npm or yarn 
- [Git](https://git-scm.com/)
- [Firebase CLI (optional)](https://firebase.google.com/docs/cli) (for deployment or advanced testing)

---

##  Cloning & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/artisan-marketplace.git
```

# Navigate into the project directory
``` bash
cd artisan-marketplace
```

# Install dependencies
``` bash
npm install
```
# or
``` bash
yarn install   //not suggested by author
```
## Firebase Setup Instructions

-Go to Firebase Console and create a new project.
-Enable Phone Authentication in Authentication → Sign-in Method.
-Add your development domains in Authentication → Settings → Authorized Domains:
``` bash
localhost
```

Do not mention like:
``` bash
localhost:3000 (optional, handled automatically)
```

Copy your Firebase config from Project Settings → General → Web App SDK snippet and add it to a file named:

``` js
// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXXX",
};

export const app = initializeApp(firebaseConfig);
```

## ▶️ Running the Project Locally

``` bash
# Start the local development server
npm run dev
# or
yarn dev //not suggested
```
App will be available at   ``` bash localhost:3000 ```
 

## ⚠️ Firebase OTP Limit Warning
By default, new Firebase projects allow only 10 OTPs per day. To increase this quota:

Link a billing method (Spark or Blaze plan – free tier also allows this).

Monitor usage in Firebase Console → Authentication → Usage.

## Project Structure Overview

``` js
artisan-marketplace/
├── src/
│   ├── pages/
│   │   └── VendorRegistration.jsx
│   ├── firebase.js
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

### License
This project is licensed under the MIT License.
See [LICENSE](#license) for more details. 


Author |
Krishna Narula
## Connect with me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Krishna%20Narula-blue?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/krishnanarula/)


