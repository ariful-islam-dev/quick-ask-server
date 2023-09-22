const request = require('supertest')
const app = require('../../../src/app')
const { register } = require('../../../src/api/v1/Auth')
const { createUser, findUserById, updateUser } = require('../../../src/api/v1/User')

const newUser = {
    name: "Ariful islam",
    email:"ariful@gmail.com",
    password: "pass1234",
    role: "admin"
}
const usernewCreate = {
    name: "Islam",
    email:"islam@gmail.com",
    password: "pass1234",
    role: "user"
}
describe("Patch /users/id ", ()=>{
    it("should get a single user by admin", async()=>{
        //create a user
        const regUser = await request(app).post("/auth/register", register).send(newUser);
        expect(regUser.status).toBe(201);
        expect(typeof regUser.data.access_token).toBe('string');

        //Create a new user users
        const users = await request(app).post("/users", createUser).send(usernewCreate).set('authorization', regUser.data.access_token);
        expect(users.status).toBe(201);

        //change a single users password
        const userCreate = await request(app).patch(`/users/${users.id}`, updateUser).send({password: "pass12345"}).set('authorization', regUser.data?.access_token);
        expect(userCreate.status).toBe(200);

        
    })
})