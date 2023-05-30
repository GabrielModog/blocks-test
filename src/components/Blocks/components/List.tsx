import { forwardRef } from "react";

import { BlocksListProps } from "../Blocks.types";
import { BlockItem } from "./Item";
import { Loading } from "./Loading";

export function BlockList({ list, isLoading }: BlocksListProps) {
  if (isLoading)
    return (
      <div className="h-52">
        <Loading />
      </div>
    );
  if (list?.length === 0 || list === undefined)
    return <h3>Nothing yet to show...</h3>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 my-2">
      {list.map((block) => (
        <BlockItem key={block.id} {...block} />
      ))}
    </div>
  );
}
