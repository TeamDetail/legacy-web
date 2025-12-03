import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import SearchRuinsModal from "@components/map/SearchRuinsModal";
import Search from "@src/assets/search.svg?react";
import Calendar from "@src/assets/sidebarIcon/calendar.svg?react";
import InventoryIcon from "@src/assets/pageIcon/inventory.svg?react";
import DailyModal from "@components/daily/daily";
import useModalStore from "@src/store/useModalStore";
import Instagram from "@src/assets/instagram.svg?react";
import Info from "@src/assets/info.svg?react";
import Event from "@src/assets/star.svg?react";
import { useNavigate } from "react-router-dom";
import { Ruin } from "@src/types/map/ruin.type";
import EventModal from "@components/event/EventModal";

const AdventureMenu = ({
  handleSelectRuin,
}: {
  handleSelectRuin: (ruin: Ruin) => void;
}) => {
  const { setOpenModal, setCloseModal } = useModalStore();
  const navigate = useNavigate();

  return (
    <AdventureMenuContainer>
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
      <div
        onClick={() =>
          (location.href = "https://www.instagram.com/legacyofdetail")
        }
      >
        <Instagram width={22} height={22} />
      </div>
      <div
        onClick={() =>
          (location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSc4xnU5M9_L9YSQmXc30wcBx3Rp0J_IZSzVI-Jjisi4hVhrbw/viewform?usp=publish-editor")
        }
      >
        <Info width={22} height={22} />
      </div>
      <div
        onClick={() =>
          setOpenModal({
            element: <EventModal close={setCloseModal} />,
            key: "eventModal",
          })
        }
      >
        <Event width={22} height={22} />
      </div>
    </AdventureMenuContainer>
  );
};

export default AdventureMenu;

const AdventureMenuContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  gap: 12px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;

  div {
    flex-grow: 1;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${LegacyPalette.fillNormal};
    border-radius: 8px;
    cursor: pointer;
  }
`;
