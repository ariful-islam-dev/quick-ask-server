

const request = require('supertest')
const app = require('../../../src/app')
const { createQuestion } = require('../../../src/api/v1/Question')
const { findAnswerByQuestion, createAnswer } = require('../../../src/api/v1/Answer')

const newQs= {
    title: "excell problem",
    description: "some text here",
    role: "user",
    image: "",
    status: "public" 
}
describe("GET /questions/abcd123", ()=>{
    it('shout create a single question answer', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).post(`/questions/${question.id}/answers`, createAnswer).send({body:"some text"})
        expect(single.status).toBe(201);
    })
    it('should get a single question\'s answer info', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).get(`/questions/${question.id}/answers`, findAnswerByQuestion).set(
            "authorization", user.data?.access_token
        )
        expect(single.status).toBe(200)
    })
})