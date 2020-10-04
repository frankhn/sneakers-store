import { Response, NextFunction } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import jsonResponse from './jsonResponse';
import * as statusCodes from '../constants/statusCodes';
import translate from '../locales';

interface ControllerProps {
  singleRecord: string;
  modelProperties: object;
  model: any;
  paramId: string;
}

interface ControllerMethods {
  checkRecord: any;
  getOne: any;
  [index: string]: any;
}

const checkRecord = ({
  model,
  paramId,
  singleRecord,
  modelProperties,
}: ControllerProps) =>
  asyncHandler(
    async (req: any, res: Response, next: NextFunction): Promise<any> => {
      const id = req.params[paramId];
      const record = await model.findOne({
        ...modelProperties,
        where: {
          id: id,
        },
      });
      if (!record) {
        return jsonResponse({
          res,
          status: statusCodes.NOT_FOUND,
          message: `${translate(`${model.name} doesn't exist`)}`,
          errors: {
            [singleRecord]: {
              path: singleRecord,
              message: `${translate(`${model.name} doesn't exist`)}`,
            },
          },
        });
      }
      req[singleRecord] = record;
      return next();
    },
  );

const getOne = ({ singleRecord }: ControllerProps) =>
  asyncHandler(async (req: any, res: Response) =>
    jsonResponse({
      res,
      status: statusCodes.OK,
      data: req[singleRecord].get(),
    }),
  );


// pass arguments to functions.
const crudController = ({
  singleRecord,
  modelProperties,
  model,
  paramId = 'id',
}: ControllerProps): ControllerMethods => {
  const props = {
    singleRecord,
    modelProperties,
    model,
    paramId,
  };
  return {
    checkRecord: checkRecord(props),
    getOne: getOne(props),
  };
};

export default crudController;
