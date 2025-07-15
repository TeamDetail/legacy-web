import { skeletonAnimtaion } from "@components/skeleton/animation";
import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

const SidebarUserInfoSkeleton = () => {
  return (
    <SidebarUserInfoContainer>
      <div />
      <section>
        <div />
        <div />
        <div />
      </section>
    </SidebarUserInfoContainer>
  );
};

const SidebarUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  > div {
    border-radius: 999px;
    width: 56px;
    height: 56px;
    background-color: ${LegacyPalette.fillNeutral};
    ${skeletonAnimtaion}
  }

  & section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 4px;
    > div {
      width: 100%;
      height: 16px;
      border-radius: 8px;
      background-color: ${LegacyPalette.fillNeutral};
      ${skeletonAnimtaion}
    }
  }
`;
export default SidebarUserInfoSkeleton;
