import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { configDatabase } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRootAsync({
      useFactory: (confg: ConfigService) => (configDatabase(confg)[confg.get('DB_CONNECTION') ? confg.get('DB_CONNECTION') : 'mysql']),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
