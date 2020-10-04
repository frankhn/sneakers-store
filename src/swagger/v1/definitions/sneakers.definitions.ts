export default {
  SneakersSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'UUID',
        example: 'b16d2e07-735e-4bf5-a359-17eb4715a51f',
      },
      model: {
        type: 'string',
        example: "air force 5",
      },
      picture: {
        type: 'string',
        example: "http://lorempixel.com/640/480",
      },
      realese: {
        tpye: "Date",
        example: "2020-09-15T06:14:18.764Z",
      },
      price: {
        type: 'number',
        example: 6782,
      },
      createdAt: {
        type: "Date",
        example: "2020-06-15T22:00:00.000Z",
      },
      updatedAt: {
        type: 'string',
        example: "2020-06-15T22:00:00.000Z",
      },
      brand: {
        type: 'object',
        example: {
          name: {
            type: 'string',
            example: "Rebook",
          },
          description: {
            type: 'string',
            example: "assumenda asperiores impedit sunt dolorum",
          }
        }
      },
      details: {
        tpye: 'array',
        example: {
          quantity: {
            type: 'number',
            example: '41'
          },
          Size: {
            type: 'object',
            example: {
              name: {
                type: 'string',
                example: "LX",
              },
              description: {
                type: 'string',
                example: "dolorum dignissimos rerum adipisci laborum"
              }
            }
          }
        }
      }
    },
  },
};
