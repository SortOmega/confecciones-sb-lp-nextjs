'use client';
import './ServiceCard.scss';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';

type ServiceCardStyle = CSSProperties & {
  '--pointer-x'?: string;
  '--pointer-y'?: string;
  '--rotate-x'?: string;
  '--rotate-y'?: string;
};

type ServiceCardProps = {
  children: ReactNode;
};

export function ServiceCard({ children }: ServiceCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100;
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100;
    const rotateX = ((50 - pointerY) / 50) * 7;
    const rotateY = ((pointerX - 50) / 50) * 7;

    event.currentTarget.style.setProperty('--pointer-x', `${pointerX}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${pointerY}%`);
    event.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
    event.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '50%');
    event.currentTarget.style.setProperty('--rotate-x', '0deg');
    event.currentTarget.style.setProperty('--rotate-y', '0deg');
  };

  const style: ServiceCardStyle = {
    '--pointer-x': '50%',
    '--pointer-y': '50%',
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
  };

  return (
    <div
      className="service-item"
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
