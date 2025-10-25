import { useNavigate } from 'react-router-dom';
import styles from '../Home/Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to TaskBoards</h1>
        <p className={styles.subtitle}>
          Organize your projects, manage tasks, and boost productivity.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={() => navigate('/new-board')}>
            Create Board
          </button>
          <button className={styles.secondaryBtn} onClick={() => navigate('/boards-list')}>
            View Boards
          </button>
        </div>
      </div>
    </main>
  );
}
