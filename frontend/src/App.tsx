import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import NewBoardForm from '../src/pages/NewBoardForm/NewBoardForm';
import BoardsList from './components/BoardsList/BoardsList';
import BoardColumn from './pages/BoardColumns/BoardColumns';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-board" element={<NewBoardForm />} />
      <Route path="/board/:id" element={<BoardColumn />} />
      <Route path="/boards-list" element={<BoardsList />} />
    </Routes>
  );
}
