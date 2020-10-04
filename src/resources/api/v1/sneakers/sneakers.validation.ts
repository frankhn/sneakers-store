import { celebrate, Joi } from 'celebrate'


// Validates parameters
export const getMany = celebrate({
    query: Joi.object().keys({
        page: Joi.number().integer().min(1).default(1)
    }),
})

// Validate id param
export const getOne = celebrate({
    params: Joi.object().keys({
        id: Joi.string().uuid().required()
    })
})