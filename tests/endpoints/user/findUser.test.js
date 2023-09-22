const request = require('supertest')
const app = require('../../../src/app')
const { register } = require('../../../src/api/v1/Auth')
const { findAllUser } = require('../../../src/api/v1/User')

const newUser = {
    name: "Ariful islam",
    email:"ariful@gmail.com",
    password: "pass1234",
    role: "admin"
}
describe("GET /users ", ()=>{
    it("should get all user by admin", async()=>{
        //create a user
        const regUser = await request(app).post("/auth/register", register).send(newUser);
        expect(regUser.status).toBe(201);
        expect(typeof regUser.data.access_token).toBe('string');

        //get all users
        const users = await request(app).get("/users", findAllUser).set('authorization', regUser.data.access_token);
        expect(users.status).toBe(200);
        expect(users.message).toEqual("GET All User")

    })
})

