import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oops!</h2>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
