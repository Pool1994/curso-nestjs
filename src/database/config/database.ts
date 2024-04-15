import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";
interface TypeConnections<T> {
    mysql?: T,
    postgres?: T,
    sqlite?: T,
    mariadb?: T,
    mssql?: T,
    db2?: T,
    snowflake?: T,
    oracle?: T
}
/** configuracion para acceder a la base de datos */
export const configDatabase = (config: ConfigService) => {
    const params: TypeConnections<SequelizeModuleOptions> = {
        mysql: {
            dialect: 'mysql',
            host: config.get('DB_HOST') ? config.get('DB_HOST') : '127.0.0.1',
            port: config.get('DB_PORT') ? config.get('DB_PORT') : 3306,
            username: config.get('DB_USERNAME') ? config.get('DB_USERNAME') : 'root',
            password: config.get('DB_PASSWORD') ? config.get('DB_PASSWORD') : 'password',
            database: config.get('DB_DATABASE') ? config.get('DB_DATABASE') : 'test',
            autoLoadModels: true,
            sync: {
                force: false,
                alter:true
            },
            synchronize:true,
            define:{
                underscored:true,
                timestamps:true
            },
        }
    }
    return params;
}
