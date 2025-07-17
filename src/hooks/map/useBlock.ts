import { useGetMyBlock } from "@src/queries/map/map.queries";
import { MyBlockType } from "@src/types/map/normalBlock.type";
import { useEffect, useState } from "react";

const useBlock = () => {
  const { data: myBlock, refetch: getMyBlock } = useGetMyBlock();
  const [myNormalBlock, setMyNormalBlock] = useState<MyBlockType[]>([]);
  const [myRuinBlock, setMyRuinBlock] = useState<MyBlockType[]>([]);

  useEffect(() => {
    if (myBlock) {
      setMyNormalBlock(myBlock!.filter((item) => item.blockType === "NORMAL"));
      setMyRuinBlock(myBlock!.filter((item) => item.blockType === "RUINS"));
    }
  }, [myBlock]);

  return {
    myNormalBlock,
    myRuinBlock,
    getMyBlock,
  };
};

export default useBlock;
