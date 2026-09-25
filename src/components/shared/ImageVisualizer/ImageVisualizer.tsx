'use client';

import {
  type PointerEvent,
  type WheelEvent,
  useRef,
  useState,
} from 'react';
import './image-visualizer.scss';

export type ImageVisualizerProps = {
  src: string;
  alt: string;
  className?: string;
};

type ImagePosition = {
  x: number;
  y: number;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

export function ImageVisualizer({ src, alt, className = '' }: ImageVisualizerProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<ImagePosition | null>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState<ImagePosition>({ x: 0, y: 0 });

  const updateZoom = (nextZoom: number) => {
    const boundedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));

    setZoom(boundedZoom);
    if (boundedZoom === MIN_ZOOM) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || zoom === MIN_ZOOM) {
      return;
    }

    setPosition({
      x: event.clientX - dragStartRef.current.x,
      y: event.clientY - dragStartRef.current.y,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragStartRef.current = null;
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateZoom(zoom + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
  };

  const resetImage = () => {
    setZoom(MIN_ZOOM);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className={`image-preview ${className}`.trim()} aria-label={`Vista previa de ${alt}`}>
      <div
        ref={viewportRef}
        className={`image-preview__viewport${zoom > MIN_ZOOM ? ' image-preview__viewport--zoomed' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
      >
        <img
          src={src}
          alt={alt}
          className="image-preview__image"
          draggable={false}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
          }}
        />
      </div>

      <div className="image-preview__toolbar" aria-label="Controles de imagen">
        <button type="button" onClick={() => updateZoom(zoom - ZOOM_STEP)} aria-label="Alejar" title="Alejar">
          −
        </button>
        <span aria-live="polite">{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => updateZoom(zoom + ZOOM_STEP)} aria-label="Acercar" title="Acercar">
          +
        </button>
        <button type="button" onClick={() => setRotation((current) => current - 90)} aria-label="Rotar a la izquierda" title="Rotar a la izquierda">
          ↺
        </button>
        <button type="button" onClick={() => setRotation((current) => current + 90)} aria-label="Rotar a la derecha" title="Rotar a la derecha">
          ↻
        </button>
        <button type="button" onClick={resetImage} aria-label="Restablecer imagen" title="Restablecer imagen">
          Restablecer
        </button>
      </div>
    </section>
  );
}