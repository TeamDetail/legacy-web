import { ReactNode } from "react";
import { create } from "zustand";

type ModalDataType = {
  element: ReactNode | null;
  key: string | null;
}
interface ModalStore {
  modalData: ModalDataType
  isOpen: boolean;
  setOpenModal: (newData: ModalDataType) => void;
  setCloseModal: () => void;
}
const useModalStore = create<ModalStore>((set) => ({
  modalData: {
    element: null,
    key: null
  },
  isOpen: false,
  setCloseModal: () => set({ isOpen: false }),
  setOpenModal: (data) => {
    set({
      modalData: {
        element: data.element,
        key: data.key
      },
      isOpen: true
    });
  },
}));

export default useModalStore;