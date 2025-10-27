🧭 TaskBoards — React + TypeScript + Vite

This project is a frontend part of TaskBoards, a minimal and intuitive task management app that allows you to create boards, add tasks, and manage them visually using drag and drop.

🚀 Tech Stack

⚛️ React + TypeScript

⚡ Vite for fast builds and HMR

🎯 React Query (TanStack Query) for data fetching and caching

🎨 CSS Modules for component-level styling

🔄 Axios for API communication

🧩 @dnd-kit/core for Drag & Drop functionality

🧠 Zustand for lightweight global state

🔔 React Toastify for user notifications

🛠️ Installation & Setup

Clone the repository

git clone https://github.com/sofia-kindratyshyn/board-test-task.git
cd board-test-task/frontend

Install dependencies

npm install

Create .env file

NEXT_PUBLIC_API_URL=http://localhost:3000

Run the app

npm run dev

✅ How to Test the Functionality

To verify that everything works correctly:

Create a new board
→ Click on the “Create Board” button on the home screen.
→ Fill in the board name and description, then save.

Open the created board by ID
→ You’ll be redirected to the board page (/board/:boardId).
→ The board title and task columns (“ToDo”, “In Progress”, “Done”) will appear.

Add a new task
→ Click “+ Create task for this board”.
→ Fill in the title, description, and status.
→ Save the task — it will appear in the respective column.

Try Drag & Drop
→ Drag a task card from one column to another.
→ The status should update automatically.

🧩 Optional Commands
Command Description
npm run build Build for production
npm run lint Run ESLint
npm run preview Preview the production build
🧰 Developer Notes

If you encounter the error
Cannot find name 'process',
install Node type definitions:

npm i --save-dev @types/node
