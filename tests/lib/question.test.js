const { createQuestion, findAllQuestion } = require("../../src/lib/Question")

const qusData = {
    title: "Web desing RGB Color problem",
    description: "I don't know about RGB or RGBA color. Please healp me",
    image:"",
    status:"public",
    author: "64f761594ce3b0130a5a85d2"
}

const config = require("../../src/config/default")
describe("question system service function", async()=>{
    it("create a new question", async()=>{
        
        const question = await createQuestion(qusData.title, qusData.description, qusData.image, qusData.status, qusData.author);
        expect(question.author).toBeTruthy();
    })

    it("Should find all user", async()=>{
        const question = await findAllQuestion(config.page, config.limit, config.sortBy, config.sortType, config.search);
        expect(question.author).toBeTruthy();
    }
});