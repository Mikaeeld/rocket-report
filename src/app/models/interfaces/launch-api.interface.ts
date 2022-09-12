import { IResult } from './launch-api/result.interface';

export interface LaunchAPI {
  valid_auth: boolean;
  count: number;
  limit: number;
  total: number;
  last_page: number;
  result: IResult[];
}
