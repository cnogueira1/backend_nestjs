import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkerControllers } from './controllers';
import { Worker } from './model';
import { WorkerServices } from './services';

@Module({
  imports: [SequelizeModule.forFeature([Worker])],
  controllers: [WorkerControllers],
  providers: [WorkerServices],
})
export class WorkerModule {}
