import { Module } from '@nestjs/common';

import { ClientModule } from './client/client.module';
import { WorkerModule } from './worker/worker.module';
import { StoreModule } from './store/store.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [DataBaseModule, ClientModule, WorkerModule, StoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
