import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Client } from '../model';
import { ClientServices } from '../services';

@Controller('client')
export class ClientCrontollers {
  constructor(private clientService: ClientServices) {}

  @Get()
  async getClients(): Promise<Client[]> {
    return this.clientService.getAll();
  }

  @Get(':id')
  async getClient(@Param() param): Promise<Client> {
    return this.clientService.getOne(param.id);
  }

  @Post()
  async postClient(@Body() body): Promise<Client> {
    return this.clientService.post(body);
  }

  @Put()
  async putClient(@Body() body): Promise<[number, Client[]]> {
    return this.clientService.put(body);
  }

  @Delete(':id')
  async deleteClient(@Param() param): Promise<void> {
    return this.clientService.delete(param.id);
  }
}
