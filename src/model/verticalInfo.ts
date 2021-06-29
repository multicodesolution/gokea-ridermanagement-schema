import { Transaction } from 'sequelize';
import { verticalInfoSchema } from '../schema';
import { VerticalInfoType } from '../types';

class VerticalInfoModel {
  /**
   * @description Add new User
   * @param userObj
   * @param transaction
   */
  async addOne(userObj: VerticalInfoType, transaction: Transaction | undefined = undefined): Promise<VerticalInfoType> {
    try {
      const insertedObj = await verticalInfoSchema.create(userObj, {
        transaction: transaction ? transaction : undefined
      });
      return insertedObj;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Get users list
   * @param condition
   * @param attributes
   * @param others
   */
  async getMany(condition: any = {}, attributes: any[] = [], other: object = {}): Promise<VerticalInfoType[]> {
    try {
      return await verticalInfoSchema.findAll({
        attributes: attributes.length > 0 ? attributes : undefined,
        where: condition,
        ...other
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get users list with role
   * @param condition
   * @param attributes
   * @param others
   */
  async getManyWithRole(condition: any = {}, attributes: any[] = [], other: object = {}): Promise<any[]> {
    try {
      return await verticalInfoSchema.findAll({
        attributes: attributes.length > 0 ? attributes : undefined,
        where: condition,
        ...other,
        raw: true
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Get single VerticalInfoType user
   * @param condition
   * @param attributes
   * @param others
   */
  async getSingle(condition: any = {}, attributes: any[] = [], other: object = {}): Promise<VerticalInfoType | null> {
    try {
      return await verticalInfoSchema.findOne({
        attributes: attributes.length > 0 ? attributes : undefined,
        where: condition,
        raw: true,
        ...other
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Update User Details
   * @param {Object} obj update object
   * @param {Object} condition
   * @param {Object} transaction
   */
  async update(obj: object, condition: any, transaction: Transaction | undefined = undefined) {
    try {
      await verticalInfoSchema.update(obj, {
        where: condition,
        transaction: transaction ? transaction : undefined
      });
      return;
    } catch (e) {
      throw e;
    }
  }
  /**
   * @description Add many user role link
   * @param usersObj
   * @param transaction
   */
  async addMany(
    usersObj: VerticalInfoType[],
    transaction: Transaction | undefined = undefined
  ): Promise<VerticalInfoType[]> {
    try {
      return await verticalInfoSchema.bulkCreate(usersObj, { transaction: transaction ? transaction : undefined });
    } catch (error) {
      throw error;
    }
  }
}
const verticalInfoModel = new VerticalInfoModel();
export default verticalInfoModel;
