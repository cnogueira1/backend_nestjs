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

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'cesarnogueira',
      password: '07101997',
      database: 'users',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Client, Worker, Store]),
  ],
  controllers: [ClientCrontollers, WorkerControllers, StoreControllers],
  providers: [ClientServices, WorkerServices, StoreService],
})
export class AppModule {}
