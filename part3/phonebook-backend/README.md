# 📞 Phonebook Application - Backend

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**A full-stack phonebook application built as part of the University of Helsinki's Full Stack Open course.**

[Live Demo](https://phonebook-backend-al2c.onrender.com) · [Report Bug](https://github.com/zentheriun/phonebook-backend/issues) · [Request Feature](https://github.com/zentheriun/phonebook-backend/issues)

</div>

---

## 🌟 Features

- ✨ **RESTful API** - Complete CRUD operations for phonebook entries
- 🗄️ **MongoDB Integration** - Persistent data storage with Mongoose ODM
- 🔒 **Environment Variables** - Secure configuration management
- 🚀 **Production Ready** - Deployed on Render with static frontend serving
- ⚡ **Error Handling** - Comprehensive error middleware
- 🔄 **CORS Enabled** - Cross-Origin Resource Sharing support
- 📊 **Info Endpoint** - Real-time statistics about the phonebook

---

## 🚀 Live Application

The application is deployed and available at:

### **[https://phonebook-backend-al2c.onrender.com](https://phonebook-backend-al2c.onrender.com)**

### Try the API:
- 📊 **Info endpoint**: [https://phonebook-backend-al2c.onrender.com/info](https://phonebook-backend-al2c.onrender.com/info)
- 👥 **All persons**: [https://phonebook-backend-al2c.onrender.com/api/persons](https://phonebook-backend-al2c.onrender.com/api/persons)
- 👤 **Single person**: `https://phonebook-backend-al2c.onrender.com/api/persons/<id>`

---

## 📋 Table of Contents

- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Author](#-author)
- [License](#-license)

---

## 🛠️ Technologies

This project leverages modern web development tools and frameworks:

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **dotenv** | Environment variable management |
| **cors** | Cross-Origin Resource Sharing |
| **Morgan** | HTTP request logger middleware |

---

## ✅ Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account or local MongoDB instance

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/zentheriun/phonebook-backend.git
cd phonebook-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

> ⚠️ **Note**: The `.env` file is not included in the repository for security reasons. You must create your own.

---

## 🔐 Environment Variables

The application requires the following environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/phonebook` |
| `PORT` | Server port number | `3001` |

---

## 🎯 Usage

### Development Mode

Start the server with automatic reload on file changes:

```bash
npm run dev
```

### Production Mode

Start the server in production mode:

```bash
npm start
```

The server will be available at `http://localhost:3001`

---

## 📡 API Documentation

### Base URL

- **Local**: `http://localhost:3001/api`
- **Production**: `https://phonebook-backend-al2c.onrender.com/api`

### Endpoints

#### Get all persons

```http
GET /api/persons
```

Returns all phonebook entries.

**Live example**: [https://phonebook-backend-al2c.onrender.com/api/persons](https://phonebook-backend-al2c.onrender.com/api/persons)

#### Get single person

```http
GET /api/persons/:id
```

Returns a specific person by ID.

**Example**: `https://phonebook-backend-al2c.onrender.com/api/persons/<id>`

#### Create new person

```http
POST /api/persons
```

**Request Body:**

```json
{
  "name": "John Doe",
  "number": "123-456-7890"
}
```

#### Update person

```http
PUT /api/persons/:id
```

**Request Body:**

```json
{
  "name": "John Doe",
  "number": "098-765-4321"
}
```

#### Delete person

```http
DELETE /api/persons/:id
```

Removes a person from the phonebook.

#### Get phonebook info

```http
GET /info
```

Returns statistics about the phonebook (total entries and timestamp).

**Live example**: [https://phonebook-backend-al2c.onrender.com/info](https://phonebook-backend-al2c.onrender.com/info)

---

## 📁 Project Structure

```
phonebook-backend/
├── 📄 index.js              # Express server and routes
├── 📂 models/               # Mongoose models
│   └── person.js           # Person schema
├── 📂 dist/                 # Static frontend build files
├── 📄 package.json          # Project dependencies
├── 📄 .env                  # Environment variables (not in repo)
├── 📄 .gitignore            # Git ignore rules
└── 📄 README.md             # Project documentation
```

> **Security Note**: The `.env` file is excluded from the repository via `.gitignore` to protect sensitive credentials.

---

## 🌐 Deployment

This application is deployed on **Render** with the following configuration:

- **Platform**: [Render](https://render.com)
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: Configured in Render dashboard

### Deploy Your Own

1. Fork this repository
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Add environment variables in Render settings
5. Deploy!

---

## 👨‍💻 Author

**Santiago Yate Rios**

- GitHub: [@zentheriun](https://github.com/zentheriun)

---

## 📝 License

This project is part of the [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki.

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a star!

Made with ❤️ as part of Full Stack Open 2024

</div>
