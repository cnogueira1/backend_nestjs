import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Worker extends Model<Worker> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tasks: string;
}
