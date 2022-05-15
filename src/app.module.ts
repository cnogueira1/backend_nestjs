import { Module } from '@nestjs/common';

import { ClientCrontollers } from './client/controllers';
import { ClientServices } from './client/services';

import { WorkerControllers } from './worker/controllers';
import { WorkerServices } from './worker/services';

import { StoreControllers } from './store/controllers';
import { StoreService } from './store/services';

import { SequelizeModule } from '@nestjs/sequelize';

import { Client } from './client/model';
import { Worker } from './worker/model';
import { Store } from './store/model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Client, Worker, Store]),
  ],
  controllers: [ClientCrontollers, WorkerControllers, StoreControllers],
  providers: [ClientServices, WorkerServices, StoreService],
})
export class AppModule {}
