import { slug } from '../../data/company.json';
import { storefrontApi } from '../config';
import type { GetPromotionsDto } from './storefront.dtos';

export const getPromotions = async (): Promise<GetPromotionsDto> =>
  storefrontApi
    .get<GetPromotionsDto>(`companies/${slug}/promotions`)
    .then((r) => r.data);
