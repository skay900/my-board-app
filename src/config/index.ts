import localConfig from './config.local.json';
import developConfig from './config.develop.json';
import stagingConfig from './config.staging.json';
import productConfig from './config.product.json';

interface DomainConfig {
  API_SERVER: string;
}

interface EndpointConfig {
  LOGIN: string;
  REGISTRATION: string;
  USER_INFO: string;
  ACCESS_TOKEN: string;
  NAVER_LOGIN_URL: string;
  GOOGLE_LOGIN_URL: string;
}

interface Config {
  DOMAIN: DomainConfig;
  ENDPOINT: EndpointConfig;
}

let config: Config;

switch (process.env.REACT_APP_ENV) {
  case 'local':
    config = localConfig as Config;
    break;
  case 'develop':
    config = developConfig as Config;
    break;
  case 'staging':
    config = stagingConfig as Config;
    break;
  case 'product':
    config = productConfig as Config;
    break;
  default:
    config = localConfig as Config; // 기본값 설정
    break;
}

export default config;
