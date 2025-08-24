# 🚀 Full Stack AI SaaS App (PERN Stack)

Build and deploy a modern **AI-powered SaaS application** from scratch using the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)**.  
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
- PostgreSQL (with Prisma / SQL)  

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
