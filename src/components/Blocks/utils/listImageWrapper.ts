import { BlocksRepositoy } from "@/api/blocks";
import { IBlockItem } from "../Blocks.types";

export function listImageWrapper(list: IBlockItem[]) {
  const blocksService = new BlocksRepositoy();

  const putImage = list.map((item) => ({
    ...item,
    imageURL: blocksService.getImageById(item.id),
  }));

  return putImage;
}
