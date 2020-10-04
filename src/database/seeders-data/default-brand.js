const day = require('dayjs');
const faker = require('faker')

const createdAt = day('2020-06-16').format();
const updatedAt = createdAt;

const description = () => `${faker.lorem.words(5)}`

module.exports = [
    {
        id: 'b68d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'Nike',
        description: description(),
        createdAt,
        updatedAt,
    },
    {
        id: 'b78d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'Rebook',
        description: description(),
        createdAt,
        updatedAt,
    },
    {
        id: 'b88d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'Jordan',
        description: description(),
        createdAt,
        updatedAt,
    },
    {
        id: 'b98d2e07-735e-4bf5-a359-17eb4715a51f',
        name: 'Yeeze',
        description: description(),
        createdAt,
        updatedAt,
    },
];
