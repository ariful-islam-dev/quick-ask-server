

const request = require('supertest')
const app = require('../../../src/app')
const { createQuestion, findSingleQuestion, putUpdateQuestion } = require('../../../src/api/v1/Question')

const newQs= {
    title: "excell problem",
    description: "some text here",
    image: "",
    status: "public" 
}
const payload = {
    email: "ariful@example.com",
    name: "ariful",
    password: "pass1234"
}

describe("GET /questions/abcd123", ()=>{
    it('404 data not found', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const single= await request(app).put(`/questions/${question.id}`, putUpdateQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        expect(single.status).toBe(404);
    })
    it('should update a single document of question\'s info', async()=>{
        const user = await request(app).post("/auth/register", register).send(payload);
        const question = await request(app).post("/questions", createQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        const updateQuestion = {
            title: "excell problem" || question.title,
            description: "some text here" || question.description,
            image: "" || question.image,
            status: "public" || question.status
        }
        const single= await request(app).put(`/questions/${question.id}`, putUpdateQuestion).send(updateQuestion).set(
            "authorization", user.data?.access_token
        )
        expect(single).toBe(200)
    })
})