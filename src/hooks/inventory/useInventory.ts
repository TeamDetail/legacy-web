import { useGetMyInventory } from "@src/queries/inventory/inventory.query";

const useInventory = () => {
  const { data: myInventory } = useGetMyInventory();

  return {
    myInventory,
  };
};

export default useInventory;
