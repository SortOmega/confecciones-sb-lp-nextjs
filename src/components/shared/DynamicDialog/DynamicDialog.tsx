'use client';

import { createElement, type MouseEvent, useEffect, useRef } from 'react';
import { useDynamicDialogStore } from '@/src/services/dynamic-dialog.service';
import './dynamic-dialog.scss';

type DynamicDialogProps = {
  id: string;
};

export function DynamicDialog({ id }: DynamicDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeDialogId = useDynamicDialogStore((state) => state.activeDialogId);
  const content = useDynamicDialogStore((state) => state.content);
  const isOpen = useDynamicDialogStore((state) => state.isOpen);
  const close = useDynamicDialogStore((state) => state.close);
  const isActiveDialog = activeDialogId === id;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isActiveDialog && isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [isActiveDialog, isOpen]);

  const handleClose = () => {
    close(id);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      close(id);
    }
  };

  const renderedContent =
    isActiveDialog && content
      ? typeof content === 'function'
        ? createElement(content)
        : content
      : null;

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className="dynamic-dialog"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="dynamic-dialog__content">{renderedContent}</div>
    </dialog>
  );
}