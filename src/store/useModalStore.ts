import { create } from "zustand";

type ModalDataType = "MAIL" | "SETTING" | null;

interface ModalStore {
  modalStoreData: ModalDataType;
  isOpen: boolean;
  setOpenModal: (newData: ModalDataType) => void;
  setCloseModal: () => void;
}
const useModalStore = create<ModalStore>((set) => ({
  modalStoreData: null,
  isOpen: false,
  setCloseModal: () => set({ isOpen: false }),
  setOpenModal: (newData) => {
    set({ modalStoreData: newData, isOpen: true });
  },
}));

export default useModalStore;
