import { BLOCK_ITEM_WIDTH } from "../Blocks.constants";
import { BlockItemProps } from "../Blocks.types";

const blockItemClassName = `w-[${BLOCK_ITEM_WIDTH}px] h-[${BLOCK_ITEM_WIDTH}px]`;

export function BlockItem({ id, premium, details }: BlockItemProps) {
  return (
    <div
      className={
        "grid grid-cols-1 rounded-md border border-gray-300 " +
        blockItemClassName
      }
    >
      <div className="border-b overflow-hidden border-gray-300 h-[137px]">
        <img
          src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`}
        />
      </div>
      <div className="grid grid-cols-3 items-center py-2">
        <div className="col-span-2 leading-none text-left font-semibold text-[10px] indent-0 px-2">
          <p>{details.name}</p>
        </div>
        <div className="col-span-1 border-l border-gray-300 h-8">Link</div>
      </div>
    </div>
  );
}
