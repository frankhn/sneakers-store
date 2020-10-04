import {
  Model,
  DataTypes,
} from 'sequelize';
import db from '../../database/models';

export interface SizeAttributes {
  id: string
  name: string
  description: string
}

export default class Size extends Model<SizeAttributes>
  implements SizeAttributes {
  public name!: string
  public description!: string


  public id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};
}

Size.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  sequelize: db.sequelize,
  tableName: 'sizes'
})