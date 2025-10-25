import styles from './BoardSearch.module.css';

interface BoardSearchProps {
  value: string;
  setValue: (value: string) => void;
}

export default function BoardSearch({ value, setValue }: BoardSearchProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project Boards</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search by board ID..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
