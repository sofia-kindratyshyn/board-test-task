import { Draggable } from '../Draggable';
import styles from './TaskCard.module.css';

type TaskCardProps = {
  id?: string;
  title: string;
  description?: string;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
};

export default function TaskCard({ id, title, description, onDelete, onUpdate }: TaskCardProps) {
  return (
    <Draggable id={`${id}`}>
      <div className={styles.task}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {description && (
          <div className={styles.descriptionCntnr}>
            <p className={styles.description}>{description}</p>
          </div>
        )}

        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.delete}`}
            onClick={(e) => {
              e.stopPropagation();
              if (id && onDelete) onDelete(id);
            }}
          >
            Delete
          </button>

          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              if (id && onUpdate) onUpdate(id);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </Draggable>
  );
}
