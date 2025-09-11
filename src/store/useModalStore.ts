import { create } from "zustand";

interface ModalDataType {
  isMailBoxOpen: boolean;
}

interface ModalStore {
  modalStoreData: ModalDataType;
  setModalData: (newData: ModalDataType) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modalStoreData: { isMailBoxOpen: false },
  setModalData: (newData) => set({ modalStoreData: newData }),
}));

export default useModalStore;
