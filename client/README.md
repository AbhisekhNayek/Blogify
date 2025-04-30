# 🌟 Blogs Frontend 🌟

Welcome to the **Blogs** frontend platform! 🚀 This project is built using **Vite**, **ShadCN**, and **TailwindCSS** to deliver a modern, fast, and responsive user interface for managing and reading blog posts. ✍️📚

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher) 🌐
- [npm](https://www.npmjs.com/) (for managing packages) 📦

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone the Repository 🖥️

Clone this repository to your local machine:

```bash
git clone https://github.com/AbhisekhNayek/Blogify.git
cd client
```

### 2. Install Dependencies 🔧

Inside the `client` directory, run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Create `.env` File 🔑

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

### 4. Run the Development Server 💻

After the environment is set up, run the following command to start the development server:

```bash
npm run dev
```

This will start the frontend on [http://localhost:3000](http://localhost:5173). 🎉


## 💡 Features

- 🚀 Fast, modern UI with Vite and TailwindCSS
- 📝 Easy to manage and read blog posts
- 🔒 Secure authentication using Firebase
- 🖥️ Fully responsive design

## 📢 Contributing

We welcome contributions! Feel free to fork the repository, open issues, and submit pull requests. Together, we can make this project even better. 😄

## 🔒 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Made with 💙 by Abhisekh Nayek