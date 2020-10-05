import { urlPrefix } from 'constants/shared';
import request from 'supertest'
import app from '../app';
import * as statusCodes from 'constants/statusCodes';



describe('Express App', () => {
    describe('TC001 - Invalid routes', () => {
        test('TC001-1 - Should return Not Found', async () => {
            const res = await request(app)
                .get(`${urlPrefix}/sneaksss`)

            expect(res.status).toBe(statusCodes.NOT_FOUND)
        })

        test('TC001-1 - Should return OK message', async () => {
            const res = await request(app)
                .get('/')

            expect(res.status).toBe(statusCodes.OK)
            expect(res.body.message).toBeTruthy()
        })
    });
});
