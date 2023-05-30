import { useInfiniteQuery } from "react-query";

import { BlockList } from "./components/List";
import { useBlocks } from "./useBlocks";

export default function Blocks() {
  const blocksService = useBlocks();

  async function fetchBlocks(pageParam = 10) {
    const fetched = await blocksService.getList(pageParam, 10);

    return fetched.data;
  }

  const { data, fetchNextPage } = useInfiniteQuery(
    ["blocks"],
    ({ pageParam = 10 }) => fetchBlocks(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length === 4) return false;
        return pages.length * 10 + 10;
      },
    }
  );

  const pages = data?.pages;

  return (
    <>
      {pages &&
        pages.map((page, index) => <BlockList key={index} list={page} />)}
    </>
  );
}
