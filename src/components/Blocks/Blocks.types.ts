export interface BlockItemDetails {
  name: string;
  description: string;
}

export interface IBlockItem {
  id: string;
  premium: boolean;
  details: BlockItemDetails;
}

export interface BlockItemProps extends IBlockItem {
  imageURL: string;
}

export interface BlocksListProps {
  list: BlockItemProps[];
}
