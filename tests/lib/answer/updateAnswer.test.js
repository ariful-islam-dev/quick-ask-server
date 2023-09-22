const config = require('../../../src/config/default')
const {  updateAnswer } = require('../../../src/lib/Answer')



const userInfo = {
    body: "Goto and read documentation",
    questionId : "64f7ec6c1e81ccb2bec3ac83"
}
describe('PATCH /answers/id', () => {
    it('should update a answer data', () => {

        updateAnswer(userInfo.questionId).then(data => {
            expect(data).toBeTruthy();
        }).catch(err=>{
            throw err
        })

    })



   })
