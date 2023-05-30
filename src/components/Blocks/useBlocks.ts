import { BlocksRepositoy } from "@/api/blocks";

export function useBlocks() {
  const blocksService = new BlocksRepositoy();

  return blocksService;
}
