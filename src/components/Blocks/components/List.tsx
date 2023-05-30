import { BlocksListProps } from "../Blocks.types";
import { BlockItem } from "./Item";
import { EmptyList } from "./Empty";

export function BlockList({ list }: BlocksListProps) {
  if (list?.length === 0 || list === undefined) return <EmptyList />;
  return (
    <div
      role="list"
      className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 my-2 relative"
    >
      {list.map((block) => (
        <BlockItem key={block.id} {...block} />
      ))}
    </div>
  );
}
