import {
  Model,
  DataTypes,
} from 'sequelize';
import db from '../../database/models';

export interface BrandAttributes {
  id: string
  name: string
  logo: string
  description: string
}

export default class Brand extends Model<BrandAttributes>
  implements BrandAttributes {
  public name!: string
  public logo!: string
  public description!: string


  public id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};
}

Brand.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "Brand name",
      msg: "Brand already exists"
    }
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize: db.sequelize,
  tableName: 'brands'
})