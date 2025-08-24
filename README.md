# 🚀 Full Stack AI SaaS App (PERN Stack)

Build and deploy a modern **Harsh-AI** from scratch using the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)**.  
This project follows the [GreatStack YouTube tutorial](https://www.youtube.com/watch?v=RkYIWg5XAnI) — a 10-hour coding marathon where we assemble a fully functional, production-ready SaaS platform.

---

## ✨ Features

- 🔑 **Authentication & Authorization** with [Clerk](https://clerk.com)  
- 🖼 **AI-Powered Features** — integrate image generation, text prompts, etc.  
- 📦 **Full PERN Stack** setup:  
  - **PostgreSQL** – relational database  
  - **Express.js** – server & API handling  
  - **React.js** – modern frontend with hooks  
  - **Node.js** – backend runtime  
- 📡 **REST API** endpoints for secure data exchange  
- 🎨 **Modern UI/UX** with Tailwind CSS & clean component design  
- 🌐 **Deployment** to production (Vercel/Render/Railway + database hosting)  
- 🔥 **Persistent State & Data Management**  
- 🛠 **Scalable Project Structure** for real-world SaaS apps

---

## 🛠️ Tech Stack

**Frontend**
- React.js  
- Tailwind CSS  
- Axios (API calls)  

**Backend**
- Node.js  
- Express.js  
- PostgreSQL (with Neon / SQL)  

**Other Tools**
- Clerk (Authentication)  
- Cloudinary (Media uploads)  
- OpenAI API / AI integrations  
- Vercel, Render, Railway (Deployment options)  

---

## 📂 Project Structure

```bash
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page-level components
│   │   ├── utils/         # Helpers & configs
│   │   └── App.tsx
│   └── package.json

├── server/                # Express backend
│   ├── routes/            # API routes
│   ├── controllers/       # Logic for handling requests
│   ├── middlewares/       # Authentication & validation
│   ├── db/                # Database connection
│   └── server.js

├── .env                   # Environment variables
├── .gitignore
└── README.md
```

---


## ⚡ Getting Started

1️⃣ Clone the Repo
```bash
git clone https://github.com/vincentdkafka/AI-Saas-App.git
cd AI-Saas-App
```


2️⃣ Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

```

3️⃣ Setup environment variables

```bash
# Server
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/dbname
CLERK_API_KEY=your_clerk_api_key
CLOUDINARY_API_KEY=your_cloudinary_key
OPENAI_API_KEY=your_openai_key

# Client
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key

```

4️⃣ Run the development servers

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev

```
**Now visit http://localhost:5173 🎉**

---

## 🚀 Deployment

- Frontend → Vercel
- Backend → Render
 / Railway
- Database → Supabase
 / Neon
 / Railway

Push your code to GitHub and connect your repo to these platforms for one-click deployment.

---


## 🧠 Learning Goals

By the end of this project you’ll:

- Understand full-stack PERN workflows

- Learn how to integrate AI APIs into real apps

- Gain practical experience with authentication & cloud deployments

- Build a portfolio-worthy SaaS product


---

## 🙌 Credits

- This project is based on the GreatStack YouTube tutorial

- Big thanks to the creator for the detailed walkthrough!


---


## 📜 License

This project is licensed under the MIT License.
  
Copyright (c) 2025 Harsh Kurware 
mail: harshkurware03@gmail.com



