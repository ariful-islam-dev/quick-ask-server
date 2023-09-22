const findUserByEmail = require("../../../src/lib/User/findUserByEmail")
const userInfo = {
    name: 'Assadullah labib',
    email: "labib@example.com",
    password: "pass123"
}

describe("GET users/id", ()=>{
    it('should find a single user', ()=>{
        findUserByEmail(userInfo.email).then(data=>{
            expect(typeof data.id).toBe('string')
            expect(data.name).toBeTruthy()
        }).catch(e=> {
            throw e
        })
    })
})