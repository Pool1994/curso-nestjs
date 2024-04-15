import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { configDatabase } from './database/config/database';
import { TasksModule } from './modules/tasks/tasks.module';
import { CastsModule } from './modules/cats/cats.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './lib/validations/exceptions';
import { BreedsModule } from './modules/breeds/breeds.module';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRootAsync({
      useFactory: (confg: ConfigService) => (configDatabase(confg)[confg.get('DB_CONNECTION') ? confg.get('DB_CONNECTION') : 'mysql']),
      inject: [ConfigService]
    }),
    TasksModule,
    CastsModule,
    BreedsModule,
    RolesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{
    provide:APP_FILTER,
    useClass:AllExceptionsFilter
  }],
})
export class AppModule { }
