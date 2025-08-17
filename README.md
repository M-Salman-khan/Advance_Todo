
# 🚀 Advance To-Do App
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License Badge"/>
</p>

A full-stack web application for managing your daily tasks. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), this application provides a simple and intuitive interface for all your task management needs.

---

## ✨ Features

- ✅ **View all tasks**: See a list of all your current tasks.
- ➕ **Add a new task**: Quickly add new tasks to your list.
- ✏️ **Edit a task**: Update the details of an existing task.
- 🗑️ **Delete a task**: Remove completed or unwanted tasks.

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React, Tailwind CSS, Axios |
| Backend    | Node.js, Express.js, CORS  |
| Database   | MongoDB (Mongoose)         |

---

## 📁 Project Structure

```
Advance_Todo/
├── backend/         # Node.js & Express.js API
└── frontend/        # React.js App
```

---

## 🚦 Getting Started

To get a local copy up and running, follow these simple steps.

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or Atlas)

---

### ⚙️ Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/M-Salman-khan/Advance-Todo.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd Advance-Todo
    ```

---

### 🔙 Backend Setup

1. **Navigate to the backend directory:**
    ```sh
    cd backend
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Create a `.env` file in `backend/` and add:**
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ```
4. **Start the backend server:**
    ```sh
    npm start
    ```
    The API will run at `http://localhost:3000`.

---

### 🔜 Frontend Setup

1. **Open a new terminal and go to the frontend directory:**
    ```sh
    cd frontend
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```
3. **Start the frontend server:**
    ```sh
    npm start
    ```
    The React app will open at `http://localhost:5173` (or similar).

---

## 📡 API Endpoints

- `GET /task`: Fetch all tasks
- `POST /task`: Create a new task (`{ "title": "Task title" }`)
- `PUT /task/:id`: Update a task
- `DELETE /task/:id`: Delete a task

---

## 📖 How to Use

1. **View Tasks:** All your tasks are listed on the main page.
2. **Add Task:** Use the input to add a new task.
3. **Edit Task:** Click edit to update a task.
4. **Delete Task:** Remove tasks you no longer need.

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

---

## 👨‍💻 Author

Made with 💙 by M-Salman-khan

---

## 📜 License

This project is distributed under the MIT License. See `LICENSE` for details.

---

## 🌟 Show Your Support

If you like this project, please give it a star on GitHub!