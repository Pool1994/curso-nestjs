import { ConfigService } from "@nestjs/config";

type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle';

console.log(process.env.DB_CONNECTION);
export const configDatabase = (config: ConfigService) => {
    console.log({DB_CONNECTION:config.get('DB_CONNECTION')});
    const params =  {
        mysql: {
            dialect: 'mysql',
            host: config.get('DB_HOST') ?  config.get('DB_HOST') : '127.0.0.1',
            port: config.get('DB_PORT') ? config.get('DB_PORT') : 3306,
            username: config.get('DB_USERNAME') ? config.get('DB_USERNAME') : 'root',
            password: config.get('DB_PASSWORD') ? config.get('DB_PASSWORD') : 'password',
            database: config.get('DB_DATABASE') ? config.get('DB_DATABASE') : 'test',
        }
    }
    console.log(params);
    return params;
}