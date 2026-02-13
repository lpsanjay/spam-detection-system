# Spam / Fake Message Detection System

A full‑stack web application that detects whether a message is **Spam** or **Safe** using keyword‑based analysis. This project is built using **React, Node.js, Express, and MongoDB** and is designed as a final‑year cybersecurity‑focused academic project.

---

# 🚀 Features

- 🔍 Detect spam or fake messages instantly
- ⚡ Real‑time message analysis
- 🎨 Modern cybersecurity‑themed frontend
- 🌐 REST API backend using Express
- 🗄 MongoDB database integration (in progress)
- 🔐 Authentication system support (planned)
- 📦 Full stack architecture (Frontend + Backend)

---

# 🧠 How It Works

The system analyzes user input messages and compares them with predefined spam keywords such as:

- win
- lottery
- free
- money
- urgent
- claim

If spam keywords are detected → **Spam**  
Otherwise → **Safe**

---

# 🛠 Tech Stack

## Frontend
- React.js
- Tailwind CSS
- HTML5
- JavaScript

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Tools
- Git
- GitHub
- VS Code
- MongoDB Atlas

---

# 📁 Project Structure

```
spam-detection-system/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```
git clone https://github.com/lpsanjay/spam-detection-system.git
```

```
cd spam-detection-system
```

---

## 2️⃣ Install backend dependencies

```
cd backend
npm install
```

---

## 3️⃣ Install frontend dependencies

```
cd ../frontend
npm install
```

---

## 4️⃣ Run backend server

```
cd ../backend
npm run dev
```

Server runs on:

```
http://localhost:5001
```

---

## 5️⃣ Run frontend

```
cd ../frontend
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 📡 API Endpoint

## Analyze Message

**POST** `/analyze`

### Request

```
{
  "message": "You won free money"
}
```

### Response

```
{
  "result": "Spam"
}
```

---

# 🧪 Sample Inputs

Spam examples:

```
You won a free lottery
Click here to claim your prize
Urgent! Send your bank details
```

Safe examples:

```
Hello how are you
Let's meet tomorrow
Good morning
```

---

# 🔐 Future Improvements

- User authentication (Signup/Login)
- JWT security
- Database storage
- Machine learning integration
- Message history
- Admin dashboard

---

# 🎓 Academic Project Info

This project is developed as a **Final Year Engineering Mini Project** for demonstrating:

- Full stack development
- Cybersecurity concepts
- Spam detection logic
- API development
- Database integration

---

# 👨‍💻 Author

**Sanjay L P**

GitHub:  
https://github.com/lpsanjay

---

# 📄 License

This project is for educational purposes.

