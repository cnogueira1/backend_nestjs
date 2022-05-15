import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ClientCrontollers } from './controllers';
import { Client } from './model';
import { ClientServices } from './services';

@Module({
  imports: [SequelizeModule.forFeature([Client])],
  controllers: [ClientCrontollers],
  providers: [ClientServices],
})
export class ClientModule {}
