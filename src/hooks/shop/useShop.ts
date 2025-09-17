import shopApi from "@src/api/shop/shop.api";
import { useGetCardpack } from "@src/queries/shop/shop.query";
import { toast } from "react-toastify";

const useShop = () => {
  const { data: cardpacks } = useGetCardpack();

  const purchaseCardpackById = async (id: number) => {
    if (!id) {
      return;
    }
    try {
      const data = await shopApi.purchaseCardpackById(id);
      if (data) {
        toast.success("카드팩 구매 성공!");
      }
    } catch {
      toast.error("카드팩 구매 실패!");
    }
  };

  return {
    cardpacks,
    purchaseCardpackById,
  };
};

export default useShop;
