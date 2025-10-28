import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

export function Droppable({ id, children }: { id: string; children: ReactNode }) {
  const { setNodeRef } = useDroppable({ id });
  // const style = { opacity: isOver ? 1 : 0.5 };

  return <div ref={setNodeRef}>{children}</div>;
}
