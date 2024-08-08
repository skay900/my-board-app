import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { Config } from '../types/config';

const env = process.env.NODE_ENV || 'local';
const filePath = path.join(__dirname, `../../config/config.${env}.yml`);

let config: Config;

try {
    const file = fs.readFileSync(filePath, 'utf8');
    config = YAML.parse(file) as Config;
    if (!config) {
        throw new Error(`No configuration found for environment: ${env}`);
    }
} catch (error) {
    console.error(`Failed to load config file for environment: ${env}`);
    throw error;
}

export default config;