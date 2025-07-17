export interface MyBlockType {
  blockId: number;
  ruinsId: number | null;
  blockType: "NORMAL" | "RUINS";
  latitude: number;
  longitude: number;
}
