const config = require('../../../src/config/default')
const { findAllAnswer, findSingleAnswer } = require('../../../src/lib/Answer')



const userInfo = {
    body: "Goto and read documentation",
    answerId : "64f7ec6c1e81ccb2bec3ac83"
}
describe('Answer handle system', () => {
    it('GET answer data', () => {

        findSingleAnswer(userInfo.answerId).then(data => {
            expect(data).toBeTruthy();
        }).catch(err=>{
            throw err
        })

    })



   })
