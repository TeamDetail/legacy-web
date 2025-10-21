import { LegacyPalette } from "@src/constants/color/color";
import * as S from "./style";
import Calendar from "@src/assets/sidebarIcon/calendar.svg?react";
import Close from "@src/assets/close.svg?react";
import DailyDataContainer from "./dailyDataContainer";
import { Suspense } from "react";
import DailyDataSkeleton from "@components/skeleton/DailyDataSkeleton";

const DailyModal = ({ close }: { close: () => void }) => {
  return (
    <S.DailyModalContainer>
      <header>
        <div>
          <Calendar fill={LegacyPalette.labelNormal} width={32} height={32} />
          출석체크
        </div>
        <Close width={28} height={28} onClick={close} />
      </header>
      <Suspense fallback={<DailyDataSkeleton />}>
        <DailyDataContainer />
      </Suspense>
    </S.DailyModalContainer>
  );
};

export default DailyModal;
