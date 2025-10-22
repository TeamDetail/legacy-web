import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import { useState } from "react";
import { Ruin } from "@src/types/map/ruin.type";
import SearchRuinsModal from "@components/map/SearchRuinsModal";
import { LatLng } from "@src/types/map/latLng.type";
import Search from "@src/assets/search.svg?react";
import Info from "@src/assets/info.svg?react";
import Calendar from "@src/assets/sidebarIcon/calendar.svg?react";
import InventoryIcon from "@src/assets/pageIcon/inventory.svg?react";
import useBlock from "@src/hooks/map/useBlock";
import useModalStore from "@src/store/useModalStore";
import { useNavigate } from "react-router-dom";
import DailyModal from "@components/daily/daily";

const Adventure = () => {
  const [selectedRuins, setSelectedRuins] = useState<Ruin[] | null>(null);
  const [center, setCenter] = useState<LatLng>({ lat: 35.8722, lng: 128.6025 });
  const [zoomLevel, setZoomLevel] = useState<number>(11);
  const [isWarning, setIsWarning] = useState(false);
  const { setOpenModal, setCloseModal } = useModalStore();
  const navigate = useNavigate();

  const { myRuinBlock, getMyBlock } = useBlock();

  const handleSelectRuin = (ruin: Ruin) => {
    setSelectedRuins([ruin]);
    setCenter({ lat: ruin.latitude, lng: ruin.longitude });
    setZoomLevel(15);
  };

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap
          setSelectedRuins={setSelectedRuins}
          center={center}
          zoomLevel={zoomLevel}
          myRuinBlock={myRuinBlock}
          setIsWarning={setIsWarning}
        />
      </S.GoogleMapWrapper>
      <S.Container>
        <Sidebar />
      </S.Container>
      <S.InfoWrapper>
        <S.AdventureMenuContainer>
          <div
            onClick={() =>
              setOpenModal({
                element: (
                  <SearchRuinsModal
                    close={setCloseModal}
                    onSelectRuin={handleSelectRuin}
                  />
                ),
                key: "searchRuinsModal",
              })
            }
          >
            <Search width={22} height={22} />
          </div>
          <div onClick={() => navigate("/profile/inventory")}>
            <InventoryIcon width={22} height={22} />
          </div>

          <div
            onClick={() =>
              setOpenModal({
                element: <DailyModal close={setCloseModal} />,
                key: "dailyModal",
              })
            }
          >
            <Calendar width={22} height={22} />
          </div>
        </S.AdventureMenuContainer>
        {selectedRuins && (
          <TileInfo
            selectedRuins={selectedRuins}
            myRuinBlock={myRuinBlock}
            getMyBlock={getMyBlock}
          />
        )}
      </S.InfoWrapper>
      {isWarning && (
        <S.WarningMessageWrapper>
          <Info />
          <p>
            데이터를 불러오려면
            <br />
            지도를 더 확대시켜주세요.
          </p>
        </S.WarningMessageWrapper>
      )}
    </S.BackStage>
  );
};

export default Adventure;
