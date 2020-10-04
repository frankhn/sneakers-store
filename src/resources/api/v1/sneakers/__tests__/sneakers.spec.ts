import { urlPrefix } from 'constants/shared';
import request from 'supertest'
import app from '../../../../../app';
import * as statusCodes from 'constants/statusCodes';
import { randomId, randomNumber } from './helper';



describe('Sneakers', () => {
    describe('TC001 - Get Sneakers', () => {
        let meta: any = {}

        test('TC001-1 - Should be able get sneakers', async () => {
            const res = await request(app)
                .get(`${urlPrefix}/sneakers`)

            meta = res.body.meta

            expect(res.status).toBe(statusCodes.OK)
            expect(res.body.data).toBeTruthy()
            expect(res.body.meta).toBeTruthy()
        })

        test('TC001-2 - Should be able get sneakers', async () => {
            let { pages } = meta
            const res = await request(app)
                .get(`${urlPrefix}/sneakers?page=${pages + 1}`)

            expect(res.status).toBe(statusCodes.OK)
            expect(res.body.data).toEqual([])
            expect(res.body.meta).toBeTruthy()
        })
    });


    describe('TC002 - Get single Sneaker', () => {
        let sneakerID = ''
        beforeAll(async () => {
            const res = await request(app)
                .get(`${urlPrefix}/sneakers`)
            sneakerID = res.body.data[randomNumber(4, 1)].id
        })

        test('TC002-1 - Should return a bad request for invalid id', async () => {
            const res = await request(app)
                .get(`${urlPrefix}/sneakers/0`)

            expect(res.status).toBe(statusCodes.BAD_REQUEST)
            expect(res.body.message).toBeTruthy()
            expect(res.body.errors).toHaveProperty('id')
        })

        test('TC002-2 - Should be able get a single sneaker', async () => {
            const res = await request(app)
                .get(`${urlPrefix}/sneakers/${sneakerID}`)

            expect(res.status).toBe(statusCodes.OK)
            expect(res.body.data).toBeTruthy()
            expect(res.body.data.id).toEqual(sneakerID)
        })

        test('TC002-3 - Should return not found sneaker', async () => {
            sneakerID = randomId
            const res = await request(app)
                .get(`${urlPrefix}/sneakers/${sneakerID}`)

            expect(res.status).toBe(statusCodes.NOT_FOUND)
            expect(res.body.message).toBeTruthy()
            expect(res.body.errors).toHaveProperty('sneaker')
        })

    });
});
