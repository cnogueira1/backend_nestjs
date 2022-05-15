import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
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

  async post(worker: Worker): Promise<Worker> {
    return this.workerModel.create(worker);
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

  // Find all with match name search
  async findAllByName(name: string): Promise<Worker[]> {
    const worker = await this.workerModel.findAll({
      where: {
        name: {
          [Op.like]: '%' + name + '%',
        },
      },
    });

    return worker;
  }

  // Find all with match service search
  async findAllByService(service: string): Promise<Worker[]> {
    const worker = await this.workerModel.findAll({
      where: {
        tasks: {
          [Op.like]: '%' + service + '%',
        },
      },
    });

    return worker;
  }
}
