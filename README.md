# 🌟 Blogs Platform 🌟

Welcome to the **Blogs Platform**! 🚀 This is a full-stack project built using **Vite**, **ShadCN**, **TailwindCSS**, **Node.js**, **Express**, **MongoDB**, and **Firebase**. It provides a modern, fast, and responsive user interface to manage and read blog posts, while offering secure backend functionality for authentication and data management. 📚🔒

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher) 🌐
- [npm](https://www.npmjs.com/) (for managing packages) 📦
- [MongoDB](https://www.mongodb.com/) (You can use MongoDB Atlas for cloud database) 💻

## 🚀 Project Setup

This project is divided into two main parts:

1. **Frontend** – The user-facing part built using **Vite**, **ShadCN**, and **TailwindCSS**.
2. **Backend** – The server-side part using **Node.js**, **Express**, **MongoDB**, and **Firebase**.

### 🚀 Frontend Setup

Follow the steps below to set up the **Frontend** of the Blogs platform:

#### 1. Clone the Repository 🖥️

Clone this repository to your local machine:

```bash
git clone https://github.com/AbhisekhNayek/Blogify.git
cd client
```

#### 2. Install Dependencies 🔧

Inside the `client` directory, run the following command to install all necessary dependencies:

```bash
npm install
```

#### 3. Create `.env` File 🔑

Create a `.env` file from the provided `env.sample` file and add your Firebase and API configuration values:

1. Copy the contents of `env.sample` to `.env`:

```bash
cp env.sample .env
```

2. Update your `.env` file with the following Firebase and API configuration:

```env
VITE_API_BASE_URL="http://localhost:3000/api"  
VITE_FIREBASE_API="your-firebase-api-key"    
VITE_FIREBASE_AUTH_DOMAIN="your-firebase-auth-domain" 
VITE_FIREBASE_PROJECT_ID="your-firebase-project-id"    
VITE_FIREBASE_STORAGE_BUCKET="your-firebase-storage-bucket"  
VITE_FIREBASE_MESSAGING_SENDER_ID="your-firebase-messaging-sender-id"  
VITE_FIREBASE_APP_ID="your-firebase-app-id"    
```

#### 4. Run the Development Server 💻

After the environment is set up, run the following command to start the **Frontend** development server:

```bash
npm run dev
```

This will start the **Frontend** on [http://localhost:5173](http://localhost:5173). 🎉

---

### 🚀 Backend Setup

Follow the steps below to set up the **Backend** of the Blogs platform:

#### 1. Clone the Repository 🖥️

Navigate to the `api` directory:

```bash
cd api
```

#### 2. Install Dependencies 🔧

Inside the `api` directory, run the following command to install all necessary dependencies:

```bash
npm install
```

#### 3. Create `.env` File 🔑

Create a `.env` file and add your environment configuration values:

1. Copy the contents of `env.sample` to `.env`:

```bash
cp env.sample .env
```

2. Update your `.env` file with the following configuration:

```env
FRONTEND_URL=http://localhost:5173  
PORT=3000                            
MONGODB_CONN="your-mongodb-connection-string"  
JWT_SECRET="your-jwt-secret"         
NODE_ENV="development"              
CLOUDINARY_APP_NAME="your-cloudinary-app-name" 
CLOUDINARY_API_KEY="your-cloudinary-api-key"   
CLOUDINARY_API_SECRET="your-cloudinary-api-secret" 
```

#### 4. Run the Development Server 💻

After the environment is set up, run the following command to start the **Backend** server:

```bash
npm run dev
```

This will start the **Backend** server on [http://localhost:3000](http://localhost:3000). 🎉

---

## 🧑‍💻 Project Structure

Here’s a quick look at the project structure:

```
Blogify/
├── client/ (Frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── .env
├── server/ (Backend)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── server.js
│   └── .env
```

## 💡 Features

### Frontend Features:
- 🚀 Fast, modern UI with Vite and TailwindCSS
- 📝 Easy to manage and read blog posts
- 🔒 Secure authentication using Firebase
- 🖥️ Fully responsive design

### Backend Features:
- 🚀 Fast, efficient RESTful API built with Express
- 📝 Secure authentication using JWT (JSON Web Tokens)
- 📱 Media management with Cloudinary for storing images and media
- 🔒 MongoDB for storing blog posts, users, and other data
- 🖥️ Fully tested and scalable backend

## 📢 Contributing

We welcome contributions! Feel free to fork the repository, open issues, and submit pull requests. Together, we can make this project even better. 😄

## 🔒 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Made with 💙 by Abhisekh Nayek
