import responseErrors from './errors-response.definition';
import sneakers from './sneakers.definitions';

const general = {
  SneakersSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'int32',
        example: 1,
      },
      model: {
        type: 'string',
        example: 'Air force 1',
      },
      picture: {
        type: 'string',
        example: 'http://lorempixel.com/640/480',
      },
      realese: {
        type: 'Date',
        example: '2020-09-15T06:14:18.764Z',
      },
      Brand: {
        name: 'string',
        example: 'b10d2e07-735e-4bf5-a359-17eb4715a51f',
      },
    },
  },
};
export default {
  ...general,
  ...responseErrors,
  ...sneakers,
};
