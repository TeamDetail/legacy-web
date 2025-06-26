import { User } from "@src/types/user/user.type";
import { create } from "zustand";

interface UserStore {
  userStoreData: User;
  setUserData: (newData: User) => void;
}

const useUserStore = create<UserStore>(set => ({
  userStoreData: {
    nickname: '',
    level: 0,
    exp: 0,
    credit: 0,
    stats: {
      snowflakeCapacity: 0,
      forcedRestock: 0,
      creditRecovery: 0,
      dropCount: 0,
    },
    allBlocks: 0,
    ruinsBlocks: 0,
    maxFloor: 0,
    maxScore: 0,
    imageUrl: '',
    title: {
      name: '',
      content: '',
    },
  },
  setUserData: (newData) => set({userStoreData: newData})
}))

export default useUserStore;