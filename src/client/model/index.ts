import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Client extends Model<Client> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
