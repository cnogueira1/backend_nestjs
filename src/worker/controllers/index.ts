import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Worker } from '../model';
import { WorkerServices } from '../services';

@Controller('worker')
export class WorkerControllers {
  constructor(private workerService: WorkerServices) {}

  @Get()
  async getAllWorkers(): Promise<Worker[]> {
    return this.workerService.getAll();
  }

  @Get(':id')
  async getWorker(@Param('id') param: string): Promise<Worker> {
    return this.workerService.getOne(param);
  }

  @Post()
  async postWorker(@Body() body): Promise<Worker> {
    return this.workerService.post(body);
  }

  @Put()
  async putWorker(@Body() body): Promise<[number, Worker[]]> {
    return this.workerService.put(body);
  }

  @Delete(':id')
  async deleteWorker(@Param('id') param: string): Promise<void> {
    return this.workerService.delete(param);
  }

  @Get('name/:nameWorker')
  async getAllWorksByName(
    @Param('nameWorker') param: string,
  ): Promise<Worker[]> {
    return this.workerService.findAllByName(param);
  }
}
