const config = require('../../../src/config/default')
const { findAllAnswer, findSingleAnswer } = require('../../../src/lib/Answer')
const { findSingleQuestion } = require('../../../src/lib/Question')



const userInfo = {
    body: "Goto and read documentation",
    questionId : "64f7ec6c1e81ccb2bec3ac83"
}
describe('GET /question/id handle system', () => {
    it('GET  a single Question data', () => {

        findSingleQuestion(userInfo.questionId).then(data => {
            expect(data).toBeTruthy();
        }).catch(err=>{
            throw err
        })

    })



   })
