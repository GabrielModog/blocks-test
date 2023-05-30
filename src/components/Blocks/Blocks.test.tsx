import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BlockList } from "./components/List";
import {
  BLOCKS_PROPS_MOCK_LIST,
  BLOCK_EMPTY_LIST_MESSAGE,
} from "./Blocks.constants";

describe("Blocks tests", () => {
  test("should render complete list of blocks", () => {
    render(<BlockList list={BLOCKS_PROPS_MOCK_LIST} />);
    for (let block of BLOCKS_PROPS_MOCK_LIST) {
      const element = screen.getByTestId(`${block.id}-blockitem`);
      expect(element).toBeInTheDocument();
    }
  });

  test("should warning if the blocks list is empty", () => {
    render(<BlockList list={[]} />);
    const element = screen.getByText(BLOCK_EMPTY_LIST_MESSAGE);
    expect(element).toBeInTheDocument();
  });
});
