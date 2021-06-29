import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../utils/dbConfig';

class VerticalInfoSchema extends Model {
  public id?: number;
  public uuid!: string;
  public name!: string;
  public benefits!: string;
  public description!: string;
  public image!: string;
  public image_selected!: string;
}

VerticalInfoSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING
    },
    name: {
      type: new DataTypes.STRING()
    },
    benefits: {
      type: new DataTypes.STRING()
    },
    description: {
      type: new DataTypes.STRING()
    },
    image: {
      type: new DataTypes.STRING(),
      get() {
        const rawValue = this.getDataValue('image');
        return rawValue ? `${process.env.S3_PUBLIC_URL}${rawValue}` : '';
      }
    },
    image_selected: {
      type: new DataTypes.STRING(),
      get() {
        const rawValue = this.getDataValue('image_selected');
        return rawValue ? `${process.env.S3_PUBLIC_URL}${rawValue}` : '';
      }
    }
  },
  {
    sequelize,
    tableName: 'vertical_info',
    timestamps: true,
    paranoid: true,
    underscored: true
  }
);

export default VerticalInfoSchema;
