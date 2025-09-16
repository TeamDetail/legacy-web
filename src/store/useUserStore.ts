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
    description: "",
    level: 1,
    record: {
      adventure: {
        rank: 0,
        allBlocks: 0,
        ruinsBlocks: 0,
        solvedQuizs: 0,
        wrongQuizs: 0,
        commentCount: 0,
        clearCourse: 0,
        makeCourse: 0,
      },
      experience: {
        rank: 0,
        adventureAchieve: 999,
        experienceAchieve: 1000,
        hiddenAchieve: 20,
        createdAt: "",
        titleCount: 0,
        cardCount: 0,
      },
    },
    imageUrl: "",
    title: {
      name: "",
      content: "",
      titleId: 0,
      grade: 1,
    },
  },
  setUserData: (newData) => set({ userStoreData: newData }),
}));

export default useUserStore;
