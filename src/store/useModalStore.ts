import { ReactNode } from "react";
import { create } from "zustand";

interface ModalStore {
  element: ReactNode | null;
  isOpen: boolean;
  setOpenModal: (newData: ReactNode) => void;
  setCloseModal: () => void;
}
const useModalStore = create<ModalStore>((set) => ({
  element: null,
  isOpen: false,
  setCloseModal: () => set({ isOpen: false }),
  setOpenModal: (newElement) => {
    set({ element: newElement, isOpen: true });
  },
}));

export default useModalStore;
