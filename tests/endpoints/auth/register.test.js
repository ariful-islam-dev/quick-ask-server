const request = require("supertest")
const app = require("../../../src/app")
const { register } = require("../../../src/api/v1/Auth")

const payload = {
    name: 'ariful',
    email: "ariful@example.com",
    password: "pass1234"
}
describe("POST /auth/register", ()=>{
    it('should create a new user', async()=>{
        const token = await request(app).post("/auth/register", register).send(payload);
        expect(token.status).toBe(201);
    })
})