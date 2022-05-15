import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WorkerServices } from '../services';

@Controller('worker')
export class WorkerControllers {
  constructor(private workerService: WorkerServices) {}

  @Get()
  getAllWorkers() {
    return this.workerService.getAll();
  }

  @Get(':id')
  getWorker(@Param() param) {
    return this.workerService.getOne(param.id);
  }

  @Post()
  postWorker(@Body() body) {
    return this.workerService.post(body);
  }

  @Put()
  putWorker(@Body() body) {
    return this.workerService.put(body);
  }

  @Delete(':id')
  deleteWorker(@Param() param) {
    return this.workerService.delete(param.id);
  }
}
