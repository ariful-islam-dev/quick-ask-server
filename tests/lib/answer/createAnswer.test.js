const config = require('../../../src/config/default')
const { findAllAnswer, createAnswer } = require('../../../src/lib/Answer')



const userInfo = {
    body: "Goto and read documentation"
}
describe('Answer handle system', () => {
    it('Create new answer data', () => {

        createAnswer().then(data => {
            expect(data.status).toBe(200)
        }).catch(err=>{
            throw err
        })

    })



   })
