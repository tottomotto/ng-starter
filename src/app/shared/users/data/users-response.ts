import { PagingInfo } from '../../paging/paging-info';
import { User } from './user';

export interface UsersResponse extends PagingInfo {
  data: User[];
}
