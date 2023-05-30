import { useQuery } from "react-query";
import { BlockList } from "./components/List";
import { useBlocks } from "./useBlocks";

export default function Blocks() {
  const blocksService = useBlocks();
  const result = useQuery("blocks", async () => {
    const fetched = await blocksService.getList();
    return fetched;
  });
  const data = result.data?.data;

  return <BlockList list={data} />;
}
