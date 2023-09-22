const config = require('../../../src/config/default')
const { findAllAnswer, findSingleAnswer } = require('../../../src/lib/Answer')
const { patchUpdateQuestion } = require('../../../src/lib/Question')

const questionId = "64f7ec6c1e81ccb2bec3ac83"

const question = {
    title:"Heading of the question",
    description:"Some text heare",
    image:"",
    status: "public"
}
describe('PATCH handle system', () => {
    it('should update question data', () => {

        patchUpdateQuestion(questionId, {...question},user= {role:"admin"} ).then(data => {
            expect(data).toBeTruthy();
        }).catch(err=>{
            throw err
        })

    })



   })
