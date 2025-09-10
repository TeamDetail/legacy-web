import customAxios from "@src/libs/axios/customAxios";
import { CardpackResponse } from "@src/types/shop/cardpack.type";
import { toast } from "react-toastify";
import { QueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";

// 여기서 바로 인스턴스 생성
const queryClient = new QueryClient();

class ShopApi {
  public async getCardpack(): Promise<CardpackResponse> {
    const { data } = await customAxios.get("/store/cardpack");
    return data.data;
  }

  public async purchaseCardpackById(id: number) {
    try {
      const { data } = await customAxios.patch(`/store/cardBuy/${id}`);
      if (data) {
        toast.success(data);

        // 쿼리 무효화 → getCardpack 다시 요청
        await queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.shop.getCardpack,
        });

        return;
      }
    } catch {
      toast.error("카드팩 구매에 실패했어요!");
      return;
    }
  }
}

export default new ShopApi();
