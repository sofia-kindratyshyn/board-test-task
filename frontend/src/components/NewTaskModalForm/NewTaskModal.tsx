import { useEffect } from 'react';
import css from './NewTaskModal.module.css';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { toast } from 'react-toastify';
import type { Task } from '../../types/task';
import { createTask, updateTask } from '../../services/taskService';

interface AddTaskModalProps {
  isOpen: boolean;
  initialData?: Task;
  onTaskSaved: (task: Task) => void;
  onClose: () => void;
  boardId: string;
}

export default function AddTaskModal({
  isOpen,
  initialData,
  onTaskSaved,
  onClose,
  boardId,
}: AddTaskModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (values: Task) => {
    try {
      let response;
      if (initialData?._id) {
        response = await updateTask(boardId, initialData._id, values);
      } else {
        response = await createTask(boardId, values);
      }
      onTaskSaved(response.data);
      toast.success(initialData?._id ? 'Task updated!' : 'Task created!');
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error('Ooops, there was some error');
    } finally {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>{initialData?._id ? 'Edit Task' : 'New Task'}</h2>
        <button className={css.closeBtn} onClick={onClose} aria-label="Close modal">
          ✖
        </button>

        <AddTaskForm initialData={initialData} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
