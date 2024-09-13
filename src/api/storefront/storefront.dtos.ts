import type { Promotion } from '../../schemas/promotion';
import type { PaginatedResult } from '../types/paginatedResult';
import type { ResponseData } from '../types/responseData';

export type GetPromotionsDto = ResponseData<PaginatedResult<Promotion>>;
