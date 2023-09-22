const request = require('supertest')
const app = require('../../../src/app')
const { register } = require('../../../src/api/v1/Auth')
const { findAllUser, createUser } = require('../../../src/api/v1/User')

const newUser = {
    name: "Ariful islam",
    email:"ariful@gmail.com",
    password: "pass1234",
    role: "admin"
}
const createNewUser = {
    name: "Islam",
    email:"islam@gmail.com",
    password: "pass1234",
    role: "user"
}
describe("POST /users ", ()=>{
    it("should get all user by admin", async()=>{
        //create a user
        const regUser = await request(app).post("/auth/register", register).send(newUser);
        expect(regUser.status).toBe(201);
        expect(typeof regUser.data.access_token).toBe('string');

        //Create a new user users
        const users = await request(app).post("/users", createUser).send(createNewUser).set('authorization', regUser.data.access_token);
        expect(users.status).toBe(201);

    })
})
