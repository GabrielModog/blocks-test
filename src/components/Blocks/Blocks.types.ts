export interface BlockItemDetails {
  name: string;
  description: string;
}
export interface BlockItemProps {
  id: string;
  premium: boolean;
  details: BlockItemDetails;
}

export interface BlocksListProps {
  list: BlockItemProps[];
  isLoading?: boolean;
}
