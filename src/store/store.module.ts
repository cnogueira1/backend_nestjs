import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreControllers } from './controllers';
import { Store } from './model';
import { StoreServices } from './services';

@Module({
  imports: [SequelizeModule.forFeature([Store])],
  controllers: [StoreControllers],
  providers: [StoreServices],
})
export class StoreModule {}
