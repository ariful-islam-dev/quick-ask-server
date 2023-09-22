


const request = require('supertest')
const app = require('../../../src/app')
const { createQuestion } = require('../../../src/api/v1/Question')
const { findAnswerByQuestion, createAnswer } = require('../../../src/api/v1/Answer')
const { findAuthorByQuestion } = require('../../../src/api/v1/User')

const newQs= {
    title: "excell problem",
    description: "some text here",
    role: "user",
    image: "",
    status: "public" 
}
describe("GET /questions/abcd123", ()=>{
    it('404 question answer not found', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).get(`/questions/${question.id}/author`, findAuthorByQuestion)
        expect(single.status).toBe(201);
    })
    it('should get a single question\'s author info', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).get(`/questions/${question.id}/author`, findAuthorByQuestion).set(
            "authorization", user.data?.access_token
        )
        expect(single.status).toBe(200)
    })
})