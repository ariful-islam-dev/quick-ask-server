const { updateUser } = require("../../../src/lib/User")
const userInfo = {
    name: 'Assadullah labib',
    email: "labib@example.com",
    password: "pass123"
}

describe("PATCH users/id", ()=>{
    it('should find a single user', ()=>{
        updateUser(userInfo.email).then(data=>{
            expect(typeof data.id).toBe('string')
        }).catch(e=> {
            throw e
        })
    })
})