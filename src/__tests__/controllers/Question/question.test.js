import axios from "axios";
const url = 'http://127.0.0.1:4000/api/v1';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjhiYWJlMzg1MDliMTA1NDQ0NDJlOCIsIm5hbWUiOiJBcmlmdWwgSXNsYW0gUmFqdSIsImVtYWlsIjoiYXJpZnVsNDA4MkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJzdGF0dXMiOiJwdWJsaWMiLCJpYXQiOjE2OTQ3OTA5NzMsImV4cCI6MTY5NDc5NDU3M30.4cq2IQK7CkqR3Q6bepYNxPTPuvUnYt4CHDnwzByfyNA";

describe("GET /questions", () => {
    test("Get All Questions", async () => {
        const res = await axios.get(`${url}/questions`)

        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
        expect(res.data.message).toEqual('Get All Question')
    })

})

describe("POST /questions", () => {
    test("Create a new question", async () => {
        const res = await axios.post(`${url}/questions`, {
            title: "Excel Sheet subtraction",
            description: "How can use excel subtraction method",
            image: "",
            status: "public"
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`
            }
        }
        )

        expect(res.status).toBe(201)
    }
    )
})

describe("GET /questions/questionId", ()=>{
    test("Get a single question", async()=>{
        const res = await axios.get(`${url}/questions/64f8f249d71f96c924c3566c`);
        expect(res).toBeTruthy();
        expect(res.status).toBe(200);
        expect(res.data.message).toEqual("Retrive a single user data Successfully") 
    })
})

