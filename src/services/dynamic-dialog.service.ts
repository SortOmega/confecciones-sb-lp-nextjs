import { create } from 'zustand';
import type { ComponentType, ReactNode } from 'react';

export type DynamicDialogContent = ReactNode | ComponentType;

export type DynamicDialogOptions = {
  header?: ReactNode;
  draggable?: boolean;
  centerContent?: boolean;
  defaultFullscreen?: boolean;
  fullscreenToggle?: boolean;
  showCloseButton?: boolean;
};

type DynamicDialogState = {
  activeDialogId: string | null;
  content: DynamicDialogContent | null;
  options: DynamicDialogOptions;
  isOpen: boolean;
  open: (id: string, content: DynamicDialogContent, options?: DynamicDialogOptions) => void;
  close: (id?: string) => void;
  toggle: (id: string, content: DynamicDialogContent, options?: DynamicDialogOptions) => void;
};

export const useDynamicDialogStore = create<DynamicDialogState>((set, get) => ({
  activeDialogId: null,
  content: null,
  options: {},
  isOpen: false,
  open: (id, content, options = {}) => set({ activeDialogId: id, content, options, isOpen: true }),
  close: (id) => {
    const { activeDialogId } = get();

    if (!id || id === activeDialogId) {
      set({ activeDialogId: null, content: null, options: {}, isOpen: false });
    }
  },
  toggle: (id, content, options = {}) => {
    const { activeDialogId, isOpen } = get();

    if (activeDialogId === id && isOpen) {
      set({ activeDialogId: null, content: null, options: {}, isOpen: false });
      return;
    }

    set({ activeDialogId: id, content, options, isOpen: true });
  },
}));

export const dynamicDialogService = {
  open(id: string, content: DynamicDialogContent, options?: DynamicDialogOptions) {
    useDynamicDialogStore.getState().open(id, content, options);
  },
  close(id?: string) {
    useDynamicDialogStore.getState().close(id);
  },
  toggle(id: string, content: DynamicDialogContent, options?: DynamicDialogOptions) {
    useDynamicDialogStore.getState().toggle(id, content, options);
  },
};
