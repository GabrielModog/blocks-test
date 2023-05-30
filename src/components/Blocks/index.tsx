import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";

import { BlockList } from "./components/List";
import { useBlocks } from "./useBlocks";
import { EmptyList } from "./components/Empty";
import { Loading } from "./components/Loading";

export default function Blocks() {
  const observerTarget = useRef(null);
  const blocksService = useBlocks();

  async function fetchBlocks(pageParam = 10) {
    const fetched = await blocksService.getList(pageParam, 20);

    return fetched.data;
  }

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery(
    ["blocks"],
    ({ pageParam = 10 }) => fetchBlocks(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length * 10 + 10;
      },
    }
  );

  const pages = data?.pages;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <>
      {pages ? (
        pages.map((page, index) => <BlockList key={index} list={page} />)
      ) : (
        <EmptyList />
      )}
      {(isLoading || isFetching) && <Loading />}
      <div ref={observerTarget} />
    </>
  );
}
