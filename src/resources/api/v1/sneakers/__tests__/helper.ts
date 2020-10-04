import faker from 'faker'

export const randomNumber = (max = 99999, min = 1000) => faker.random.number({ max, min });

export const randomId = faker.random.uuid()