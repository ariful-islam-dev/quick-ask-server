const request = require("supertest")
const app = require("../../../src/app")

const { login, register } = require("../../../src/api/v1/Auth")

const payload = {
    name: 'ariful',
    email: "ariful@example.com",
    password: "pass1234"
}
describe("POST /auth/register", () => {
    it('should create a new user', async () => {
        await request(app).post("/api/v1/auth/register", register).send(payload);
        const response = await request(app).post("/api/v1/auth/login", login).send({ email: payload.email, password: payload.password });
        expect(response.status).toBe(200);
    });
    
    it("invalide creadential", async()=>{
        const pass = 'asbeosu12233232'
        await request(app).post("/api/v1/auth/register", register).send(payload);
        const response = await request(app).post("/api/v1/auth/login", login).send({ email: payload.email, password: "apss1245" });
        expect(response.status).toBe(400);
    })
})