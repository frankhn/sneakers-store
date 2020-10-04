import { celebrate, Joi } from 'celebrate'


// Validates parameters
export const getMany = celebrate({
    query: Joi.object().keys({
        page: Joi.number().integer()
    }),
})