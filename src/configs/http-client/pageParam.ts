export type PageParam = {
  page: number;
  size: number;
};

export type PageResponse<T> = {
  list: T[];
} & PageParam;
