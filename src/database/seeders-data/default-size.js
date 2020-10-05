const day = require('dayjs');
const faker = require('faker')

const createdAt = day('2020-06-16').format();
const updatedAt = createdAt;

module.exports = [
    {
        id: '437fb710-63d0-48cd-a5fe-12321acdaf8f',
        name: 'M',
        description: `${faker.lorem.words(5)}`,
        createdAt,
        updatedAt,
    },
    {
        id: 'b23d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'LX',
        description: `${faker.lorem.words(5)}`,
        createdAt,
        updatedAt,
    },
    {
        id: 'b24d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'ML',
        description: `${faker.lorem.words(5)}`,
        createdAt,
        updatedAt,
    },
    {
        id: 'b25d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'L',
        description: `${faker.lorem.words(5)}`,
        createdAt,
        updatedAt,
    },
    {
        id: 'b26d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'SM',
        description: `${faker.lorem.words(5)}`,
        createdAt,
        updatedAt,
    },
];
