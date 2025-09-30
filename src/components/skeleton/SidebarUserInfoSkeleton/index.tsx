import { skeletonAnimtaion } from "@components/skeleton/animation";
import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

const SidebarUserInfoSkeleton = () => {
  return (
    <SidebarUserInfoWrapper>
      <SidebarUserInfoContainer>
        <div />
        <section>
          <div />
          <div />
          <div />
        </section>
      </SidebarUserInfoContainer>
      <CreditText />
    </SidebarUserInfoWrapper>
  );
};

const SidebarUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const CreditText = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  ${skeletonAnimtaion};
`;

const SidebarUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  > div {
    border-radius: 8px;
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
