import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { ReactNode } from 'react';

export function Draggable({ id, children }: { id: string; children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onPointerDownCapture={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-no-dnd]')) {
          e.stopPropagation();
        }
      }}
    >
      {children}
    </div>
  );
}
