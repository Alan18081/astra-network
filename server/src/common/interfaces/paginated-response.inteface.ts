export interface IPaginatedResponse<T> {
  list: T[];
  totalCount: number;
  itemsPerPage: number;
  page: number;
}