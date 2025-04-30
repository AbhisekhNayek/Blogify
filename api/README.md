# 🌟 Blogs Backend 🌟

Welcome to the **Blogs** backend platform! 🚀 This project serves as the backend for the **Blogs** platform, providing a RESTful API for managing blog posts, users, and authentication. Built using **Node.js**, **Express**, and **MongoDB**, it’s designed to be secure, scalable, and easy to integrate with the frontend. 📚🔒

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher) 🌐
- [npm](https://www.npmjs.com/) (for managing packages) 📦
- [MongoDB](https://www.mongodb.com/) (you can use MongoDB Atlas for a cloud database) 💻

## 🚀 Setup Instructions

Follow these steps to get the backend running locally:

### 1. Clone the Repository 🖥️

Clone this repository to your local machine:

```bash
git clone https://github.com/AbhisekhNayek/Blogify.git
cd api
```

### 2. Install Dependencies 🔧

Inside the `api` directory, run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Create `.env` File 🔑

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

### 4. Run the Development Server 💻

After the environment is set up, run the following command to start the backend server:

```bash
npm run dev
```

This will start the backend server on [http://localhost:3000](http://localhost:3000). 🎉

## 🧑‍💻 Project Structure

Here’s a quick look at the project structure:

```
server/
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── server.js
└── .env
```

## 💡 Features

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