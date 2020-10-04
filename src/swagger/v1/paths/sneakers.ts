import { customResponse, metaResponse } from 'swagger/v1/constants/responses';

export default {
  '/sneakers': {
    get: {
      tags: ['Sneakers'],
      summary: 'Get All sneakers',
      parameters: [
        {
          in: 'query',
          name: 'page',
          description: 'Page number',
          type: 'int32',
          example: 1,
        },
      ],
      responses: customResponse({
        200: {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'int32',
                example: 200,
              },
              data: {
                type: 'array',
                items: {
                  $ref: '#/definitions/SneakersSchema',
                },
              },
              meta: metaResponse,
            },
          },
        },
      }),
    },
  },
  '/sneakers/{id}': {
    get: {
      tags: ['Sneakers'],
      summary: 'Get a single a sneaker',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Sneaker Id',
          required: true,
        },
      ],
      responses: customResponse({
        200: {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'int32',
                example: 200,
              },
              data: {
                type: 'object',
                $ref: '#/definitions/SneakersSchema',
              },
            },
          },
        },
      }),
    },
  },
};
