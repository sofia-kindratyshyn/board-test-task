import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { Task } from '../../types/task';
import { deleteTask, getTasks, updateTask } from '../../services/taskService';
import { toast, ToastContainer } from 'react-toastify';
import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';

import { Droppable } from '../../components/Dropable';
import styles from './BoardColumn.module.css';
import TaskCard from '../../components/TaskCard/TaskCard';
import AddTaskModal from '../../components/NewTaskModalForm/NewTaskModal';
import { ClipLoader } from 'react-spinners';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function BoardColumn() {
  const { id: boardId } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const [modalData, setModalData] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isPending, error, refetch } = useQuery<Task[]>({
    queryKey: ['tasks', boardId],
    queryFn: () => getTasks(boardId!),
    enabled: !!boardId,
  });

  const deleteMutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(boardId!, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', boardId] });
      toast.success('Successfully deleted task!', { autoClose: 300 });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ taskId, status }: { taskId: string; status: Task['status'] }) =>
      updateTask(boardId!, taskId, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', boardId] });
    },
  });

  const handleTaskSaved = () => {
    queryClient.invalidateQueries({ queryKey: ['tasks', boardId] });
  };

  const handleDelete = (id: string) => deleteMutation.mutate(id);

  const handleUpdate = (task: Task) => {
    setModalData(task);
    setIsModalOpen(true);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const newStatus = over?.id as Task['status'];
      updateStatusMutation.mutate({ taskId: active.id as string, status: newStatus });
    }
  };

  if (isPending)
    return (
      <div className={styles.loaderBox}>
        <ClipLoader />
      </div>
    );
  if (error)
    return (
      <div className={styles.errorBox}>
        <ErrorMessage message="Ooops...There was an error while getting tasks" />
        <button className={styles.tryAgainBtn} onClick={() => refetch()}>
          Try Again
        </button>
      </div>
    );

  const todo = data?.filter((task) => task.status === 'ToDo') ?? [];
  const inProgress = data?.filter((task) => task.status === 'In Progress') ?? [];
  const done = data?.filter((task) => task.status === 'Done') ?? [];

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className={styles.board}>
        <ToastContainer />
        <div className={styles.boardHeaderContainer}>
          <h1 className={styles.title}>Project Board #{boardId}</h1>
          <button className={styles.backButton} onClick={() => navigate('/boards-list')}>
            ← Back to board list
          </button>
        </div>

        <div className={styles.columns}>
          {[
            { status: 'ToDo', tasks: todo },
            { status: 'In Progress', tasks: inProgress },
            { status: 'Done', tasks: done },
          ].map(({ status, tasks }) => (
            <Droppable key={status} id={status}>
              <section className={styles.column}>
                <div className={styles.columnContainer}>
                  <h2 className={styles.columnTitle}>{status}</h2>
                  <p>({tasks.length} tasks)</p>
                </div>
                {tasks.map((task) => (
                  <TaskCard
                    key={task._id}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    onDelete={handleDelete}
                    onUpdate={() => handleUpdate(task)}
                  />
                ))}
              </section>
            </Droppable>
          ))}
        </div>

        <button
          className={styles.createBtn}
          onClick={() => {
            setModalData(null);
            setIsModalOpen(true);
          }}
        >
          + Create task for this board
        </button>

        {isModalOpen && (
          <AddTaskModal
            isOpen={isModalOpen}
            initialData={modalData ?? undefined}
            boardId={boardId!}
            onTaskSaved={handleTaskSaved}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </DndContext>
  );
}
