import {
  Model,
  DataTypes,
} from 'sequelize';
import db from '.';

export interface SneakersAttributes {
  id: string
  model: string
  picture: string
  realese: string
  price: number
  brand_id: string
}

export default class Sneaker extends Model<SneakersAttributes>
  implements SneakersAttributes {
  public model!: string
  public picture!: string
  public realese!: string
  public price!: number
  public brand_id!: string


  public id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};
}

Sneaker.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  realese: {
    type: DataTypes.DATE,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  brand_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize: db.sequelize,
  tableName: 'sneakers'
})