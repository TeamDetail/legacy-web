// import { useCreateRunMutation } from "@src/queries/trial/trial.queries";
import useUserStore from "@src/store/useUserStore";
import { CardResponse } from "@src/types/card/card.type";
import { TrialState } from "@src/types/trial/trial.type";
import { checkFloorNeedScore } from "@src/utils/floor/checkFloorNeedScore";
import { useState } from "react";

export type FloorDataType = "baseNumber" | "plusMultiple" | "doubleMultiple"
export type CalcType = "ADD" | "SUB" | "MUL" | "DIV"

export const useTrial = () => {
	const { userStoreData, setUserData } = useUserStore();
	const [defalutTrialData] = useState<TrialState>({
		seed: "",
		deck: [],
		token: [],
		score: {
			floor: 1,
			coin: 0,
			playedCard: 0,
			droppedCard: 0,
			maxScore: 0,
			buyCount: 0,
			restockTime: 0,
		},
		stats: {
			snowflakeCapacity: 0,
			forcedRestock: 0,
			creditRecovery: 0,
			dropCount: 0,
		}
	})

  const [trialData] = useState<TrialState>(JSON.parse(localStorage.getItem('trialData') || JSON.stringify(defalutTrialData)));

	const createSeed = () => {
		return Math.random().toString(16).substring(2, 8);
	};

	// const createRunMutation = useCreateRunMutation();
	const runNewTrial = (choosedDeck: CardResponse[], enterPageFn: () => void) => {
		// createRunMutation.mutate({
		// 	seed: createSeed(),
		// 	deck: choosedDeck.map(item => item.cardId),
		// 	token: [],
		// 	score: defalutTrialData.score,
		// 	stats: userStoreData.stats
		// }, {
		// 	onSuccess: () => {
		// 		enterPageFn()
		// 	}
		// })
		localStorage.setItem("trialData", JSON.stringify({
			seed: createSeed(),
			deck: choosedDeck,
			token: [],
			score: defalutTrialData.score,
			stats: userStoreData.stats
		}))
		enterPageFn()
	}

	const [floorScoreData, setFloorScoreData] = useState<Record<FloorDataType, number>>({
		baseNumber: 0,
		plusMultiple: 0,
		doubleMultiple: 0,
	})

	const handleFloorNumberTo = (
    num: number,
    object: FloorDataType,
    type: CalcType
  ) => {
    setFloorScoreData((prev) => (
			type === "ADD" 
			? { ...prev, [object]: prev.baseNumber + num }
			: type === "SUB" 
				? { ...prev, [object]: (prev.baseNumber - num > 0) ? prev.baseNumber - num : 0 }
				: type === "DIV"
					? { ...prev, [object]: Math.floor(prev.baseNumber / num) }
					: { ...prev, [object]: prev.baseNumber * num }
		));
  };

	const checkWin = () => {
		if (floorScoreData.baseNumber * floorScoreData.doubleMultiple * floorScoreData.doubleMultiple <= checkFloorNeedScore(trialData.score.floor)) {
			console.log("You Win!")
		} else {
			console.log("You Lose..")
		}
	}

  return {
    trialData,
		defalutTrialData,
		checkWin,
		handleFloorNumberTo,
		runNewTrial,
  }
}
