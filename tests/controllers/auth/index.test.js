const  axios = require("axios")
const { register } = require("../../../src/api/v1/Auth")
const payload = {
    name:"adbls",
    email: "aboes@mgial.com",
    password: "aoeufs13"
}

describe("Authentication system", ()=>{
    it("should register a new user", async()=>{
        const user = await axios.post("/api/v1/auth/register", payload);
        expect(user.status).toBe(201)
    })
    
})