const {findAllQuestion} = require("../../../src/api/v1/Question")

describe("GET /questions", ()=>{
    it("should get all queistons", async()=>{
        const quiestons = await findAllQuestion()
    }
})