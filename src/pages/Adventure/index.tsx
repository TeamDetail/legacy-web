import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import useMapPixel from "@src/hooks/map/useMapPixel";

const Adventure = () => {
  const { ruinDetail } = useMapPixel();

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap />
      </S.GoogleMapWrapper>

      <S.Container>
        <Sidebar />
      </S.Container>

      {ruinDetail && (
        <S.InfoPopup>
          <TileInfo/>
        </S.InfoPopup>
      )}
    </S.BackStage>
  );
};

export default Adventure;
