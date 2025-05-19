import { Route, Routes } from "react-router-dom";
import Card from "./common/Card";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Card
            cardId={1}
            nationAttributeId={10}
            regionAttributeId={10}
            lineAttributeId={10}
            cardName="대구소프트웨어마이스터고등학교"
            cardImageUrl="https://picsum.photos/200/300"
            cardType="SHINE"
            size="M"
          />
        }
      />
    </Routes>
  );
};

export default Router;
