'use client';

import {
  createElement,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDynamicDialogStore } from '@/src/services/dynamic-dialog.service';
import './dynamic-dialog.scss';

export type DynamicDialogProps = {
  id: string;
  header?: ReactNode;
  draggable?: boolean;
  centerContent?: boolean;
  fullscreenToggle?: boolean;
  showCloseButton?: boolean;
};

type DialogPosition = {
  x: number;
  y: number;
};

export function DynamicDialog({
  id,
  header,
  draggable = false,
  centerContent = true,
  fullscreenToggle = false,
  showCloseButton = false,
}: DynamicDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dragStartRef = useRef<DialogPosition | null>(null);
  const [position, setPosition] = useState<DialogPosition>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
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
        setPosition({ x: 0, y: 0 });
        setIsFullscreen(false);
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

  const handleHeaderPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggable) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handleHeaderPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggable || !dragStartRef.current) {
      return;
    }

    setPosition({
      x: event.clientX - dragStartRef.current.x,
      y: event.clientY - dragStartRef.current.y,
    });
  };

  const handleHeaderPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragStartRef.current = null;
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen((currentValue) => !currentValue);
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
      className={`dynamic-dialog${draggable ? ' dynamic-dialog--draggable' : ''}${isFullscreen ? ' dynamic-dialog--fullscreen' : ''}`}
      style={{
        transform: isFullscreen
          ? 'none'
          : `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
      }}
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="dynamic-dialog__content">
        {header ? (
          <div
            className="dynamic-dialog__header"
            onPointerDown={handleHeaderPointerDown}
            onPointerMove={handleHeaderPointerMove}
            onPointerUp={handleHeaderPointerUp}
            onPointerCancel={handleHeaderPointerUp}
          >
            <div className="dynamic-dialog__header-content">{header}</div>
            {fullscreenToggle || showCloseButton ? (
              <div className="dynamic-dialog__actions">
                {fullscreenToggle ? (
                  <button
                    type="button"
                    className="dynamic-dialog__action"
                    aria-label={isFullscreen ? 'Restaurar ventana' : 'Ver en pantalla completa'}
                    title={isFullscreen ? 'Restaurar ventana' : 'Ver en pantalla completa'}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={handleFullscreenToggle}
                  >
                    {isFullscreen ? '↙' : '↗'}
                  </button>
                ) : null}
                {showCloseButton ? (
                  <button
                    type="button"
                    className="dynamic-dialog__action"
                    aria-label="Cerrar diálogo"
                    title="Cerrar diálogo"
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => close(id)}
                  >
                    ×
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        <div className={centerContent ? 'dynamic-dialog__body dynamic-dialog__body--centered' : 'dynamic-dialog__body'}>
          {renderedContent}
        </div>
      </div>
    </dialog>
  );
}