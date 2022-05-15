import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StoreService } from '../services';

@Controller('store')
export class StoreControllers {
  constructor(private storeService: StoreService) {}

  @Get()
  getAllStores() {
    return this.storeService.getAll();
  }

  @Get(':id')
  getStore(@Param() param) {
    return this.storeService.getOne(param.id);
  }

  @Post()
  postStore(@Body() body) {
    return this.storeService.post(body);
  }

  @Put()
  putStore(@Body() body) {
    return this.storeService.put(body);
  }

  @Delete(':id')
  deleteStore(@Param() param) {
    return this.storeService.delete(param.id);
  }
}
