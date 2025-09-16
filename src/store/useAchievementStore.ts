import { Achievement, AchievementValueType } from "@src/types/achievement/achievement.type"
import { create } from "zustand";

type AchievementStore = {
  exploreAchieveStoreData: Achievement[];
  levelAchieveStoreData: Achievement[];
  hiddenAchieveStoreData: Achievement[];
  setAchievementStoreData: (
    newData: Achievement[],
    type: AchievementValueType
  ) => void;
  selectedAchievementData:
    | (Achievement & { valueType: AchievementValueType })
    | null;
  selectAchievement: (
    data: Achievement & { valueType: AchievementValueType }
  ) => void;
};

const useAchievementStore = create<AchievementStore>((set) => ({
  selectedAchievementData: null,
  selectAchievement: (data) => set({selectedAchievementData: data}),
  exploreAchieveStoreData: [
    {
      achievementId: 0,
      achievementName: "",
      achievementContent: "",
      achievementAward: [
        {
          itemId: 0,
          itemName: "",
          itemType: "CARD_PACK",
          itemCount: 0,
          itemDescription: "",
        },
      ],
      achieveUserPercent: 0,
      achievementType: "BLOCKS",
      isReceive: false,
      currentRate: 0,
      goalRate: 1,
      grade: "COMMON",
    },
  ],
  levelAchieveStoreData: [
    {
      achievementId: 0,
      achievementName: "",
      achievementContent: "",
      achievementAward: [
        {
          itemId: 0,
          itemName: "",
          itemType: "CARD_PACK",
          itemCount: 0,
          itemDescription: "",
        },
      ],
      achieveUserPercent: 0,
      achievementType: "BLOCKS",
      isReceive: false,
      currentRate: 0,
      goalRate: 1,
      grade: "COMMON",
    },
  ],
  hiddenAchieveStoreData: [
    {
      achievementId: 0,
      achievementName: "",
      achievementContent: "",
      achievementAward: [
        {
          itemId: 0,
          itemName: "",
          itemType: "CARD_PACK",
          itemCount: 0,
          itemDescription: "",
        },
      ],
      achieveUserPercent: 0,
      achievementType: "BLOCKS",
      isReceive: false,
      currentRate: 0,
      goalRate: 1,
      grade: "COMMON",
    },
  ],
  setAchievementStoreData: (newData, type) => {
    set(
      type === "EXPLORE"
        ? { exploreAchieveStoreData: newData }
        : type === "LEVEL"
        ? { levelAchieveStoreData: newData }
        : { hiddenAchieveStoreData: newData }
    );
  },
}));

export default useAchievementStore;