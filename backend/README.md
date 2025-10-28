---

## ⚙️ Technologies used

- **Node.js** + **Express**
- **TypeScript**
- **Nodemon** (for hot-reload у dev-mode)
- **ESM imports**
- **Jest** (for testing)

---

## 🧩 API Routes

### 📘 Boards

| Method   | Route              | Description              |
| :------- | :----------------- | :----------------------- |
| `GET`    | `/boards`          | Get all boards           |
| `GET`    | `/boards/:boardId` | Get board by ID          |
| `POST`   | `/boards`          | Create a new board       |
| `PATCH`  | `/boards/:boardId` | Update an existing board |
| `DELETE` | `/boards/:boardId` | Delete board by ID       |

---

### 🧠 Tasks

| Method   | Route                            | Description             |
| :------- | :------------------------------- | :---------------------- |
| `GET`    | `/boards/:boardId/tasks`         | Get all tasks for board |
| `GET`    | `/boards/:boardId/tasks/:taskId` | Get a specific task     |
| `POST`   | `/boards/:boardId/tasks`         | Create a new task       |
| `PATCH`  | `/boards/:boardId/tasks/:taskId` | Update task             |
| `DELETE` | `/boards/:boardId/tasks/:taskId` | Delete task             |

---

## 📦 Installation and launch

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sofia-kindratyshyn/board-test-task.git
cd backend
```

### 2️⃣ Install dependencies

npm install

### 3️⃣ Run in development mode

npm run dev

### 4️⃣ Production assembly

npm run build
npm start

🔌 Examples of requests
➕ Create a new board

POST /boards

{
"title": "Development Board",
"description": "Main tasks for the project"
}

➕ Create a new task

POST /boards/1/tasks

{
"title": "Implement login",
"status": "in progress",
"priority": "high"
}

🧠 Error handling

All controllers are wrapped in try/catch and pass errors to next(error) —
it allows you to centrally process them through middleware.
