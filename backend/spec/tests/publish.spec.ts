import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import Paths from '@src/constants/Paths';
import { IMessage } from '@src/models/IMessage';
import User from '@src/models/User';
import UserRepo from '@src/repos/UserRepo';
import app from '@src/server';
import * as misc from "@src/util/misc";
import apiCb from 'spec/support/apiCb';
import { TApiCb } from 'spec/types/misc';
import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';

// Dummy users for GET req
const getDummyUsers = () => {
    return [
        User.new('Sean Maxwell', 'sean.maxwell@gmail.com'),
        User.new('John Smith', 'john.smith@gmail.com'),
        User.new('Gordan Freeman', 'gordan.freeman@gmail.com'),
    ];
};

describe("PublishRoute", () => {

    let agent: TestAgent<Test>;

    // Run before all tests
    beforeAll(done => {
        agent = supertest.agent(app);
        done();
    });

    describe("POST", () => {
        // Setup API
        const callApi = (message: IMessage | null, cb: TApiCb) =>
            agent
                .post(`/api/publish${Paths.Publish.Post}`)
                .send({ message })
                .end(apiCb(cb));

        const dummyMessage = { category: "sports", message: "hello" };

        it("should return a success response. No users to send message here.", done => {
            spyOn(UserRepo, "getAll").and.resolveTo([]);
            spyOn(misc, "getRandomBoolean" as any).and.returnValue(true);

            callApi(dummyMessage, res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ success: true, message: "The message was published successfully" });
                done();
            });
        });

        it("should return a success response with only one user receiving a message", done => {
            spyOn(UserRepo, "getAll").and.resolveTo([
                User.new("Steve", "email", undefined, 1, {"sports": true}, ["email"])
            ]);

            spyOn(misc, "getRandomBoolean" as any).and.returnValue(true);

            callApi(dummyMessage, res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ success: true, message: "The message was published successfully" });
                done();
            });
        });

        it("should return a success response even when a user has no channels for receiving messages", done => {
            spyOn(UserRepo, "getAll").and.resolveTo([
                User.new("Steve", "email", undefined, 1, {"movies": true}, [])
            ]);

            spyOn(misc, "getRandomBoolean" as any).and.returnValue(true);

            callApi(dummyMessage, res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ success: true, message: "The message was published successfully" });
                done();
            });
        });

        it("should return a success response even if a user is not subscribed to any category", done => {
            spyOn(UserRepo, "getAll").and.resolveTo([
                User.new("Steve", "email", undefined, 1, {}, ["email", "sms"])
            ]);

            spyOn(misc, "getRandomBoolean" as any).and.returnValue(true);

            callApi(dummyMessage, res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ success: true, message: "The message was published successfully" });
                done();
            });
        });

        it("should return a success response with a failure message status when simulating an error while sending notification", done => {
            spyOn(UserRepo, "getAll").and.resolveTo([
                User.new("Steve", "email", undefined, 1, {"sports": true}, ["email"])
            ]);

            spyOn(misc, "getRandomBoolean" as any).and.returnValue(false);

            callApi(dummyMessage, res => {
                expect(res.status).toBe(HttpStatusCodes.OK);
                expect(res.body).toEqual({ success: false, message: "The message couldn't be published " +
                "in at least one channel. Please check the logs." });
                done();
            });
        });
    });

});