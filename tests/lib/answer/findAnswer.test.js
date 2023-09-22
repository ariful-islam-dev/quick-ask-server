const config = require('../../../src/config/default')
const { findAllAnswer } = require('../../../src/lib/Answer')



const userInfo = {
    body: "Goto and read documentation"
}
describe('Answer handle system', () => {
    it('GET all answer data', () => {

        findAllAnswer().then(data => {
            expect(data).not.toEqual(null)
        }).catch(err=>{
            throw err
        })

    })



   })
