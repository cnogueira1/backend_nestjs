import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from '../model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store)
    private storeModel: typeof Store,
  ) {}

  async getAll(): Promise<Store[]> {
    return this.storeModel.findAll();
  }

  async getOne(id: string): Promise<Store> {
    return this.storeModel.findByPk(id);
  }

  async post(store: Store): Promise<void> {
    this.storeModel.create(store);
  }

  async put(store: Store): Promise<[number, Store[]]> {
    return this.storeModel.update(store, {
      where: {
        id: store.id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    const store = await this.getOne(id);
    store.destroy();
  }
}
