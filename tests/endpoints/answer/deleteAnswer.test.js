const request = require("supertest")
const app = require("../../../src/app")
const { createQuestion } = require("../../../src/api/v1/Question")
const { updateAnswer } = require("../../../src/api/v1/Answer")
const auth = {
    name: "Ariful islam",
    email: "ariful@info.mail",
    password: "pass1234"
}
describe("GET /answers/id", () => {
    it("should be update a answer body", async () => {
        const authUser = await request(app).post("/auth/register").send(auth);

        // create a question
        const question = await request(app).post("/questions", createQuestion).send({
            title: "Not Bold my heading in msword",
            description: "Word document is open but show not active",
            image: "http://www.imgBB.io/photo.png",
            status: "public"
        }).set("authorization", authUser.data?.access_token);

        //create answer
        const answersNew = await request(app).post("/answers").send({ questionId: question.id }).set("authorization", authUser.data?.access_token);

        // get all answers
        const answers = request(app).delete(`/answers/${answersNew.id}`, updateAnswer)
        .set("authorization", authUser.data?.access_token);
        expect(answers.status).toBe(204);
    })
})