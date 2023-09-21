

const request = require('supertest')
const app = require('../../../src/app')
const { createQuestion, findSingleQuestion, deleteQuestion } = require('../../../src/api/v1/Question')

const newQs= {
    title: "excell problem",
    description: "some text here",
    role: "user",
    image: "",
    status: "public" 
}
describe("GET /questions/abcd123", ()=>{
    it('404 data not found', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).delete(`/questions/${question.id}`, deleteQuestion)
        expect(single.status).toBe(404);
    })
    it('should get a single question info', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).delete(`/questions/${question.id}`, deleteQuestion).set(
            "authorization", user.data?.access_token
        )
        expect(single.status).toBe(204)
    })
})