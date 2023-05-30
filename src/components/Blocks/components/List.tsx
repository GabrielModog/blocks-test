import { BlocksListProps } from "../Blocks.types";
import { BlockItem } from "./Item";

export function BlockList({ list }: BlocksListProps) {
  if (list.length === 0) return <h3>No items to fetch</h3>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-2">
      {list.map((block) => (
        <BlockItem key={block.id} {...block} />
      ))}
    </div>
  );
}
