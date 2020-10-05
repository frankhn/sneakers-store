import 'dotenv/config';
import { Response } from 'express';

//#region Local imports
import { PAGE_LIMIT } from 'constants/shared';
import crudController from 'helpers/crudController';
import asyncHandler from 'middlewares/asyncHandler';
import jsonResponse from 'helpers/jsonResponse';
import * as statusCodes from 'constants/statusCodes';
import Sneaker from 'models/sneakers';
import Quantity from 'models/quantity';
import Brand from 'models/brand';
import Size from 'models/size';
//#endregion

const controller = crudController({
    model: Sneaker,
    singleRecord: 'sneaker',
    paramId: 'id',
    modelProperties: {
        include: [
            {
                model: Brand,
                as: 'brand',
                attributes: ['name', 'description']
            },
            {
                model: Quantity,
                as: 'details',
                attributes: ['quantity'],
                include: [
                    {
                        model: Size,
                        attributes: ['name', 'description']
                    }
                ]
            },
        ],
    },
});

controller.getMany = asyncHandler(async (req: any, res: Response) => {
    const {
        page = 1,
    } = req.query;

    const offset = PAGE_LIMIT * (page - 1);
    const records = await Sneaker.findAndCountAll({
        order: [['realese', 'DESC']],
        include: [
            {
                model: Brand,
                as: 'brand',
                attributes: ['name', 'description']
            },
            {
                model: Quantity,
                as: 'details',
                attributes: ['quantity'],
                include: [
                    {
                        model: Size,
                        attributes: ['name', 'description']
                    }
                ]
            },
        ],
        offset,
        limit: PAGE_LIMIT,
        distinct: true,
    });

    const pages = Math.ceil(records.count / PAGE_LIMIT);
    const meta = {
        total: records.count,
        page,
        pages,
    };

    if (page > pages) {
        return jsonResponse({
            res,
            status: statusCodes.OK,
            data: [],
            meta,
        });
    }

    return jsonResponse({
        res,
        status: statusCodes.OK,
        data: records.rows,
        meta,
    });
});

export default controller;
