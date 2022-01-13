import {ConnectionOptions} from 'typeorm';
export const ORM_CONFIG = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'astra_network',
  entities: [`${__dirname}/../**/*.entity.ts`],
  synchronize: true,
  logging: true
} as ConnectionOptions;