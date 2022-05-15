import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Store } from '../model';
import { StoreServices } from '../services';

@Controller('store')
export class StoreControllers {
  constructor(private storeService: StoreServices) {}

  @Get()
  async getAllStores(): Promise<Store[]> {
    return this.storeService.getAll();
  }

  @Get(':id')
  async getStore(@Param() param): Promise<Store> {
    return this.storeService.getOne(param.id);
  }

  @Post()
  async postStore(@Body() body: Store): Promise<Store> {
    return this.storeService.post(body);
  }

  @Put()
  async putStore(@Body() body: Store): Promise<[number, Store[]]> {
    return this.storeService.put(body);
  }

  @Delete(':id')
  async deleteStore(@Param() param): Promise<void> {
    return this.storeService.delete(param.id);
  }
}
