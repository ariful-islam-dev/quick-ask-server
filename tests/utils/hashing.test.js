const { hashing, matchHashing } = require("../../src/utils/hashing.js");


const password = "demo1234"

describe('Password Hasshing', ()=>{
    it('Should create a hash password', async()=>{
        const hash = await hashing(password);
        expect(typeof hash).toBe('string');
        expect(hash).toBeTruthy();
    });

    it("Should Vertify a hash password", async()=>{
        const hash = await hashing(password);

        const match = await matchHashing(password, hash);

        expect(match).toBe(true);
        expect(match).toBeTruthy();

    })

    it('should reject an incorrect password', async()=>{
        const rowpass = '123pass';

        const hash = await hashing(password);
        const match = await matchHashing(rowpass, password);

        expect(match).toBe(false)
    })
})