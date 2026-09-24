import { create } from 'zustand';
import type { ComponentType, ReactNode } from 'react';

export type DynamicDialogContent = ReactNode | ComponentType;

type DynamicDialogState = {
  activeDialogId: string | null;
  content: DynamicDialogContent | null;
  isOpen: boolean;
  open: (id: string, content: DynamicDialogContent) => void;
  close: (id?: string) => void;
  toggle: (id: string, content: DynamicDialogContent) => void;
};

export const useDynamicDialogStore = create<DynamicDialogState>((set, get) => ({
  activeDialogId: null,
  content: null,
  isOpen: false,
  open: (id, content) => set({ activeDialogId: id, content, isOpen: true }),
  close: (id) => {
    const { activeDialogId } = get();

    if (!id || id === activeDialogId) {
      set({ activeDialogId: null, content: null, isOpen: false });
    }
  },
  toggle: (id, content) => {
    const { activeDialogId, isOpen } = get();

    if (activeDialogId === id && isOpen) {
      set({ activeDialogId: null, content: null, isOpen: false });
      return;
    }

    set({ activeDialogId: id, content, isOpen: true });
  },
}));

export const dynamicDialogService = {
  open(id: string, content: DynamicDialogContent) {
    useDynamicDialogStore.getState().open(id, content);
  },
  close(id?: string) {
    useDynamicDialogStore.getState().close(id);
  },
  toggle(id: string, content: DynamicDialogContent) {
    useDynamicDialogStore.getState().toggle(id, content);
  },
};
