import shopApi from "@src/api/shop/shop.api";
import { useGetCardpack } from "@src/queries/shop/shop.query";

const useShop = () => {
  const { data: cardpacks } = useGetCardpack();

  const purchaseCardpackById = (id: number) => {
    shopApi.purchaseCardpackById(id);
  };

  return {
    cardpacks,
    purchaseCardpackById,
  };
};

export default useShop;
