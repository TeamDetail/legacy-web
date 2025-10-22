import { useEffect, useState } from "react";
import * as S from "./style";
import { MenuBadge, MenuDataType } from "@components/common/MenuBadge";
import { LegacyPalette } from "@src/constants/color/color";
import { useGetDailyDataQuery } from "@src/queries/daily/daily.query";
import { ItemType } from "@src/types/inventory/inventory.type";
import LegacyButton from "@components/common/LegacyButton";
import dailyApi from "@src/api/daily/daily.api";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

interface SelectedDailyRewardType {
  idx: number | null;
  data: ItemType[];
}

const DailyDataContainer = () => {
  const queryClient = useQueryClient();
  const { data: dailyData } = useGetDailyDataQuery();
  const [dailyMenuData, setDailyMenuData] = useState<MenuDataType[]>([]);
  const [selectedDailyReward, setSelectedDailyReward] =
    useState<SelectedDailyRewardType>({ idx: null, data: [] });

  useEffect(() => {
    if (dailyData && dailyData.length > 0) {
      const formattedMenuData = dailyData.map((item, idx) => ({
        text: item.name,
        isAtv: idx === 0,
        value: item.id.toString(),
      }));
      setDailyMenuData(formattedMenuData);
      setSelectedDailyReward({
        idx: dailyData[0].checkCount,
        data: dailyData[0].awards[dailyData[0].checkCount],
      });
    }
  }, [dailyData]);

  const selectedDailyData = dailyData.find(
    (item) =>
      item.id.toString() === dailyMenuData.find((item) => item.isAtv)?.value
  );

  return (
    <S.DailyDataContainer>
      <MenuBadge
        menuData={dailyMenuData}
        setMenuData={setDailyMenuData}
        badgeColor={LegacyPalette.primaryNormal}
      />
      <S.DailyDataWrapper>
        <S.DailyCalendarContainer>
          <header>
            <p>기간</p>
            <p>
              {selectedDailyData?.startAt} ~ {selectedDailyData?.endAt}
            </p>
          </header>
          <div>
            {selectedDailyData?.awards.map((item, idx) => (
              <S.DailyCalendarItem
                disabled={idx < selectedDailyData.checkCount}
                key={idx}
                onClick={() => setSelectedDailyReward({ idx: idx, data: item })}
                $isSelected={selectedDailyReward.idx === idx}
              >
                {idx + 1}
              </S.DailyCalendarItem>
            ))}
          </div>
        </S.DailyCalendarContainer>
        {selectedDailyReward.idx !== null && (
          <S.DailyRewardContainer>
            <S.DailyRewardWrapper>
              {selectedDailyReward.idx + 1}일차 보상
              {selectedDailyReward.data.map((item, idx) => (
                <div key={idx}>
                  <p>{item.itemName}</p>
                  <p>× {item.itemCount}</p>
                </div>
              ))}
            </S.DailyRewardWrapper>
            <LegacyButton
              size="default"
              isBold
              isFilled={false}
              color={
                selectedDailyReward.idx === selectedDailyData?.checkCount &&
                !selectedDailyData.check
                  ? LegacyPalette.primaryNormal
                  : LegacyPalette.labelDisabled
              }
              children={
                <S.ButtonText
                  $disabled={
                    selectedDailyReward.idx !== selectedDailyData?.checkCount ||
                    selectedDailyData.check
                  }
                >
                  출석하기
                </S.ButtonText>
              }
              width="100%"
              handleClick={async () => {
                if (
                  selectedDailyData?.checkCount === selectedDailyReward.idx &&
                  !selectedDailyData.check
                ) {
                  dailyApi
                    .getDailyReward(selectedDailyData.id)
                    .then(() => {
                      toast.success(
                        <div>
                          출석 보상을 받았어요!
                          <br />
                          인벤토리를 확인해 주세요.
                        </div>
                      );
                      queryClient.invalidateQueries({ queryKey: ["getDailyData"] });
                    })
                    .catch(() => toast.error("출석 보상 받기를 실패했어요."));
                }
              }}
            />
          </S.DailyRewardContainer>
        )}
      </S.DailyDataWrapper>
    </S.DailyDataContainer>
  );
};

export default DailyDataContainer;
