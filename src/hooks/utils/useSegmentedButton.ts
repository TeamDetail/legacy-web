import { SegmentedBtnDataProps } from "@components/common/LegacySegmentedButton";
import { useState } from "react";

export const useSegmentedButton = (defaultPageData: SegmentedBtnDataProps[],) => {
  const [pageData, setPageData] = useState<SegmentedBtnDataProps[]>(defaultPageData);
  const [choosedPageNumber, setChoosedPageNuber] = useState(0);

  const handleClickPage = (text: string) => {
    setPageData((prev) => 
      prev.map((item) => ({ ...item, isAtv: item.text === text }))
    );
    setChoosedPageNuber(pageData.findIndex(item => text === item.text))
  };

  return {
    handleClickPage,
    pageData,
    setPageData,
    choosedPageNumber,
  }
}