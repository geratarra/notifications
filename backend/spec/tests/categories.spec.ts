import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import Paths from '@src/constants/Paths';
import { ICategory } from '@src/models/ICategory';
import CategoryRepo from '@src/repos/CategoryRepo';
import app from '@src/server';
import apiCb from 'spec/support/apiCb';
import { TApiCb } from 'spec/types/misc';
import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';


describe("CategoryRoute", () => {

    let agent: TestAgent<Test>;

    // Run before all tests
    beforeAll(done => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"GET:${Paths.Categories.Get}"`, () => {
        // Setup API
        const api = (cb: TApiCb) =>
            agent
                .get(`/api/categories${Paths.Users.Get}`)
                .end(apiCb(cb));

        it("should return a success response with a list of categories.", done => {
            const categories: ICategory[] = [
                {id: 1, name: "sports"},
                {id: 2, name: "finance"}
            ];
            spyOn(CategoryRepo, "getAll").and.resolveTo(categories);

            api(res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ categories: categories });
                done();
            });
        });
    });
});