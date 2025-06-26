import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

const SidebarUserInfoSkeleton = () => {
  return (
    <SidebarUserInfoContainer>
      <SidebarImageSkeleton />
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

  & img {
    border-radius: 999px;
    width: 56px;
    height: 56px;
    background-color: ${LegacyPalette.fillNeutral};
  }

  & section {
    display: flex;
    flex-direction: column;
  }
`;

const SidebarImageSkeleton = styled.div`
  border-radius: 999px;
  width: 56px;
  height: 56px;
`;

export default SidebarUserInfoSkeleton;
