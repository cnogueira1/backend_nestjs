import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Store extends Model<Store> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;
}
