const request = require('supertest')
const { findAllQuestion, createQuestion } = require("../../../src/api/v1/Question")
const app = require('../../../src/app');
const {  register } = require('../../../src/api/v1/Auth');

const payload = {
    email: "ariful@example.com",
    name: "ariful",
    password: "pass1234"
}

describe("GET /questions", () => {

    it("should get all queistons", async () => {
        const questions = await request(app).post("/questions", findAllQuestion);
        expect(questions.status).toBe(200)
    })

    it('should create a new question', async () => {
        const user = await request(app).post("/auth/register", register).send(payload);

        const question = await request(app).post("/quesionts", createQuestion).send({
            title: "excell problem",
            description: "some text here",
            role: "user",
            image: "",
            status: "public" 
        }).set(
            "authorization", user.data?.access_token
        )

        expect(question.status).toBe(201)
        expect(question.message).toEqual("Successfully Post a question")
    })

    

});

