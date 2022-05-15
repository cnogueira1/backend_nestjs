import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Client extends Model<Client> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nameUser: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nameComplet: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contactType: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateBirth: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
