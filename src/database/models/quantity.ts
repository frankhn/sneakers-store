import {
  Model,
  DataTypes,
} from 'sequelize';
import db from '../../database/models';

export interface QuantityAttributes {
  id: string
  size_id: string
  quantity: number,
  sneaker_id: string
}

export default class Quantity extends Model<QuantityAttributes>
  implements QuantityAttributes {
  public size_id!: string
  public quantity!: number
  public sneaker_id!: string


  public id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};
}

Quantity.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  size_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  sneaker_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  sequelize: db.sequelize,
  tableName: 'quantities'
})