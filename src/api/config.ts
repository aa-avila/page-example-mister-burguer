import Axios from 'axios';

const DEFAULT_TIMEOUT = 15000;
const API_URL = 'https://multi-store.up.railway.app/api';
enum ApiEntity {
  STOREFRONT = 'storefront',
}

export const storefrontApi = Axios.create({
  baseURL: `${API_URL}/${ApiEntity.STOREFRONT}`,
  timeout: DEFAULT_TIMEOUT,
});
