import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const MailsSkeleton = () => {
  return (
    <>
      <MailItemContainer />
      <MailItemContainer />
      <MailItemContainer />
      <MailItemContainer />
      <MailItemContainer />
    </>
  );
};

export default MailsSkeleton;

const MailItemContainer = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  ${skeletonAnimtaion};
`;
