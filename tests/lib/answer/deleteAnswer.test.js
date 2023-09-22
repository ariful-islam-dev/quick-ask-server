const config = require('../../../src/config/default')
const { findAllAnswer, findSingleAnswer, removeAnswer } = require('../../../src/lib/Answer')



const userInfo = {
    body: "Goto and read documentation",
    questionId : "64f7ec6c1e81ccb2bec3ac83"
}
describe('Answer handle system', () => {
    it('GET all answer data', () => {

        removeAnswer(userInfo.questionId).then(data => {
            expect(data).toEqual(true);
        }).catch(err=>{
            throw err
        })

    })



   })
