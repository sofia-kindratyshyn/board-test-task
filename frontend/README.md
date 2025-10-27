# 🎨 TaskBoards Frontend (React + TypeScript + Vite)

This is the **frontend** part of the TaskBoards project — a simple and elegant web application for creating boards, organizing tasks, and improving productivity.

Built with:

- ⚛️ **React 18**
- 🌀 **Vite**
- 🧩 **TypeScript**
- 🎨 **CSS Modules**
- 🔁 **TanStack Query**
- 🧭 **React Router v6**

---

## 🚀 Features

✅ Fast and lightweight setup powered by **Vite**
✅ **TypeScript** for strict typing and safety
✅ Modular **CSS Modules** styling
✅ Organized code with **components**, **pages**, and **services**
✅ API integration via **Axios**
✅ React Query for optimized data fetching
✅ Routing with **React Router**
✅ Clean folder structure for scalability

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/your-username/taskboards.git

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install
```

---

## 🧑‍💻 Development

Run the project in development mode with hot reload (HMR):

```bash
npm run dev
```

Then open:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🏗️ Build for production

To create a production build:

```bash
npm run build
```

Then preview it locally:

```bash
npm run preview
```

---

## ⚙️ Environment Variables

Create a `.env` file in the `frontend/` directory with your API base URL:

```
VITE_API_URL=http://localhost:3000
```

In code, you can access it as:

```ts
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
```

---

## 🧰 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build production bundle  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🧩 ESLint Configuration

The project uses ESLint with TypeScript and React support.
You can expand it to include type-aware rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommendedTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

You can also add extra plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

---

## 🧱 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.cjs
├── tsconfig.json
└── vite.config.ts
```

---

## 🧭 Tech Stack

| Tool               | Purpose       |
| ------------------ | ------------- |
| **React**          | UI library    |
| **Vite**           | Build tool    |
| **TypeScript**     | Type safety   |
| **TanStack Query** | Data fetching |
| **Axios**          | API requests  |
| **React Router**   | Navigation    |
| **CSS Modules**    | Styling       |

---

## 💡 Future Improvements

- [ ] Add dark/light theme switch
- [ ] Add authentication and user profiles
- [ ] Improve board filtering and search
