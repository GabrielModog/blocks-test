import { LuArrowUpRight } from "react-icons/lu";

import {
  MAX_BLOCK_ITEM_WIDTH,
  MAX_BLOCK_ITEM_HEIGHT,
  MIN_BLOCK_ITEM_WIDTH,
  MIN_BLOCK_ITEM_HEIGHT,
} from "../Blocks.constants";
import { BlockItemProps } from "../Blocks.types";

const blockItemClassName = `max-w-[${MAX_BLOCK_ITEM_WIDTH}px] max-h-[${MAX_BLOCK_ITEM_HEIGHT}px] min-w-[${MIN_BLOCK_ITEM_WIDTH}px] min-h-[${MIN_BLOCK_ITEM_HEIGHT}px]`;

export function BlockItem({ id, premium, details, imageURL }: BlockItemProps) {
  return (
    <a href="#" role="listitem" data-testid={`${id}-blockitem`}>
      <div
        className={
          "grid grid-cols-1 rounded-md border border-gray-300" +
          blockItemClassName
        }
      >
        <div
          role="figure"
          aria-labelledby={`${id}-${details.name}`}
          className="flex justify-center items-center border-b overflow-hidden border-gray-300  min-h-[183px] max-h-[198px]"
        >
          <img
            src={imageURL}
            className="max-w-[136px] object-center object-fill rounded-md"
            alt={details.name}
          />
        </div>
        <div className="grid grid-cols-3 items-center py-2">
          <div className="col-span-2 leading-none text-left font-semibold text-[10px] indent-0 px-2">
            <p aria-label={details.name} className="text-gray-700">
              {details.name}
            </p>
          </div>

          <div className="col-span-1 flex items-center justify-center border-l border-gray-300 h-8">
            <LuArrowUpRight className="text-gray-700" />
          </div>
        </div>
      </div>
    </a>
  );
}
