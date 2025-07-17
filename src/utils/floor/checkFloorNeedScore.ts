const floorGradeScore = [1000, 3000, 5000, 20000, 50000];

export const checkFloorNeedScore = (floor: number) => {
  return (floorGradeScore[Math.floor(floor/10)] * (floor%10 == 0 ? 10 : floor%10) * 0.1)
}