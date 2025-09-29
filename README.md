# DeepSeek Clone

DeepSeek Clone is a web application designed to provide an interactive chat interface powered by **AI**.  
It allows users to engage in conversations, manage chats, and perform actions like renaming or deleting chats.  
The application is built using modern web technologies such as React, Next.js, and Node.js.

---

## 🌐 Live Demo

👉 [https://deepseek.adonr.dev](https://deepseek.adonr.dev)

---

## 🚀 Features

- 🤖 **AI-Powered Chat** – Send prompts and receive responses from an AI model.  
- 💬 **Chat Management** – Rename or delete chats with ease.  
- ⚡ **Real-Time Updates** – Messages update dynamically without refresh.  
- 🔐 **User Authentication** – Secure login and session handling via Clerk.  
- 📱 **Responsive Design** – Optimized for desktop and mobile devices.  

---

## 🛠️ Tech Stack

- **Frontend:** React, Next.js  
- **Backend:** Node.js, Clerk  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS  
- **State Management:** Context API  
- **Notifications:** React Hot Toast  
- **API Integration:** Axios  

---

## 📂 Folder Structure

```groovy
deepseek-clone/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   ├── ai/         # AI chat endpoint
│   │   │   ├── rename/     # Rename chat endpoint
│   │   │   └── delete/     # Delete chat endpoint
│   └── clerk/              # Clerk webhook integration
├── components/
│   ├── ChatLabel.jsx       # Chat label component
│   ├── PromptBox.jsx       # Chat input box component
│   └── Sidebar.jsx         # Sidebar for chat navigation
├── context/
│   └── AppContext.jsx      # Global state management
├── config/
│   └── db.js               # MongoDB connection configuration
├── models/
│   └── User.js             # User model schema
├── public/
│   └── assets/             # Static assets (icons, images)
├── styles/
│   └── globals.css         # Global styles
└── README.md               # Project documentation

```

## ⚙️ Installation & Setup

1. Clone the repository
   
   ``` bash
      git clone https://github.com/adonbhuiyah/DeepSeek.git deepseek-clone
      cd deepseek-clone
   ```
2. Install dependencies
   
  ``` bash
    npm install
   ```
3. Set up environment variables
   Create a .env file in the root directory and add:

👇 Frontend (Public) Clerk Key – starts with pk_... 

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

👇 Backend (Secret) Clerk Key – starts with sk_... 

CLERK_SECRET_KEY=your-clerk-secret-key 

👇 Your MongoDB connection string 

MONGODB_URI=your-mongodb-connection-string

👇 Secret key used for signing webhooks (like SVIX) 

SIGNING_SECRET=your-svix-signing-secret

👇 API key for DeepSeek or any AI/chat API service 

DEEPSEEK_API_KEY=your-deepseek-api-key

4. Run the development server

    ``` bash
    npm run dev
   ```
5. Open the app
    Visit 👉 [http://localhost:3000](http://localhost:3000)


## 🤝 Let's Connect!

**Website:** [adonr.dev](https://adonr.dev)  
**Email:** [contact@adonr.dev](mailto:contact@adonr.dev)  
**GitHub:** [View My GitHub Profile](https://github.com/AdonBhuiyah)

[![X (formerly Twitter)](https://img.shields.io/badge/-X-black?style=flat-square&logo=x&logoColor=white)](https://x.com/AdonBhuiyah)
[![Telegram](https://img.shields.io/badge/-Telegram-26A5E4?style=flat-square&logo=telegram&logoColor=white)](https://t.me/AdonBhuiyah)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/AdonBhuiyah)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/AdonBhuiyah)
[![Facebook](https://img.shields.io/badge/-Facebook-E4405F?style=flat-square&logo=facebook&logoColor=white)](https://facebook.com/AdonBhuiyah1)
[![Pinterest](https://img.shields.io/badge/-Pinterest-BD081C?style=flat-square&logo=pinterest&logoColor=white)](https://pinterest.com/AdonBhuiyah)    
[![Threads](https://img.shields.io/badge/-Threads-000000?style=flat-square&logo=threads&logoColor=white)](https://threads.net/AdonBhuiyah)   
