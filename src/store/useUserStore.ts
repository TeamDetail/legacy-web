import { User } from "@src/types/user/user.type";
import { create } from "zustand";

interface UserStore {
  userStoreData: User;
  setUserData: (newData: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userStoreData: {
    userId: 0,
    nickname: "",
    level: 0,
    exp: 0,
    credit: 0,
    stats: {
      snowflakeCapacity: 0,
      storeRestock: 0,
      creditCollect: 0,
      dropCount: 0,
    },
    record: {
      allBlocks: 0,
      ruinsBlocks: 0,
      maxFloor: 0,
      maxScore: 0,
      cardCount: 0,
      shiningCardCount: 0,
    },
    imageUrl: "",
    title: {
      name: "",
      content: "",
      styleId: 0,
    },
  },
  setUserData: (newData) => set({ userStoreData: newData }),
}));

export default useUserStore;
