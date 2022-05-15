import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from '../model';

@Injectable()
export class ClientServices {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  async getAll(): Promise<Client[]> {
    const clients = this.clientModel.findAll();
    return clients;
  }

  async getOne(id: string): Promise<Client> {
    return this.clientModel.findByPk(id);
  }

  async post(client: Client): Promise<void> {
    await this.clientModel.create(client);
  }

  async put(client: Client): Promise<[number, Client[]]> {
    return this.clientModel.update(client, {
      where: {
        id: client.id,
      },
    });
  }

  async delete(id: string) {
    const client = await this.getOne(id);
    client.destroy();
  }
}
