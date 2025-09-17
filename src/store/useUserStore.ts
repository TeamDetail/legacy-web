import { UserMe } from "@src/types/user/user.type";
import { create } from "zustand";

interface UserStore {
  userStoreData: UserMe;
  setUserData: (newData: UserMe) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userStoreData: {
    credit: 0,
    userId: 0,
    nickname: "",
    description: "",
    level: 1,
    record: {
      adventure: {
        rank: 0,
        allBlocks: 0,
        ruinsBlocks: 0,
        solvedQuizzes: 0,
        wrongQuizzes: 0,
        commentCount: 0,
        clearCourse: 0,
        makeCourse: 0,
      },
      experience: {
        rank: 0,
        adventureAchieve: 0,
        experienceAchieve: 0,
        hiddenAchieve: 0,
        exp: 0,
        createdAt: "",
        titleCount: 0,
        cardCount: 0,
        shiningCardCount: 0,
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
  setUserData: (newData: UserMe) => set({ 
    userStoreData: {
      ...newData,
      record: {
        ...newData.record,
        experience: {
          ...newData.record.experience,
          createdAt: newData.record.experience.createdAt.split('T')[0]
        }
      }
    }
  }),
}));

export default useUserStore;
