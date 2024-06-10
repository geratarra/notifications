import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';

import app from '@src/server';

import UserRepo from '@src/repos/UserRepo';
import User from '@src/models/User';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import Paths from 'spec/support/Paths';
import apiCb from 'spec/support/apiCb';
import { TApiCb } from 'spec/types/misc';


// Dummy users for GET req
const getDummyUsers = () => {
  return [
    User.new('Sean Maxwell', 'sean.maxwell@gmail.com'),
    User.new('John Smith', 'john.smith@gmail.com'),
    User.new('Gordan Freeman', 'gordan.freeman@gmail.com'),
  ];
};


// Tests
describe('UserRouter', () => {

  let agent: TestAgent<Test>;

  // Run before all tests
  beforeAll(done => {
    agent = supertest.agent(app);
    done();
  });

  // Get all users
  describe(`"GET:${Paths.Users.Get}"`, () => {

    // Setup API
    const api = (cb: TApiCb) => 
      agent
        .get(Paths.Users.Get)
        .end(apiCb(cb));

    // Success
    it('should return a JSON object with all the users and a status code ' + 
    `of "${HttpStatusCodes.OK}" if the request was successful.`, (done) => {
      // Add spy
      const data = getDummyUsers();
      spyOn(UserRepo, 'getAll').and.resolveTo(data);
      // Call API
      api(res => {
        expect(res.status).toBe(HttpStatusCodes.OK);
        expect(res.body).toEqual({ users: data });
        done();
      });
    });
  });
});
