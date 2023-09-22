const config = require('../../../src/config/default')
const { findAllAnswer, findSingleAnswer } = require('../../../src/lib/Answer')
const { findSingleQuestion, deleteQuestion } = require('../../../src/lib/Question')



const questionId = "64f7ec6c1e81ccb2bec3ac83"

describe('DELETE /question/id handle system', () => {
    it('should delete a single Question data', () => {

        deleteQuestion(questionId).then(data => {
            expect(data).toBe(true)
        }).catch(err => {
            throw err
        })

    })



})
