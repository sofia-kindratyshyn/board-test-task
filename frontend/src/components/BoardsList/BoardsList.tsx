import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import styles from './BoardsList.module.css';
import { deleteBoard, getBoards } from '../../services/boardTask';
import type { Board } from '../../types/board';
import { useNavigate } from 'react-router-dom';
import BoardSearch from '../BoardSearch/BoardSearch';
import { useDebounce } from 'use-debounce';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function BoardsList() {
  const [searchValue, setSearchValue] = useState('');
  const [debounceValue] = useDebounce(searchValue, 600);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, error, data, refetch } = useQuery<Board[]>({
    queryKey: ['boards', debounceValue],
    queryFn: () => getBoards(debounceValue),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (boardId: string) => deleteBoard(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      toast.success('Successfully deleted task!', {
        autoClose: 200,
      });
    },
    onError: (err) => {
      console.error('Error deleting board:', err);
    },
  });

  if (error)
    return (
      <div>
        <ErrorMessage message="Ooops...There was an error while getting boards" />
        <button className={styles.tryAgainBtn} onClick={() => refetch()}>
          Try Again
        </button>
      </div>
    );
  if (isPending)
    return (
      <div className={styles.loaderBox}>
        <ClipLoader />
      </div>
    );

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.srchContainer}>
        <BoardSearch value={searchValue} setValue={setSearchValue} />
        <button className={styles.primaryBtn} onClick={() => navigate('/new-board')}>
          + Create Board
        </button>
      </div>
      <ul className={styles.list}>
        {data && data.length > 0 ? (
          data.map((board: Board) => (
            <li
              key={board._id}
              className={styles.card}
              onClick={() => navigate(`/board/${board._id}`)}
            >
              <div className={styles.header}>
                <div className={styles.id}>#{board._id}</div>
                <button
                  className={styles.deleteBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteMutation.mutate(board._id);
                  }}
                  disabled={deleteMutation.isPending}
                >
                  {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                </button>
              </div>

              <div className={styles.name}>{board.name}</div>
              <div className={styles.description}>{board.description}</div>
            </li>
          ))
        ) : (
          <li className={styles.emptyMessage}>Boards not found</li>
        )}
      </ul>
    </div>
  );
}
