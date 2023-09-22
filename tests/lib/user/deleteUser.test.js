const { deleteUser } = require("../../../src/lib/User")
const userInfo = {
    name: 'Assadullah labib',
    email: "labib@example.com",
    password: "pass123"
}

describe("GET users/id", ()=>{
    it('should delete a single user', ()=>{
        deleteUser(userInfo.email).then(data=>{
            expect(data).toEqual(true)
        }).catch(e=> {
            throw e
        })
    })
})