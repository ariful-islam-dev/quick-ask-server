const { hashing } = require("../../src/utils/hashing.js");



describe('Password Hasshing', ()=>{
    it('Should create a hash password', async()=>{
        const password = "demo1234"
        const hash = await hashing(password);
        expect(typeof hash).toBe('string')
    });

    it("Should Vertify a hash password", ()=>{

    })
})