const config = require('../../../src/config/default')

const { createUser, findAllUser, existUser } = require("../../../src/lib/User")
const findUserByEmail = require('../../../src/lib/User/findUserByEmail')


const userInfo = {
    name: 'Assadullah labib',
    email: "labib@example.com",
    password: "pass123"
}
describe('User handle system', ()=>{
    it('should create a new user', () => {
       
        const user = createUser(userInfo.name, userInfo.email, userInfo.password)
        user.then(user=>{
            expect(user.name).toBe("Assadullah labib")
        })

    })

    it('should find all user', ()=>{
        const users =  findAllUser(config.page, config.limit, config.sortBy, config.sortType, config.search);
        users.then(data=>{
            expect(data.status).toBe(200)
        })
    })

    it('should find a single user', ()=>{
        findUserByEmail(userInfo.email).then(data=>{
            expect(typeof user.id).toBe('string')
            expect(user.name).toBeTruthy()
        }).catch(e=> {
            throw e
        })
    })

    it('should have user already existing', ()=>{
        existUser(userInfo.email).then(data=>{
            expcet(data).toEquel(true)
        })
    })


   })
