

const request = require('supertest')
const app = require('../../../src/app')
const { createQuestion, patchUpdateQuestion } = require('../../../src/api/v1/Question')

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
        const single= await request(app).patch(`/questions/${question.id}`, patchUpdateQuestion).send(newQs).set(
            "authorization", user.data?.access_token
        )
        expect(single.status).toBe(404);
    })
    it('should update question info', async()=>{
        
        const question = await request(app).post("/questions", createQuestion).send(newQs)
        const single= await request(app).patch(`/questions/${question.id}`, patchUpdateQuestion).send({image: "https//image.com/img.png "})
        expect(single.status).toBe(200)
    })
})