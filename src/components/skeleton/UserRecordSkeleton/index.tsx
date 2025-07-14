import { skeletonAnimtaion } from "@components/skeleton/animation"
import { LegacyPalette } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken"
import styled from "styled-components"

const UserRecordSkeleton = () => {
  return (
    <UserRecordSkeletonContainer>
      <UserRecordProcessBar>
        <div/><div/><div/>
      </UserRecordProcessBar>
      <UserRecordMain>
        기록
        <div/><div/><div/><div/>
      </UserRecordMain>
    </UserRecordSkeletonContainer>
  )
}

const UserRecordSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: userrecord;
  gap: 12px;
`

const UserRecordProcessBar = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  gap: 12px;
  padding: 24px;
  background-color: ${LegacyPalette.backgroundNormal};
  > div {
    width: 100%;
    height: 28px;
    border-radius: 8px;
    ${skeletonAnimtaion}
  }
`

const UserRecordMain = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 16px;
  gap: 12px;
  padding: 24px;
  background-color: ${LegacyPalette.backgroundNormal};
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  > div {
    width: 100%;
    height: 68px;
    border-radius: 8px;
    ${skeletonAnimtaion}
  }
`
export default UserRecordSkeleton