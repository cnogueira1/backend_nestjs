import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from '../model';

@Injectable()
export class WorkerServices {
  constructor(
    @InjectModel(Worker)
    private workerModel: typeof Worker,
  ) {}

  async getAll(): Promise<Worker[]> {
    return this.workerModel.findAll();
  }

  async getOne(id: string): Promise<Worker> {
    return this.workerModel.findByPk(id);
  }

  async post(worker: Worker): Promise<void> {
    this.workerModel.create(worker);
  }

  async put(worker: Worker) {
    return this.workerModel.update(worker, {
      where: {
        id: worker.id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    const worker = await this.getOne(id);
    worker.destroy();
  }
}
