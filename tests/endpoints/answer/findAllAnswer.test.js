const request = require("supertest")
const app = require("../../../src/app")
const { findAllAnswer } = require("../../../src/api/v1/Answer")
const auth = {
    name: "Ariful islam",
    email:"ariful@info.mail",
    password: "pass1234"
}
describe("GET /answers", ()=>{
    it("should be get all answers", async()=>{
        let authUser = await request(app).post("/auth/register").send(auth);
        


        // get all answers
        let answers = await request(app).get("/answers", findAllAnswer).set("authorization", authUser.data?.access_token);
        
        expect(answers.status).toBe(200);
    })
})